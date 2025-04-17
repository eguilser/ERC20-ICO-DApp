// contracts/TokenSale.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;


import "./MyToken.sol";

contract TokenSale {
    MyToken public token;
    address public owner;
    uint256 public rate; // Número de tokens por cada Ether

    event TokensPurchased(address indexed purchaser, uint256 amountOfEther, uint256 tokensBought);

    constructor(MyToken _token, uint256 _rate) {
        token = _token;
        rate = _rate;
        owner = msg.sender;
    }

    // Función para comprar tokens. Es payable para recibir Ether.
    function buyTokens() public payable {
        require(msg.value > 0, "Debes enviar Ether para comprar tokens");
        uint256 tokensToBuy = msg.value * rate;
        // Verifica que el contrato tenga permiso de transferir los tokens del propietario
        require(token.allowance(owner, address(this)) >= tokensToBuy, "El contrato no tiene permiso para transferir los tokens");
        // Transfiere los tokens desde el propietario al comprador
        token.transferFrom(owner, msg.sender, tokensToBuy);
        emit TokensPurchased(msg.sender, msg.value, tokensToBuy);
    }
    
    // Permite al propietario retirar el Ether acumulado
    function withdraw() public {
        require(msg.sender == owner, "Solo el propietario puede retirar Ether");
        payable(owner).transfer(address(this).balance);
    }
}

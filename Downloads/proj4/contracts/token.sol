// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// Your token contract

contract Token is Ownable,ERC20 {
    string private constant _symbol = 'K';                 // TODO: Give your token a symbol (all caps!)
    string private constant _name = 'Khanh';                 // TODO: Give your token a name
    bool internal disabled_mint = true;
    //address initialOwner = "22bB87DB41bAFC3D826a699cFb80513D1d07b140";
    //address _owner;
    // TODO: add private members as needed!
    // TODO: if you create private member, initialize it in the constructor
    constructor() Ownable(msg.sender) ERC20(_name, _symbol) {}
    //constructor() Ownable(initialOwner) {}
    // ============================================================
    //                    FUNCTIONS TO IMPLEMENT
    // ============================================================

    // Function mint: Create more of your tokens.
    // You can change the inputs, or the scope of your function, as needed.
    // Do not remove the onlyOwner modifier!
    function mint(uint amount) public onlyOwner
    {
        require(disabled_mint == true,"Your token's minting capability has been disabled");
        _mint(msg.sender, amount);
        /******* TODO: Implement this function *******/

    }

    // Function disable_mint: Disable future minting of your token.
    // You can change the inputs, or the scope of your function, as needed.
    // Do not remove the onlyOwner modifier!
    function disable_mint() public onlyOwner
    {
        /******* TODO: Implement this function *******/
        disabled_mint = false;
    }
}
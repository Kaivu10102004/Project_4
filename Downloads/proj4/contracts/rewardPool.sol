// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
import "./token.sol";
contract Reward {
    address tokenAddr = 0xe9b78511874D43c7351aa086f3533962543DaaCE;                                  // TODO: paste token contract address here
    Token public token = Token(tokenAddr);  
    receive() external payable {}

    // Fallback function is called when msg.data is not empty
    fallback() external payable {}

    function ETH_getBalance() public view returns (uint) {
        return address(this).balance;
    }
    function Token_getBalance() public view returns (uint){
        return token.balanceOf(address(this));
    }

    function approveAddr(address dex, uint256 amount) public {
        token.approve(dex, amount);
    }
    
    function ETH_return( address _to, uint256 ETHreward ) public {
        (bool sent, ) = _to.call{value: ETHreward}("");
        require(sent, "Failed to send Ether");
    }
}
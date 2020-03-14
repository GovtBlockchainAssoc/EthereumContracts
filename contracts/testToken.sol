pragma solidity ^0.5.0;

import "@openzeppelin/contracts-ethereum-package/contracts/token/ERC20/StandaloneERC20.sol";

contract testToken is StandaloneERC20 {

    event OurTransfer(address from, address to, uint256 value, string memo);

    function ourTransferFrom(address sender, address recipient, uint256 amount, string memory memo) public {
        transferFrom(sender, recipient, amount);
        emit OurTransfer(sender, recipient, amount, memo);
    }
}
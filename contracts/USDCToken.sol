// SPDX-License-Identifier: MIT
pragma solidity >=0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract USDCToken is ERC20, Ownable {
    constructor() ERC20("USDCToken", "$USDCToken") Ownable() {
        _mint(msg.sender, 300000000000 * 10 ** decimals());
    }

    function decimals() public pure virtual override returns (uint8) {
        return 6;
    }
}

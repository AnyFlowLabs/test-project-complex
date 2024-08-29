// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "./AnyflowChildHelloWorld.sol";

contract AnyflowParentHelloWorld {
    address[] public children;

    constructor() {}

    function addChild(address _address) public {
        children.push(_address);
        AnyflowChildHelloWorld child = AnyflowChildHelloWorld(_address);
        child.setParentAddress(address(this));
    }

    function callHello() public {
        for (uint i = 0; i < children.length; i++) {
            AnyflowChildHelloWorld child = AnyflowChildHelloWorld(children[i]);
            child.hello();
        }
    }
}

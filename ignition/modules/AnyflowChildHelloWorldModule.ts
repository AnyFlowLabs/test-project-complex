import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("AnyflowChildHelloWorld", (m) => {
    const message = "Hello, from AnyFlow!";
    const child = m.contract("AnyflowChildHelloWorld", [message], {
        id: "AnyflowChildHelloWorld_1",
    });

    return { child };
});
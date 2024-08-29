import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import AnyflowChildHelloWorldModule from "./AnyflowChildHelloWorldModule";

export default buildModule("AnyflowParentHelloWorld", (m) => {
    const { child } = m.useModule(AnyflowChildHelloWorldModule);

    const parent = m.contract("AnyflowParentHelloWorld", [], {
        after: [child],
    });

    m.call(parent, "addChild", [child]);
    m.call(parent, "callHello");

    return { parent, child };
});
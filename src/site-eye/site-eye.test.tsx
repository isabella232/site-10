import { describe, it, expect } from "vitest";
import { fixture } from "atomico/test-dom";
import { SiteEye } from "./site-eye";

describe("SiteEye", () => {
    it("default properties", () => {
        const node = fixture<typeof SiteEye>(<SiteEye />);

        expect(node.myProp).toEqual("value");
    });

    it("Check DOM", async () => {
        const node = fixture<typeof SiteEye>(<SiteEye />);

        node.showInput = true;

        await node.updated; // or updated

        expect(node.shadowRoot.querySelector("input")).toBeInstanceOf(
            HTMLInputElement
        );
    });
});
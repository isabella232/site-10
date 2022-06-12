import { describe, it, expect } from "vitest";
import { fixture } from "atomico/test-dom";
import { SiteAtom } from "./site-atom";

describe("SiteAtom", () => {
    it("default properties", () => {
        const node = fixture<typeof SiteAtom>(<SiteAtom />);

        expect(node.myProp).toEqual("value");
    });

    it("Check DOM", async () => {
        const node = fixture<typeof SiteAtom>(<SiteAtom />);

        node.showInput = true;

        await node.updated; // or updated

        expect(node.shadowRoot.querySelector("input")).toBeInstanceOf(
            HTMLInputElement
        );
    });
});
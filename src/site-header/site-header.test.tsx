import { describe, it, expect } from "vitest";
import { fixture } from "atomico/test-dom";
import { SiteHeader } from "./site-header";

describe("SiteHeader", () => {
    it("default properties", () => {
        const node = fixture<typeof SiteHeader>(<SiteHeader />);

        expect(node.myProp).toEqual("value");
    });

    it("Check DOM", async () => {
        const node = fixture<typeof SiteHeader>(<SiteHeader />);

        node.showInput = true;

        await node.updated; // or updated

        expect(node.shadowRoot.querySelector("input")).toBeInstanceOf(
            HTMLInputElement
        );
    });
});
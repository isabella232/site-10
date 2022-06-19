import { describe, it, expect } from "vitest";
import { fixture } from "atomico/test-dom";
import { SiteButton } from "./site-button";

describe("SiteButton", () => {
    it("default properties", () => {
        const node = fixture<typeof SiteButton>(<SiteButton />);

        expect(node.myProp).toEqual("value");
    });

    it("Check DOM", async () => {
        const node = fixture<typeof SiteButton>(<SiteButton />);

        node.showInput = true;

        await node.updated; // or updated

        expect(node.shadowRoot.querySelector("input")).toBeInstanceOf(
            HTMLInputElement
        );
    });
});
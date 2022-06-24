import { describe, it, expect } from "vitest";
import { fixture } from "atomico/test-dom";
import { SiteLink } from "./site-link";

describe("SiteLink", () => {
    it("default properties", () => {
        const node = fixture<typeof SiteLink>(<SiteLink />);

        expect(node.myProp).toEqual("value");
    });

    it("Check DOM", async () => {
        const node = fixture<typeof SiteLink>(<SiteLink />);

        node.showInput = true;

        await node.updated; // or updated

        expect(node.shadowRoot.querySelector("input")).toBeInstanceOf(
            HTMLInputElement
        );
    });
});
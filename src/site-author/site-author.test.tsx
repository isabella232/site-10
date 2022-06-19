import { describe, it, expect } from "vitest";
import { fixture } from "atomico/test-dom";
import { SiteAuthor } from "./site-author";

describe("SiteAuthor", () => {
    it("default properties", () => {
        const node = fixture<typeof SiteAuthor>(<SiteAuthor />);

        expect(node.myProp).toEqual("value");
    });

    it("Check DOM", async () => {
        const node = fixture<typeof SiteAuthor>(<SiteAuthor />);

        node.showInput = true;

        await node.updated; // or updated

        expect(node.shadowRoot.querySelector("input")).toBeInstanceOf(
            HTMLInputElement
        );
    });
});
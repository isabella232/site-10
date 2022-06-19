import { c, css } from "atomico";
import { tokens } from "../site-tokens/site-tokens";

function siteButton() {
    return (
        <host shadowDom>
            <slot></slot>
        </host>
    );
}

siteButton.props = {
    myProp: String
};

siteButton.styles = [
    tokens,
    css`
        :host {
            display: block;
        }
    `
];

export const SiteButton = c(siteButton);

customElements.define("site-button", SiteButton);
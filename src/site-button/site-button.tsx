import { Props, c, css } from "atomico";
import { tokens } from "../site-tokens/site-tokens";

function siteButton() {
    return (
        <host shadowDom>
            <slot></slot>
        </host>
    );
}

siteButton.props = {};

siteButton.styles = [
    tokens,
    css`
        :host {
            display: grid;
            border: var(--button-border-width) solid var(--button-border-color);
            border-radius: var(--button-border-radius);
            justify-content: center;
            align-items: center;
            gap: var(--button-gap);
            grid-template-columns: auto auto;
            padding: var(--button-padding);
        }
    `,
];

export const SiteButton = c(siteButton);

customElements.define("site-button", SiteButton);

import { c, css } from "atomico";
import { tokens } from "../site-tokens/site-tokens";

function siteLink() {
    return (
        <host shadowDom>
            <slot></slot>
        </host>
    );
}

siteLink.props = {
    myProp: String,
};

siteLink.styles = [
    tokens,
    css`
        :host {
            display: block;
            color: var(--color-title);
            text-transform: uppercase;
            font-size: var(--size-3);
            letter-spacing: var(--size-1);
            text-align: center;
        }
    `,
];

export const SiteLink = c(siteLink);

customElements.define("site-link", SiteLink);

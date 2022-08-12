import { Props, c, css } from "atomico";
import { tokens } from "../site-tokens/site-tokens";

function siteButton({ color }: Props<typeof siteButton>) {
    return (
        <host shadowDom>
            <slot></slot>
            {color && (
                <style>{`:host{--button-border-color:var( --color-${color},${color} )!important}`}</style>
            )}
        </host>
    );
}

siteButton.props = {
    small: { type: Boolean, reflect: true },
    color: { type: String, reflect: true },
};

siteButton.styles = [
    tokens,
    css`
        :host {
            display: inline-grid;
            border: var(--button-border-width) solid var(--button-border-color);
            border-radius: var(--button-border-radius);
            justify-content: center;
            align-items: center;
            gap: var(--button-gap);
            grid-template-columns: auto auto;
            padding: var(--button-padding);
            cursor: pointer;
            font-size: var(--button-font-size);
            transition: 0.3s ease all;
            color: var(--button-color);
        }
    `,
];

export const SiteButton = c(siteButton);

customElements.define("site-button", SiteButton);

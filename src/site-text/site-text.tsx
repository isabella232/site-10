import { Props, c, css } from "atomico";
import { tokens } from "../site-tokens/site-tokens";

function siteText({ size, color }: Props<typeof siteText>) {
    return (
        <host shadowDom>
            <slot></slot>
            <style>{`:host{
                --font-size: var(--size-${size});
                --color: var(--color-${color});
            }`}</style>
        </host>
    );
}

siteText.props = {
    size: { type: Number, value: 4 },
    color: { type: String, value: "text" },
};

siteText.styles = [
    tokens,
    css`
        :host {
            color: var(--color);
            font-size: var(--font-size);
            line-height: var(--font-line-text);
        }
        ::slotted(*) {
            margin: 0;
        }
    `,
];

export const SiteText = c(siteText);

customElements.define("site-text", SiteText);

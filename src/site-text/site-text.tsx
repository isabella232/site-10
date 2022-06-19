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
            font-weight: var(--font-weight-text);
        }
        ::slotted(*) {
            margin: 0;
        }
        ::slotted(strong) {
            font-weight: var(--font-weight-bold);
            color: var(--color-accent);
        }
        ::slotted(h1),
        ::slotted(h2),
        ::slotted(h3),
        ::slotted(h4),
        ::slotted(h5),
        ::slotted(h6) {
            color: var(--color-title);
        }
    `,
];

export const SiteText = c(siteText);

customElements.define("site-text", SiteText);

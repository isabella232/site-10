import { Props, c, css } from "atomico";
import { tokens } from "../site-tokens/site-tokens";

function siteTitle({ size }: Props<typeof siteTitle>) {
    return (
        <host shadowDom>
            <slot></slot>
            <style>{`:host{--font-size: var(--size-${size})}`}</style>
        </host>
    );
}

siteTitle.props = {
    size: {
        type: Number,
        value: 7,
    },
};

siteTitle.styles = [
    tokens,
    css`
        :host {
            color: var(--color-title);
            line-height: var(--font-line-title);
            font-weight: var(--font-weight-title);
            position: relative;
        }
        ::slotted(*) {
            font-size: var(--font-size);
            margin: 0px;
        }
    `,
];

export const SiteTitle = c(siteTitle);

customElements.define("site-title", SiteTitle);

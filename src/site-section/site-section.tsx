import { c, css } from "atomico";
import { tokens } from "../site-tokens/site-tokens";

function siteSection() {
    return (
        <host shadowDom>
            <div class="layout">
                <div class="left grid">
                    <slot></slot>
                </div>
                <div class="right grid">
                    <slot name="right"></slot>
                </div>
                <div class="content grid">
                    <slot name="content"></slot>
                </div>
            </div>
        </host>
    );
}

siteSection.props = {
    myProp: String,
};

siteSection.styles = [
    tokens,
    css`
        :host {
            --gap: var(--size-7);
            --padding: var(--size-8) var(--size-4);
            display: block;
            padding: var(--padding);
            background: var(--color-background);
            box-sizing: border-box;
        }
        .left {
            grid-area: left;
        }
        .right {
            grid-area: right;
        }
        .content {
            grid-area: content;
        }
        .grid {
            display: grid;
            gap: var(--size-7);
        }
        .layout {
            max-width: var(--maxwidth);
            margin: auto;
            display: grid;
            align-items: center;
            gap: var(--gap);
            grid-template:
                "left right" auto
                "content content" auto / 1fr 1fr;
        }
    `,
];

export const SiteSection = c(siteSection);

customElements.define("site-section", SiteSection);

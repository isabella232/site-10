import { Props, c, css } from "atomico";
import { tokens } from "../site-tokens/site-tokens";

function siteSection({ myProp }: Props<typeof siteSection>) {
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
            display: block;
            background: var(--color-background);
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
            grid-template:
                "left right" auto
                "content content" auto / 1fr 1fr;
        }
    `,
];

export const SiteSection = c(siteSection);

customElements.define("site-section", SiteSection);

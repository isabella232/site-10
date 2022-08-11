import { Props, c, css } from "atomico";
import { tokens } from "../site-tokens/site-tokens";

function siteSection({ bigLabel }: Props<typeof siteSection>) {
    return (
        <host shadowDom>
            <div class="layout">
                {bigLabel && (
                    <div class="header">
                        <div class="bigLabel">{bigLabel}</div>
                        <div class="bigLabel-gradient"></div>
                    </div>
                )}
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
    bigLabel: String,
    context: { type: String, reflect: true, value: "section" },
    align: { type: String, reflect: true },
};

siteSection.styles = [
    tokens,
    css`
        :host {
            --font-big-label: 30vh;
            --gap: var(--size-8);
            --padding: var(--size-8) var(--size-5);
            --align: center;
            display: block;
            padding: var(--padding);
            background: var(--color-background);
            box-sizing: border-box;
        }
        :host([align="top"]) {
            --align: top;
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
        .content-left {
            grid-area: content-left;
        }
        .content-right {
            grid-area: content-right;
        }
        .grid.left,
        .grid.right,
        .grid.content {
            gap: var(--size-5);
        }
        .grid {
            display: grid;
            gap: var(--size-7);
            position: relative;
        }

        .header-mask {
            position: absolute;
        }
        .layout {
            max-width: var(--maxwidth);
            margin: auto;
            display: grid;
            align-items: var(--align);
            gap: var(--gap);
            grid-template:
                "left right" auto
                "content content" auto / 1fr 1fr;
        }
        @media (max-width: 768px) {
            .layout {
                grid-template:
                    "left" auto
                    "right" auto
                    "content" auto / 1fr;
            }
        }
    `,
];

export const SiteSection = c(siteSection);

customElements.define("site-section", SiteSection);

import { c, css } from "atomico";
import { tokens } from "../site-tokens/site-tokens";

function siteMenu() {
    return (
        <host shadowDom>
            <slot name="icon">
                <svg width="30" height="13" viewBox="0 0 30 13">
                    <g
                        id="Group_53"
                        data-name="Group 53"
                        transform="translate(-1170 -77)"
                    >
                        <rect
                            id="Rectangle_142"
                            data-name="Rectangle 142"
                            width="30"
                            height="1"
                            transform="translate(1170 77)"
                            fill="#fff"
                        />
                        <rect
                            id="Rectangle_143"
                            data-name="Rectangle 143"
                            width="30"
                            height="1"
                            transform="translate(1170 83)"
                            fill="#fff"
                        />
                        <rect
                            id="Rectangle_144"
                            data-name="Rectangle 144"
                            width="30"
                            height="1"
                            transform="translate(1170 89)"
                            fill="#fff"
                        />
                    </g>
                </svg>
            </slot>
            <div class="content-fixed">
                <div class="content-inner">
                    <slot></slot>
                </div>
            </div>
        </host>
    );
}

siteMenu.props = {
    myProp: String,
};

siteMenu.styles = [
    tokens,
    css`
        :host {
            display: block;
        }
        .content-fixed {
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0px;
            left: 0px;
            background: var(--color-background);
        }
        .content-inner {
            max-width: var(--maxwidth);
            height: 100%;
            margin: auto;
            position: relative;
        }
    `,
];

export const SiteMenu = c(siteMenu);

customElements.define("site-menu", SiteMenu);

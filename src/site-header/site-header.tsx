import { c, css } from "atomico";
import { tokens } from "../site-tokens/site-tokens";

function siteHeader() {
    return (
        <host shadowDom>
            <div class="layout">
                <div>
                    <slot name="logo"></slot>
                </div>
                <div class="links">
                    <slot name="link"></slot>
                </div>
                <div class="actions">
                    <slot name="action"></slot>
                </div>
            </div>
        </host>
    );
}

siteHeader.props = {
    myProp: String,
};

siteHeader.styles = [
    tokens,
    css`
        :host {
            --width-between: 200px;
            --padding: var(--size-5) var(--size-4);
            width: 100%;
            display: block;
            position: absolute;
            top: 0px;
            left: 0px;
            z-index: 2;
            padding: var(--padding);
            box-sizing: border-box;
        }
        .layout {
            width: 100%;
            display: grid;
            margin: 0px auto;
            max-width: var(--maxwidth);
            display: grid;
            align-items: center;
            grid-template-columns: var(--width-between) 1fr var(--width-between);
        }
        .links {
            display: grid;
            grid-template-columns: auto auto auto;
            gap: 1rem;
            justify-content: center;
        }
        .actions {
        }
    `,
];

export const SiteHeader = c(siteHeader);

customElements.define("site-header", SiteHeader);

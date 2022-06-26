import { c, css, useHost } from "atomico";
import { tokens } from "../site-tokens/site-tokens";
import { useParallax } from "@atomico/hooks/use-parallax";
function siteLink() {
    const host = useHost();
    const state = useParallax(host);
    return (
        <host shadowDom>
            <div class="layer">
                <div className="layer-line"></div>
            </div>
            <slot></slot>
            <style>{`:host{--position-x: ${state.x}}`}</style>
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
            --padding: var(--size-2) 0px;
            --opacity: 0;
            --delay: 0s;
            display: block;
            color: var(--color-title);
            text-transform: uppercase;
            font-size: var(--size-3);
            letter-spacing: var(--size-1);
            text-align: center;
            padding: var(--padding);
            position: relative;
            cursor: pointer;
            overflow: hidden;
        }
        :host(:hover) {
            --opacity: 1;
            --delay: 0s;
        }
        .layer {
            width: 100%;
            height: var(--size-1);
            position: absolute;
            bottom: 0px;
            left: 0px;
            display: flex;
            justify-content: center;
            transform: translateX(calc(50% * var(--position-x)));
            transition: transform 0.5s linear, opacity 0.25s linear var(--delay);
            opacity: var(--opacity);
        }
        .layer-line {
            width: var(--size-4);
            height: 100%;
            background: white;
            border-radius: 100px;
        }
    `,
];

export const SiteLink = c(siteLink);

customElements.define("site-link", SiteLink);

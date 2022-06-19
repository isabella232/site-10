import { c, css, useHost } from "atomico";
import { tokens } from "../site-tokens/site-tokens";
import { useMouseMove } from "../site-isotype/hooks";

function siteAuthor() {
    const host = useHost();
    const state = useMouseMove(host);
    console.log(state);
    return (
        <host shadowDom>
            <slot></slot>
            <style>
                {`:host{
                    --percent-x: ${state.x};
                    --percent-y: ${state.y};
                }`}
            </style>
        </host>
    );
}

siteAuthor.props = {
    myProp: String,
};

siteAuthor.styles = [
    tokens,
    css`
        :host {
            display: block;
        }
        ::slotted(*) {
            transition: 2s linear;
            box-shadow: calc(120px * var(--percent-x))
                    calc(120px * var(--percent-y)) 200px red,
                -120px -120px 200px teal;
        }
    `,
];

export const SiteAuthor = c(siteAuthor);

customElements.define("site-author", SiteAuthor);

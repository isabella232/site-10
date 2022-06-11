import { Props, c, css } from "atomico";
import { tokens } from "../site-tokens/site-tokens";

function siteCard({ myProp }: Props<typeof siteCard>) {
    return (
        <host shadowDom>
            <slot></slot>
        </host>
    );
}

siteCard.props = {
    myProp: String,
};

siteCard.styles = [
    tokens,
    css`
        :host {
            --padding: var(--size-5);
            display: flex;
            padding: var(--padding);
            background: var(--color-bgcard);
            border: 1px solid var(--color-brcard);
            box-sizing: border-box;
        }
    `,
];

export const SiteCard = c(siteCard);

customElements.define("site-card", SiteCard);

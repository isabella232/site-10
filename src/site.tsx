import { c, css } from "atomico";
import {
    tokens,
    SiteGrid,
    SiteSection,
    SiteLink,
    SiteText,
    SiteTitle,
    SiteCount,
    SiteCard,
    SiteIsotype,
    SiteHeader,
    SiteButton,
    SiteAuthor,
    SiteMenu,
    SiteEye,
    SiteFooter,
} from "./components";
import imgStep1 from "./assets/step-1.svg";
import imgStep2 from "./assets/step-2.svg";
import imgStep3 from "./assets/step-3.svg";
import imgStep4 from "./assets/step-4.svg";
import imgAtom from "./assets/atom.svg";
import imgLogo from "./assets/logo.svg";
import imgLogoText from "./assets/logo-text.svg";
import imgAuthor from "./assets/author.jpg";
import imgByUppercod from "./assets/by-uppercod.svg";
import iconWatch from "./assets/icon-watch.svg";
import iconShadow from "./assets/icon-shadow.svg";
import iconFunction from "./assets/icon-function.svg";
import iconDiscord from "./assets/icon-discord.svg";
import iconLinkedin from "./assets/icon-linkedin.svg";
import iconTwitter from "./assets/icon-twitter.svg";
import iconDonation from "./assets/icon-donation.svg";
import iconCode from "./assets/icon-code.svg";
import iconShare from "./assets/icon-share.svg";

function site() {
    return (
        <host shadowDom>
                     
        </host>
    );
}

site.styles = [
    tokens,
    css`
        img {
            max-width: 100%;
        }
        .steps {
            display: grid;
            gap: var(--size-6);
        }
        .step {
            display: grid;
            gap: var(--size-4);
        }
        .step-img {
            width: 100%;
            max-width: 380px;
        }
        .icon-row {
            display: grid;
            align-items: center;
            grid-template-columns: auto 1fr;
            gap: var(--size-4);
        }
        .eye {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 0.5;
        }
        .menu {
            min-height: 100%;
            box-sizing: border-box;
            display: flex;
            align-items: flex-end;
        }
        .menu-items {
            display: flex;
            flex-flow: row wrap;
            gap: 1em;
        }
        .menu-group {
            display: grid;
            gap: 20px;
        }
    `,
];

export const Site = c(site);

customElements.define("my-site", Site);

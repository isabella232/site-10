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

function site() {
    return (
        <host shadowDom>
            <SiteHeader>
                <img src={imgLogo} slot="logo" />
                <SiteLink slot="link">Github</SiteLink>
                <SiteLink slot="link">Documentation</SiteLink>
                <SiteLink slot="link">Support</SiteLink>
                <SiteMenu slot="action">
                    <SiteEye class="eye"></SiteEye>
                    <div class="menu">
                        <div class="menu-group">
                            <SiteText elegant>SOCIALS</SiteText>
                            <div class="menu-items">
                                <SiteLink>TWITTER</SiteLink>
                                <SiteLink>LINKEDIN</SiteLink>
                                <SiteLink>DISCORD</SiteLink>
                                <SiteLink>GITHUB</SiteLink>
                            </div>
                            <SiteText elegant>STARTED</SiteText>
                            <div class="menu-items">
                                <SiteLink>Get started</SiteLink>
                                <SiteLink>Template</SiteLink>
                                <SiteLink>Props</SiteLink>
                                <SiteLink>Hooks</SiteLink>
                            </div>
                            <SiteText elegant>UTILITIES</SiteText>
                            <div class="menu-items">
                                <SiteLink>@atomico/exports</SiteLink>
                                <SiteLink>@atomico/ui</SiteLink>
                                <SiteLink>@atomico/hooks</SiteLink>
                                <SiteLink>More</SiteLink>
                            </div>
                        </div>
                    </div>
                </SiteMenu>
            </SiteHeader>
            <SiteIsotype>
                <SiteGrid gap={3} centered>
                    <img src={imgLogoText} alt="" />
                    <SiteText elegant>WEBCOMPONENTS</SiteText>
                    <SiteText textCenter>
                        Create interfaces with code
                        <br /> simple, fast and light
                    </SiteText>
                </SiteGrid>
            </SiteIsotype>
            <SiteSection>
                <SiteTitle>
                    <h1>Simple, fast and light</h1>
                </SiteTitle>
                <SiteText>
                    ullamco culpa duis excepteur quis amet
                    <strong> ad proident Lorem </strong>
                    esse eu labore excepteur anim deserunt occaecat veniam dolor
                    enim ullamco qui dolor ad reprehenderit irure dolor Lorem
                    sunt magna et pariatur eu irure amet enim sit magna dolor ad
                    et aliquip ut labore culpa ad
                </SiteText>
                <div class="icon-row">
                    <img src={iconFunction} alt="" />
                    <SiteText>
                        Ullamco culpa duis excepteur quis amet ad
                    </SiteText>
                </div>
                <div class="icon-row">
                    <img src={iconShadow} alt="" />
                    <SiteText>
                        Ullamco culpa duis excepteur quis amet ad
                    </SiteText>
                </div>
                <div class="icon-row">
                    <img src={iconWatch} alt="" />
                    <SiteText>
                        Ullamco culpa duis excepteur quis amet ad
                    </SiteText>
                </div>
                <div slot="right" class="steps">
                    <div class="step">
                        <SiteCount color="#FF0099" value={1}>
                            IMPORT
                        </SiteCount>
                        <SiteCard>
                            <img class="step-img" src={imgStep1} alt="" />
                        </SiteCard>
                    </div>
                    <div class="step">
                        <SiteCount color="#FFE600" value={2}>
                            WEBCOMPONENT
                        </SiteCount>
                        <SiteCard>
                            <img class="step-img" src={imgStep2} alt="" />
                        </SiteCard>
                    </div>
                    <div class="step">
                        <SiteCount color="#00FF90" value={3}>
                            STYLES
                        </SiteCount>
                        <SiteCard>
                            <img class="step-img" src={imgStep3} alt="" />
                        </SiteCard>
                    </div>
                    <div class="step">
                        <SiteCount color="#0088FF" value={4}>
                            DECLARATIONS
                        </SiteCount>
                        <SiteCard>
                            <img class="step-img" src={imgStep4} alt="" />
                        </SiteCard>
                    </div>
                </div>
            </SiteSection>
            <SiteSection>
                <SiteTitle>
                    <h1>The Atomico Ecosystem</h1>
                </SiteTitle>
                <SiteText>
                    ullamco culpa duis excepteur quis amet ad proident Lorem
                    esse eu labore excepteur anim deserunt{" "}
                    <strong>occaecat veniam dolor</strong>
                    sunt magna
                </SiteText>
                <img slot="right" src={imgAtom} />
                <SiteGrid slot="content" columns="1, 2 768px, 3 980px">
                    <SiteCard dotColor="#FFE600">
                        <SiteText color="subtitle">
                            <h4>@atomico/exports</h4>
                        </SiteText>
                        <SiteText>
                            <small>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit.
                            </small>
                        </SiteText>
                    </SiteCard>
                    <SiteCard dotColor="#0088FF">
                        <SiteText color="subtitle">
                            <h4>@atomico/router</h4>
                        </SiteText>
                        <SiteText>
                            <small>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit.
                            </small>
                        </SiteText>
                    </SiteCard>
                    <SiteCard dotColor="#00FF90">
                        <SiteText color="subtitle">
                            <h4>@atomico/store</h4>
                        </SiteText>
                        <SiteText>
                            <small>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit.
                            </small>
                        </SiteText>
                    </SiteCard>
                    <SiteCard dotColor="#00FF90">
                        <SiteText color="subtitle">
                            <h4>@atomico/hooks</h4>
                        </SiteText>
                        <SiteText>
                            <small>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit.
                            </small>
                        </SiteText>
                    </SiteCard>
                    <SiteCard dotColor="#00FF90">
                        <SiteText color="subtitle">
                            <h4>@atomico/react</h4>
                        </SiteText>
                        <SiteText>
                            <small>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit.
                            </small>
                        </SiteText>
                    </SiteCard>
                    <SiteCard dotColor="#00FF90">
                        <SiteText color="subtitle">
                            <h4>@atomico/router</h4>
                        </SiteText>
                        <SiteText>
                            <small>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit.
                            </small>
                        </SiteText>
                    </SiteCard>
                    <SiteCard dotColor="#00FF90">
                        <SiteText color="subtitle">
                            <h4>@atomico/components</h4>
                        </SiteText>
                        <SiteText>
                            <small>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit.
                            </small>
                        </SiteText>
                    </SiteCard>
                    <SiteCard dotColor="#00FF90">
                        <SiteText color="subtitle">
                            <h4>@atomico/ui</h4>
                        </SiteText>
                        <SiteText>
                            <small>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit.
                            </small>
                        </SiteText>
                    </SiteCard>
                </SiteGrid>
            </SiteSection>
            <SiteSection>
                <SiteTitle>
                    <h1>Ideas, projects and companies that use Atomico</h1>
                </SiteTitle>
                <SiteText>
                    ullamco culpa duis excepteur quis amet ad proident Lorem
                    esse eu labore excepteur anim deserunt{" "}
                    <strong>occaecat veniam dolor</strong>
                    sunt magna
                </SiteText>
            </SiteSection>
            <SiteSection>
                <SiteTitle>
                    <h1>Join the community</h1>
                </SiteTitle>
                <SiteText>
                    Atomico simplifies learning, workflow, and maintenance when
                    creating webcomponents.
                </SiteText>
                <SiteGrid columns="1, 3 768px">
                    <SiteButton style="--button-border-color: #404EED">
                        <img src={iconDiscord} /> Discord
                    </SiteButton>
                    <SiteButton style="--button-border-color: #1DB0F2">
                        <img src={iconTwitter} /> Twitter
                    </SiteButton>
                    <SiteButton style="--button-border-color: #0063B9">
                        <img src={iconLinkedin} /> Linkedin
                    </SiteButton>
                </SiteGrid>
            </SiteSection>
            <SiteSection>
                <SiteAuthor>
                    <img src={imgAuthor} />
                </SiteAuthor>
                <SiteGrid slot="right" gap={1}>
                    <SiteText elegant>AUTHOR'S MESSAGE</SiteText>
                    <SiteTitle>
                        <h1>Join Atomico JS</h1>
                    </SiteTitle>
                </SiteGrid>
                <SiteText slot="right">
                    Atomico is an open source project developed by{" "}
                    <a href="">UpperCod</a>, we invite you to contribute to the
                    improvement of Atomico in:
                </SiteText>
                <SiteText slot="right">Using and sharing Atomico</SiteText>
                <SiteText slot="right">
                    Improving the documentation and requesting new topics to
                    document
                </SiteText>
                <SiteText slot="right">
                    Improving the source code, sharing bugs and new features
                </SiteText>
                <SiteText slot="right">Small donations</SiteText>
            </SiteSection>
            <SiteSection>
                <SiteGrid centered slot="content">
                    <img src={imgByUppercod} alt="" />
                </SiteGrid>
            </SiteSection>
        </host>
    );
}

site.styles = [
    tokens,
    css`
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
            padding: 150px 0px;
            min-height: 100%;
            box-sizing: border-box;
            display: flex;
            align-items: flex-end;
        }
        .menu-items {
            display: flex;
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

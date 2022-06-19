import { c, css } from "atomico";
import {
    tokens,
    SiteSection,
    SiteSlide,
    SiteText,
    SiteTitle,
    SiteCount,
    SiteCard,
    SiteIsotype,
    SiteHeader,
} from "./components";
import imgStep1 from "./assets/step-1.svg";
import imgStep2 from "./assets/step-2.svg";
import imgStep3 from "./assets/step-3.svg";
import imgStep4 from "./assets/step-4.svg";
import imgAtom from "./assets/atom.svg";
import imgLogo from "./assets/logo.svg";
import iconWatch from "./assets/icon-watch.svg";
import iconShadow from "./assets/icon-shadow.svg";
import iconFunction from "./assets/icon-function.svg";

function site() {
    return (
        <host shadowDom>
            <SiteHeader>
                <img src={imgLogo} slot="logo" />
            </SiteHeader>
            <SiteIsotype></SiteIsotype>
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
                        Ullamco culpa duis excepteur quis amet ad{" "}
                    </SiteText>
                </div>
                <div class="icon-row">
                    <img src={iconShadow} alt="" />
                    <SiteText>
                        Ullamco culpa duis excepteur quis amet ad{" "}
                    </SiteText>
                </div>
                <div class="icon-row">
                    <img src={iconWatch} alt="" />
                    <SiteText>
                        Ullamco culpa duis excepteur quis amet ad{" "}
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
                <div class="cards" slot="content">
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
                </div>
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
        .cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: var(--size-6);
        }
        .icon-row {
            display: grid;
            align-items: center;
            grid-template-columns: auto 1fr;
            gap: var(--size-4);
        }
    `,
];

export const Site = c(site);

customElements.define("my-site", Site);

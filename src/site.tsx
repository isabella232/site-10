import { c, css } from "atomico";
import {
    tokens,
    SiteSection,
    SiteSlide,
    SiteText,
    SiteTitle,
    SiteCount,
    SiteCard,
    SiteAtom,
} from "./components";
import imgStep1 from "./assets/step-1.svg";
import imgStep2 from "./assets/step-2.svg";
import imgStep3 from "./assets/step-3.svg";
import imgStep4 from "./assets/step-4.svg";
import imgAtom from "./assets/atom.svg";

function site() {
    return (
        <host shadowDom>
            <SiteSlide></SiteSlide>
            <SiteSection>
                <SiteTitle>
                    <h1>
                        Atomico today is an ecosystem agnostic of solutions that
                        to improve the distribution and communication of
                        webcomponents
                    </h1>
                </SiteTitle>
                <SiteText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam harum doloribus dignissimos, quaerat veniam quam
                    incidunt delectus omnis enim voluptates consequuntur
                    aspernatur hic eligendi quisquam corrupti voluptate, odit
                    amet! Enim.
                </SiteText>
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
                    <h1>
                        Atomico today is an ecosystem agnostic of solutions that
                        to improve the distribution and communication of
                        webcomponents
                    </h1>
                </SiteTitle>
                <img slot="right" src={imgAtom} />
                <div class="cards" slot="content">
                    <SiteCard dotColor="#FFE600">
                        <SiteText color="subtitle">
                            <strong>@atomico/exports</strong>
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
                            <strong>@atomico/router</strong>
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
                            <strong>@atomico/store</strong>
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
                            <strong>@atomico/hooks</strong>
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
                            <strong>@atomico/react</strong>
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
                            <strong>@atomico/router</strong>
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
                            <strong>@atomico/components</strong>
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
                            <strong>@atomico/ui</strong>
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
    `,
];

export const Site = c(site);

customElements.define("my-site", Site);

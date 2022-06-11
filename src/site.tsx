import { c, css } from "atomico";
import {
    SiteSection,
    SiteSlide,
    SiteText,
    SiteTitle,
    SiteCount,
    SiteCard,
} from "./components";
import imgStep1 from "./assets/step-1.svg";
import imgStep2 from "./assets/step-2.svg";
import imgStep3 from "./assets/step-3.svg";
import imgStep4 from "./assets/step-4.svg";

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
                <div slot="right">
                    <div>
                        <SiteCount color="#FF0099" value={1}>
                            IMPORT
                        </SiteCount>
                        <SiteCard>
                            <img class="img-step" src={imgStep1} alt="" />
                        </SiteCard>
                    </div>
                    <div>
                        <SiteCount color="#FFE600" value={2}>
                            WEBCOMPONENT
                        </SiteCount>
                        <SiteCard>
                            <img class="img-step" src={imgStep2} alt="" />
                        </SiteCard>
                    </div>
                    <div>
                        <SiteCount color="#00FF90" value={3}>
                            STYLES
                        </SiteCount>
                        <SiteCard>
                            <img class="img-step" src={imgStep3} alt="" />
                        </SiteCard>
                    </div>
                    <div>
                        <SiteCount color="#0088FF" value={4}>
                            DECLARATIONS
                        </SiteCount>
                        <SiteCard>
                            <img class="img-step" src={imgStep4} alt="" />
                        </SiteCard>
                    </div>
                </div>
            </SiteSection>
        </host>
    );
}

site.styles = css`
    .img-step {
        width: 100%;
        max-width: 420px;
    }
`;

export const Site = c(site);

customElements.define("my-site", Site);

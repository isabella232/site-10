import { c } from "atomico";
import {
    SiteSection,
    SiteGraphDiff,
    SiteTitle,
    SiteText,
    SiteCount,
    SiteGrid,
    SiteBigTitle,
    SiteCard,
} from "./components";
import imgReact from "./assets/react-counter.svg";
import imgAtomico from "./assets/atomico-counter.svg";
import { CompareContent } from "@atomico/compare-content";

function why() {
    return (
        <host shadowDom>
            <SiteSection>
                <SiteGrid slot="content" align="top">
                    <SiteBigTitle>UNO</SiteBigTitle>
                    <SiteTitle>
                        <h1>Tamaño ligero</h1>
                    </SiteTitle>
                    <SiteGrid columns="1, 2 520px" align="top">
                        <SiteGrid>
                            <SiteText>
                                Atomico posee un tamaño como modulo de 4kB pero
                                al empaquetar su tamaño es inferior a 3kB
                                (GZIP).
                            </SiteText>
                            {/* <br />
                            <br />
                            <SiteTitle full-width size={5}>
                                <h1>¿Por que sucede?</h1>
                            </SiteTitle>
                            <br />
                            Atomico posee un nivel bajo acoplamiento a nivel
                            interno y esto permite que herramientas que apliquen
                            Tree-shaking(esbuild, rollup, vite o webpack)
                            eliminen todo el código no usado, reduciendo el
                            tamaño de Atomico de forma considerable. El impacto
                            de esto se manifiesta al comparar Atomico con otras
                            librerías. */}
                            <SiteText>
                                Realizamores una comparación usando como base
                                los webcomponente counter existente en
                                <a
                                    href="https://webcomponents.dev"
                                    target="_blank"
                                >
                                    {" "}
                                    webcomponents.dev{" "}
                                </a>
                                de <strong>Atomico</strong>,{" "}
                                <strong>Lit</strong>, <strong>Preact</strong> y{" "}
                                <strong>React</strong>.
                            </SiteText>
                        </SiteGrid>
                        <SiteGrid gap={4}>
                            <SiteText>
                                componente creado con Atomico a su vez podrá:
                            </SiteText>
                            <SiteCount value={1}>
                                <SiteText>
                                    Tamaño del JS (Libreria + Componente)
                                    enviados al navegador
                                </SiteText>
                            </SiteCount>
                            <SiteCount value={1}>
                                <SiteText>
                                    Tiempo de renderización del componente en el
                                    browser.
                                </SiteText>
                            </SiteCount>
                            <SiteCount value={1}>
                                <SiteText>
                                    Lineas de codigo escritas para resolver el
                                    webcomponente.
                                </SiteText>
                            </SiteCount>
                        </SiteGrid>
                    </SiteGrid>
                    <SiteGrid>
                        <SiteGraphDiff
                            data={[
                                {
                                    label: "Atomico",
                                    items: [
                                        {
                                            label: "10.9kB",
                                            value: 10.9,
                                        },

                                        {
                                            label: "8.18ms",
                                            value: 8.18,
                                        },
                                        {
                                            label: "39 lines",
                                            value: 39,
                                        },
                                    ],
                                },
                                {
                                    label: "Lit",
                                    items: [
                                        {
                                            label: "19.8kB",
                                            value: 19.8,
                                        },

                                        {
                                            label: "7.86ms",
                                            value: 7.86,
                                        },
                                        {
                                            label: "56 lines",
                                            value: 56,
                                        },
                                    ],
                                },
                                {
                                    label: "Preact",
                                    items: [
                                        {
                                            label: "22kB",
                                            value: 22,
                                        },

                                        {
                                            label: "9ms",
                                            value: 9,
                                        },
                                        {
                                            label: "36 lines",
                                            value: 36,
                                        },
                                    ],
                                },
                                {
                                    label: "React",
                                    hide: false,
                                    items: [
                                        {
                                            label: "101.9kB",
                                            value: 101.9,
                                        },
                                        {
                                            label: "70.9ms",
                                            value: 70.9,
                                        },
                                        {
                                            label: "40 lines",
                                            value: 40,
                                        },
                                    ],
                                },
                            ]}
                        ></SiteGraphDiff>
                    </SiteGrid>
                </SiteGrid>
            </SiteSection>
            <SiteSection>
                <SiteGrid slot="content" align="top">
                    <SiteBigTitle>DOS</SiteBigTitle>
                    <SiteTitle>
                        <h1>Curba de aprendisaje</h1>
                    </SiteTitle>
                    <SiteGrid columns="1, 2 520px" align="top">
                        <SiteGrid>
                            <SiteText>
                                Hoy el mercado es laboral esta dominado por
                                React y esto ha provocado que por defecto el
                                camino frontend este marcado por una ruta hacia
                                React. Atomico posee sintaxis inspirada en React
                                Hooks reduciendo la fricción ante su adopcion.
                                <br />
                                <br />
                                <SiteText>
                                    <strong>
                                        Si ya sabes React ya sabes Atomico al
                                        90%
                                    </strong>
                                    , las empresas que usan Atomico JS buscan
                                    desarrolladores con conocimiento en React
                                    para el uso de Atomico JS.
                                </SiteText>
                            </SiteText>
                        </SiteGrid>
                        <SiteCard>
                            <CompareContent style={`padding: var(--size-4)`}>
                                <img
                                    slot="content"
                                    src={imgReact}
                                    alt="React counter"
                                />
                                <img
                                    slot="content"
                                    src={imgAtomico}
                                    alt="Atomico counter"
                                />
                            </CompareContent>
                        </SiteCard>
                    </SiteGrid>
                </SiteGrid>
            </SiteSection>
            <SiteSection>
                <SiteGrid slot="content" align="top">
                    <SiteBigTitle>TRES</SiteBigTitle>
                    <SiteTitle>
                        <h1>Integracion</h1>
                    </SiteTitle>
                    <SiteGrid columns="1, 2 520px" align="top">
                        <SiteGrid>
                            <SiteText>
                                Atomico no lucha contra React se Integra ya que
                                asi busca facilitar la adopción de los
                                webcomponents, Con @atomico/react podrás usar
                                webcomponents creados con Atomico en
                                React/Preact con homologación de tipos y
                                sintaxis.
                            </SiteText>
                        </SiteGrid>
                        <SiteGrid gap={4}>
                            <SiteText>
                                La gran ventaja de esta integracion es que
                                componente creado con Atomico podra ser usado en
                                en html, vue, preact, react, svelte, solid u
                                otra libreria.
                            </SiteText>
                        </SiteGrid>
                    </SiteGrid>
                </SiteGrid>
            </SiteSection>
        </host>
    );
}

customElements.define("my-site", c(why));

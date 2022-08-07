import { c } from "atomico";
import {
    SiteSection,
    SiteGraphDiff,
    SiteTitle,
    SiteText,
    SiteCount,
    SiteGrid,
    SiteBigTitle,
} from "./components";

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
                        <SiteGraphDiff></SiteGraphDiff>
                    </SiteGrid>
                </SiteGrid>
            </SiteSection>
            <SiteSection>
                <SiteBigTitle>DOS</SiteBigTitle>
                <SiteGrid slot="content" align="top">
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
                                Las ventajas de Atomico en su curba de
                                aprendisaje son:
                            </SiteText>
                        </SiteGrid>
                        <SiteGrid gap={4}>
                            <SiteCount value={1}>
                                <SiteText>
                                    <strong>
                                        Si ya sabes React ya sabes Atomico al
                                        90%
                                    </strong>
                                    , las empresas que usan Atomico JS buscan
                                    desarrolladores con conocimiento en React
                                    para el uso de Atomico JS.
                                </SiteText>
                            </SiteCount>
                            <SiteCount value={1}>
                                <SiteText>
                                    Atomico cuenta con soporte a Typescript,
                                    permitiendo autocompletado por defecto al
                                    usar JSX o Typescript.
                                </SiteText>
                            </SiteCount>
                        </SiteGrid>
                    </SiteGrid>
                </SiteGrid>
            </SiteSection>
            <SiteSection>
                <SiteBigTitle>TRES</SiteBigTitle>
                <SiteGrid slot="content" align="top">
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

import { Props, c, css, useProp } from "atomico";
import { tokens } from "../components";
import { SiteButton } from "../site-button/site-button";

const staticNode = () => (
    <tr class="tr-subgroup" staticNode>
        <td class="td-label "></td>
        <td class="td-lines td-line">
            <div class="td-space"></div>
        </td>
    </tr>
);

const staticIcon = () => (
    <svg width="12" height="8" viewBox="0 0 12 8" staticNode>
        <path
            d="M-4073-2538a6.675,6.675,0,0,1-4.243-2,12.826,12.826,0,0,1-1.757-2l0-.007a12.877,12.877,0,0,1,1.754-1.994,6.674,6.674,0,0,1,4.242-2,6.677,6.677,0,0,1,4.243,2,12.842,12.842,0,0,1,1.758,2l0,.007a12.877,12.877,0,0,1-1.754,1.994A6.677,6.677,0,0,1-4073-2538Zm0-6.173a2,2,0,0,0-2,2,2,2,0,0,0,2,2,2,2,0,0,0,2-2A2,2,0,0,0-4073-2544.173Z"
            transform="translate(4079 2546)"
            fill="#fff"
        />
    </svg>
);

interface Data {
    label: string;
    hide?: boolean;
    items: {
        label: string;
        value: number;
    }[];
}

function graphDiff({ minimumTolerance, colorRange }: Props<typeof graphDiff>) {
    const [data, setData] = useProp<Data[]>("data");

    const totals = data.reduce<number[][]>(
        (totals, { items, hide }) =>
            hide
                ? totals
                : items.map(({ value }, i) => [
                      Math.min(totals[i]?.[0] || value, value),
                      Math.max(totals[i]?.[1] || value, value),
                  ]),
        []
    );

    console.log(totals);

    return (
        <host shadowDom>
            <table class="table">
                {data.map(({ label, items, hide }, i) => (
                    <tr class="tr-group">
                        <td class="td-label td-title">
                            <div>{label}</div>
                            <SiteButton
                                small
                                onclick={() => {
                                    setData(
                                        data.map((data, ci) =>
                                            ci === i
                                                ? {
                                                      ...data,
                                                      hide: !hide,
                                                  }
                                                : data
                                        )
                                    );
                                }}
                            >
                                {staticIcon()}
                                <span>Hide</span>
                            </SiteButton>
                        </td>
                        <td class="td-lines td-lines-group">
                            <table class="table">
                                {staticNode()}
                                {items.map(({ label, value }, i) => {
                                    const [min, max] = totals[i] || [0, 0];
                                    const percent = hide ? 0 : value / max;
                                    const minTolerance = min * minimumTolerance;

                                    const [color] = colorRange.find(
                                        ([, range]) =>
                                            minTolerance >= value ||
                                            range >= percent
                                    ) || ["transparent", 0];
                                    return (
                                        <tr class="tr-subgroup">
                                            <td class="td-label ">{label}</td>
                                            <td
                                                class="td-lines td-line"
                                                style={`--line-width:${
                                                    percent * 100
                                                }%; --line-color:${color}`}
                                            >
                                                <div class="line"></div>
                                            </td>
                                        </tr>
                                    );
                                })}
                                {staticNode()}
                            </table>
                        </td>
                    </tr>
                ))}
            </table>
        </host>
    );
}

graphDiff.props = {
    minimumTolerance: {
        type: Number,
        value: 1.2,
    },
    colorRange: {
        type: Array,
        value: (): [string, number][] => [
            ["linear-gradient(90deg, #00ff91,#00FF90 50%)", 0.25],
            ["linear-gradient(90deg,#FFD500,#FFD500 50%)", 0.5],
            ["linear-gradient(90deg,#FF6000,#FF6000)", 0.75],
            ["linear-gradient(90deg,#FF0000,#FF0000)", 1],
        ],
    },
    data: {
        type: Array,
        value: (): Data[] => [
            {
                label: "Atomico",
                items: [
                    {
                        label: "2.5kB",
                        value: 2.5,
                    },

                    {
                        label: "6ms",
                        value: 6,
                    },
                    {
                        label: "24 lines",
                        value: 24,
                    },
                ],
            },
            {
                label: "Lit",
                items: [
                    {
                        label: "10.5kB",
                        value: 10.5,
                    },

                    {
                        label: "6ms",
                        value: 10,
                    },
                    {
                        label: "24 lines",
                        value: 48,
                    },
                ],
            },
            {
                label: "Preact",
                items: [
                    {
                        label: "2.5kB",
                        value: 7.5,
                    },

                    {
                        label: "6ms",
                        value: 10,
                    },
                    {
                        label: "24 lines",
                        value: 28,
                    },
                ],
            },
            {
                label: "React",
                hide: false,
                items: [
                    {
                        label: "2.5kB",
                        value: 65.5,
                    },

                    {
                        label: "6ms",
                        value: 54,
                    },
                    {
                        label: "24 lines",
                        value: 24,
                    },
                ],
            },
        ],
    },
};

graphDiff.styles = [
    tokens,
    css`
        :host {
            width: 100%;
            color: var(--color-text);
            --border: 1px solid rgba(255, 255, 255, 0.35);
        }
        .table {
            width: 100%;
            border-spacing: 0;
        }
        .td-label {
            font-size: var(--size-3);
            white-space: nowrap;
            padding-right: var(--size-5);
        }
        .td-title {
            font-size: var(--size-5);
            color: var(--color-title);
            padding: var(--size-2) var(--size-5) var(--size-2) 0px;
            vertical-align: top;
        }
        .td-lines {
            width: 100%;
        }
        .tr-group:not(:last-child) > .td-lines {
            border-bottom: var(--border);
        }

        .td-line {
            border-left: var(--border);
            padding-top: var(--padding-top);
            padding-bottom: var(--padding-bottom);
        }
        .td-space {
            height: 10px;
        }
        .line {
            width: var(--line-width);
            height: var(--size-2);
            background: var(--line-color);
            border-radius: 0px 10px 10px 0px;
            transition: 1s ease all;
        }
        .tr-subgroup {
            transition: 0.5s ease all;
        }
        .table-focus .tr-subgroup:not(.tr-subgroup-focus) {
            opacity: 0.25;
        }
    `,
];

export const SiteGraphDiff = c(graphDiff);

customElements.define("site-graph-diff", SiteGraphDiff);

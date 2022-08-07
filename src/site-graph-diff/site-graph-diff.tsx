import { Props, c, css } from "atomico";
import { tokens } from "../components";

const getColumns = (
    data: { value: number; unit?: number }[],
    totals: number[]
) => {
    let totalPercent = 0;
    let totalPixel = 0;
    const columns = data.map(({ value, unit }, i) => {
        const max = totals[i];
        unit ? value * unit + "px" : (value / max) * 100 + "%";
        let percent = value / max;
        totalPercent += 1 - percent;
        return percent.toFixed(2) + "fr";
    });
    if (totalPercent) {
        columns.push(totalPercent.toFixed(2) + "fr");
    }
    if (totalPixel) {
        columns.push(totalPixel + "px");
    }
    return columns.join(" ");
};

function graphDiff(props: Props<typeof graphDiff>) {
    const data = props.data.filter(({ hide }) => !hide);

    const totals = data.reduce<number[][]>(
        (items, { data, hide }) =>
            data.map(({ value }, i) => [
                Math.min(items[i]?.[0] || value, value),
                Math.max(items[i]?.[1] || value, value),
            ]),
        []
    );

    return (
        <host shadowDom>
            <table class="table">
                {data.map(({ label, data }) => {
                    return (
                        <tr>
                            <td class="td-label">
                                <div class="item-label">{label}</div>
                            </td>
                            <td class="td-lines">
                                <div class="item-label-data">
                                    {data.map(({ label }) => (
                                        <span>{label}</span>
                                    ))}
                                </div>
                                <div
                                    class="item-lines"
                                    style={`--columns:${getColumns(
                                        data,
                                        totals.map(([, max]) => max)
                                    )}`}
                                >
                                    {data.map(({ value }, i) => {
                                        const [min, max] = totals[i];
                                        const percent = value / max;
                                        const [color] = props.colorRange.find(
                                            ([, range]) =>
                                                min * props.minimumTolerance >=
                                                    value || range >= percent
                                        );
                                        return (
                                            <div
                                                class="item-line"
                                                data-percent={percent}
                                                style={`--color:${color}`}
                                            ></div>
                                        );
                                    })}
                                </div>
                            </td>
                        </tr>
                    );
                })}
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
            ["#00FF90", 0.25],
            ["#FFD500", 0.5],
            ["#FF6000", 0.75],
            ["#FF0000", 1],
        ],
    },
    data: {
        type: Array,
        value: () => [
            {
                label: "Atomico",
                data: [
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
                data: [
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
                data: [
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
                data: [
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
        }
        .table {
            width: 100%;
        }
        .td-label {
            padding: var(--size-2) var(--size-5) var(--size-2) 0px;
            font-size: var(--size-5);
            color: var(--color-title);
        }
        .td-lines {
            width: 100%;
        }
        .item-lines {
            width: 100%;
            gap: 4px;
            display: grid;
            grid-area: b2;
            grid-template-columns: var(--columns);
        }
        .item-line {
            display: flex;
            height: 5px;
            border-radius: 100vh;
            background: var(--color);
        }
        .item-label-data {
            padding-bottom: 10px;
            font-size: var(--size-4);
            display: flex;
            gap: 10px;
            font-weight: var(--font-weight-title);
            padding-top: var(--size-5);
        }
    `,
];

export const SiteGraphDiff = c(graphDiff);

customElements.define("site-graph-diff", SiteGraphDiff);

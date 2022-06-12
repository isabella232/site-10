import { useHost, DOMEvent, useRef } from "atomico";
import { useListener } from "@atomico/hooks/use-listener";
import { useDebounceState } from "@atomico/hooks/use-debounce-state";

export function useMouseMove() {
    const host = useHost();
    const refWindow = useRef(globalThis);
    const [state, setState] = useDebounceState<{ x: number; y: number }>(
        10,
        {
            x: 0,
            y: 0,
        },
        "fps"
    );

    useListener(
        refWindow,
        "deviceorientation",
        ({
            beta,
            alpha,
            gamma,
        }: DOMEvent<HTMLElement, DeviceOrientationEvent>) => {
            if (!refWindow.start) {
                refWindow.start = { beta, gamma };
            }

            const diffBeta = beta - refWindow.start.beta;
            const diffGamma = gamma - refWindow.start.gamma;

            setState({
                y: diffBeta / 15,
                x: diffGamma / 15,
            });
        },
        { passive: true }
    );

    useListener(
        host,
        "mousemove",
        ({
            currentTarget,
            pageX,
            pageY,
        }: DOMEvent<HTMLElement, MouseEvent>) => {
            const { clientWidth, clientHeight } = currentTarget;
            const centerX = clientWidth / 2;
            const centerY = clientHeight / 2;
            const x =
                pageX > centerX
                    ? (pageX - centerX) / centerX
                    : (1 - pageX / centerX) * -1;

            const y =
                pageY > centerY
                    ? (pageY - centerY) / centerY
                    : (1 - pageY / centerY) * -1;

            setState({ x, y });
        },
        { passive: true }
    );

    return state;
}

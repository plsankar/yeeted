import { YeetedOptions } from "./types";

const yeeted = (options?: YeetedOptions) => {
    if (!isEmbeded()) return;
    const delay = options?.delay || 0;
    setTimeout(() => {
        if (window.top) {
            window.top.location.href = window.location.href;
        }
    }, delay);
};

export function isEmbeded() {
    return window.top !== window;
}

export default yeeted;

import { Plugin } from "vite";

export type Options = {
    /** Indicates whether the plugin should open the HMR address. (default: false) */
    open: boolean;

    /** The timeout duration (in milliseconds) before the HMR address is opened. (default: 2000) */
    openTimeout: number;
};

export default function plugin(options?: Partial<Options>): Plugin | undefined;

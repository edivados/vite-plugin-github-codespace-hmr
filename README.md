# Vite Plugin GitHub Codespace HMR

Vite plugin to set the correct HMR client hostname in GitHub Codespaces when the HMR client port differs from the server port.

> [!NOTE]  
> While this plugin sets the correct client hostname in Vite's client script, you may need to open the address of the forwaded HMR port in your browser once for it to work. When the server and HMR address are the same, this step is unnecessary because you are likely opening the address to view your app.

Reference: https://github.com/vitejs/vite/issues/8666#issuecomment-1315694497

## Installation

```
npm install @edivados/vite-plugin-github-codespace-hmr
```

## Usage

```js
import { defineConfig } from "vite";
import codespaceHMR from "@edivados/vite-plugin-github-codespace-hmr";

export default defineConfig({
   server: {
    hmr: {
      port: 4040
    }
  },
  plugins: [codespaceHMR()]
});
```

## Options

### options

- Type: Object
- Default: {}

#### options.open

- Type: boolean
- Default: false

Indicates whether the plugin should open the HMR address.

#### options.openTimeout

- Type: number
- Default: 2000

The timeout duration (in milliseconds) before the HMR address is opened.
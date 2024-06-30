export default function plugin(options) {
  if (process.env["CODESPACES"]) {
    let hostname;
    return {
      name: "vite-plugin-github-codespace-hmr",
      apply: "serve",
      enforce: "post",
      config() {
        return {
          server: {
            hmr: {
              clientPort: 443
            }
          }
        }
      },
      configureServer(server) {
        const _listen = server.ws.listen;
        server.ws.listen = () => {
          const port = server.config.server?.hmr?.port || server.config.server.port;
          const codespaceName = process.env["CODESPACE_NAME"];
          const forwardingDomain = process.env["GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN"];
          hostname = `${codespaceName}-${port}.${forwardingDomain}`;
          if (options?.open) {
            import("open").then(({ default: open }) => {
              setTimeout(() => open(`https://${hostname}`), options?.openTimeout || 2000);
            });
          }
          return _listen(...arguments);
        }
      },
      transform(code, id) {
        if (
          id.endsWith("/vite/dist/client/client.mjs") ||
          id.endsWith("/vite/dist/client/env.mjs")
        ) {
          return code.replace("__HMR_HOSTNAME__", JSON.stringify(hostname));
        }
      },
    };
  }
}
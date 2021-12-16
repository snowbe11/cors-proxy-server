import ProxyServer from "./cors-proxy";

const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || "3001";

const server = new ProxyServer();
server.start(host, parseInt(port));

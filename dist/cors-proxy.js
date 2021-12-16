"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyServer = void 0;
class ProxyServer {
    constructor() {
        this.start = (host, port) => {
            if (this.proxy) {
                this.proxy.listen(port, host, function () {
                    console.log("Running CORS Anywhere on " + host + ":" + port);
                });
            }
            else {
                console.log("cors_proxy server instance is null");
            }
        };
        this.parseEnvList = (env) => {
            if (!env) {
                return [];
            }
            return env.split(",");
        };
        this.originBlacklist = this.parseEnvList("");
        this.originWhitelist = this.parseEnvList("");
        const cors_proxy = require("./lib/cors-anywhere");
        this.proxy = cors_proxy.createServer({
            originBlacklist: this.originBlacklist,
            originWhitelist: this.originWhitelist,
            requireHeader: ["origin", "x-requested-with"],
            checkRateLimit: {},
            removeHeaders: [
                "cookie",
                "cookie2",
                "x-request-start",
                "x-request-id",
                "via",
                "connect-time",
                "total-route-time",
            ],
            redirectSameOrigin: true,
            httpProxyOptions: {
                xfwd: false,
            },
        });
    }
}
exports.ProxyServer = ProxyServer;
exports.default = ProxyServer;
//# sourceMappingURL=cors-proxy.js.map
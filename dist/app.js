"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_proxy_1 = __importDefault(require("./cors-proxy"));
const host = process.env.HOST ? process.env.HOST : "localhost";
const port = process.env.PORT ? parseInt(process.env.PORT) : 3001;
const server = new cors_proxy_1.default();
server.start(host, port);
//# sourceMappingURL=app.js.map
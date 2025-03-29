"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOKEN_MINT_ADDRESS = exports.PUBLIC_KEY = exports.PRIVATE_KEY = void 0;
const web3_js_1 = require("@solana/web3.js");
exports.PRIVATE_KEY = process.env.PRIVATE_KEY;
exports.PUBLIC_KEY = process.env.PUBLIC_KEY;
exports.TOKEN_MINT_ADDRESS = new web3_js_1.PublicKey("AF83M1cCgKsoEuv8jg7GgQEJrgcMcV9V3aLhnEtbQN6L");

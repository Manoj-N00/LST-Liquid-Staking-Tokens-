"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const mintTokens_1 = require("./mintTokens");
const app = (0, express_1.default)();
const HELIUS_RESPONSE = {
    "nativeTranafers": [{
            "amount": 100000000,
            "fromUserAccount": "5b8b9f8e6a9a3f1e",
            "toUserAccount": "5b8b9f8e6a9a3f1e",
        }]
};
const VAULT = "AF83M1cCgKsoEuv8jg7GgQEJrgcMcV9V3aLhnEtbQN6L";
app.post('/helius', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const incomingTx = HELIUS_RESPONSE.nativeTranafers.find(x => x.toUserAccount === VAULT);
    if (!incomingTx) {
        res.json({
            message: "Processed"
        });
        return;
    }
    const fromAddress = incomingTx.fromUserAccount;
    const toAddress = VAULT;
    const amount = incomingTx.amount;
    yield (0, mintTokens_1.mintTokens)(fromAddress, amount);
    // if (type === "received_native_sol") {
    //     await mintTokens(fromAddress, toAddress, amount);
    // } else {
    //     // What could go wrong here?
    //     await burnTokens(fromAddress, toAddress, amount);
    //     await sendNativeTokens(fromAddress, toAddress, amount);
    // }
    res.send('Transaction successful');
}));
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

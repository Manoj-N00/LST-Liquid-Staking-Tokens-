require('dotenv').config();
import express from 'express';
import { burnTokens, mintTokens, sendNativeTokens } from './mintTokens';

const app = express();
const HELIUS_RESPONSE= {
    "nativeTranafers":[{
    "amount":100000000,
    "fromUserAccount":"",
    "toUserAccount":"",

}]}

const VAULT="AF83M1cCgKsoEuv8jg7GgQEJrgcMcV9V3aLhnEtbQN6L"
app.post('/helius', async(req, res) => {
    const incomingTx= HELIUS_RESPONSE.nativeTranafers.find(x=>x.toUserAccount===VAULT)
    if(!incomingTx){
        res.json({
            message:"Processed"
        })
        return   
    }
    const fromAddress = incomingTx.fromUserAccount;
    const toAddress = VAULT ;
    const amount = incomingTx.amount;
    await mintTokens(fromAddress,amount)
    

    // if (type === "received_native_sol") {
    //     await mintTokens(fromAddress, toAddress, amount);
    // } else {
    //     // What could go wrong here?
    //     await burnTokens(fromAddress, toAddress, amount);
    //     await sendNativeTokens(fromAddress, toAddress, amount);
    // }

    res.send('Transaction successful');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
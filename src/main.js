const fetch = require('isomorphic-fetch');

async function getTxInfo(){
let lcdUrl = "https://lcd.orai.io/"
let txHash = "21DA17E3DF5AC16CA1E2A87C27723C1281E16C63A13759EA6ECE1995BD779730"
const result = await fetch(`${lcdUrl}/cosmos/tx/v1beta1/txs/${txHash}`).then(data => data.json());
console.log(result)
}
getTxInfo()

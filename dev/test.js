const Blockchain= require('./blockchain');

const bitcoin= new Blockchain();

const bc1={
"chain": [
{
"index": 1,
"timestamp": 1643461364127,
"transactions": [],
"nonce": 100,
"hash": "0",
"previousBlockHash": "0"
},
{
"index": 2,
"timestamp": 1643462941748,
"transactions": [],
"nonce": 18140,
"hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
"previousBlockHash": "0"
},
{
"index": 3,
"timestamp": 1643462990755,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "9b3e7ad44a404f52b35af695ccf7102d",
"transactionId": "3c85808cbfd14011b6ee8ec78ed5e960"
},
{
"amount": 1000,
"sender": "dsjkfjsldkşsdli",
"recipient": "dsfhjlsjkfsds",
"transactionId": "0c3bc653813a4f44bb071fb25823cf73"
},
{
"amount": 10,
"sender": "dsjkjsldkşsdli",
"recipient": "dsfhjlsjkfsds",
"transactionId": "f57a6efd36c84919b942b99d9ef8c015"
},
{
"amount": 30,
"sender": "dsjkjsldkşsdli",
"recipient": "dsfhjlsjkfsds",
"transactionId": "e824235bfeef4b0a9257167c484aa376"
}
],
"nonce": 25914,
"hash": "000015ea70eef9bfc11d87f6182ac91877767f66f512616dd1c68b5439f5f768",
"previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
},
{
"index": 4,
"timestamp": 1643463015055,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "9b3e7ad44a404f52b35af695ccf7102d",
"transactionId": "1eba10d81c5045b6afa43e5ffe7b15b5"
},
{
"amount": 40,
"sender": "dsjkjsldkşsdli",
"recipient": "dsfhjlsjkfsds",
"transactionId": "d8ef80d1f3a44c30ad12b34ca1b6279c"
},
{
"amount": 80,
"sender": "dsjkjsldkşsdli",
"recipient": "dsfhjlsjkfsds",
"transactionId": "edf3bebac52a4b6ab6142abd32cdd6a8"
},
{
"amount": 70,
"sender": "dsjkjsldkşsdli",
"recipient": "dsfhjlsjkfsds",
"transactionId": "fdf5129cd84848efa61dc3f55fd5999c"
}
],
"nonce": 133630,
"hash": "0000070e2980fe1d2b8dacbc38d44bbe9ab5b3604cd4af7c208943514a0c0669",
"previousBlockHash": "000015ea70eef9bfc11d87f6182ac91877767f66f512616dd1c68b5439f5f768"
},
{
"index": 5,
"timestamp": 1643463024577,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "9b3e7ad44a404f52b35af695ccf7102d",
"transactionId": "5251031dbf66404e84251d473a9b8d43"
}
],
"nonce": 10414,
"hash": "0000c27702878ad650121157accbf6d8c66f52f6c03ae4e6fa5528f276ad9d99",
"previousBlockHash": "0000070e2980fe1d2b8dacbc38d44bbe9ab5b3604cd4af7c208943514a0c0669"
},
{
"index": 6,
"timestamp": 1643463026336,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "9b3e7ad44a404f52b35af695ccf7102d",
"transactionId": "dfd42a3c035840ec9fab6c79d8bbab76"
}
],
"nonce": 123333,
"hash": "0000aeb1856c5fdadbc8b81a93da19c80690b968bf336e9788f81abb1aa298a6",
"previousBlockHash": "0000c27702878ad650121157accbf6d8c66f52f6c03ae4e6fa5528f276ad9d99"
}
],
"pendingTransactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "9b3e7ad44a404f52b35af695ccf7102d",
"transactionId": "effd1f31791e484db203e291c4e38519"
}
],
"currentNodeUrl": "http://localhost:3001",
"networkNodes": []
};

console.log('Valid:',bitcoin.chainIsValid(bc1.chain));




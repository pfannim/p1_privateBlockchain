/**
 * Require the Blockchain class. This allow us to have only one instance of the class.
 */
const BlockChain = require("./src/blockchain.js");
const BlockClass = require("./src/block.js");

let blockchain = new BlockChain.Blockchain();
blockchain.initializeChain();
let block = new BlockClass.Block({
  data: "This is the second block of the chain!",
});
blockchain
  ._addBlock(block)
  .then((block) => {
    // block.time = String(+block.time + 1);
    block.previousBlockHash = block.previousBlockHash.slice(0, -1);
    blockchain.validateChain().then((log) => console.log(log));
    // console.log(block.hash);
    // console.log(block.validate());
    // console.log(block.hash);
    // console.log(block.getBData());
    // let hash = block.hash;
    // console.log(hash);
    // blockchain.getBlockByHash(hash).then((sameBlock) => console.log(sameBlock));
  })
  .catch((err) => console.log(err.message));

console.log(blockchain.chain);

let star = {
  dec: "28",
  ra: "2828",
  story: "this is the star",
};
// let message = blockchain.requestMessageOwnershipVerification(
//   "2NECYtTRK26syUA7gKcfBtjgB9D3D1HwSb6"
// );

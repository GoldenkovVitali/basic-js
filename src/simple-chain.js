const chainMaker = {
  newchainMaker: [],

  getLength() {
  return this.newchainMaker.length;
  },

  addLink(value) {
    if (value==null) {
    this.newchainMaker.push("null");
    }
    else {
    this.newchainMaker.push(value.toString());
    }
    return this;
  },

  removeLink(position) {
  
  if (typeof position !== "number" || position !== (position | 0) || this.newchainMaker[position - 1] === undefined) {
  this.newchainMaker = [];
  throw new Error;
  }
  this.newchainMaker.splice(position - 1, 1);
  return this;
  },
    
  reverseChain() {
  this.newchainMaker.reverse();
  return this;
  },

  finishChain() {
    let newchainMaker = this.newchainMaker.map(x => '( ' + x + ' )').join('~~');
    this.newchainMaker = [];
    return newchainMaker;
  }
};
module.exports = chainMaker;

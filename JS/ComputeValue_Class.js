// computeAmount.lacs(15).crore(5).crore(2).lacs(20).thousan(45).crore(7).value()
// // Output-> 143545000

class AmountCalculator {
  constructor() {
    this.val = 0;
  }

  lacs = (no) => {
    this.val += no * 100000;
    return this;
  };

  crore = (no) => {
    this.val += no * 10000000;
    return this;
  };

  thousand = (no) => {
    this.val += no * 1000;
    return this;
  };

  value = () => {
    return this.val;
  };
}

const computeAmount = new AmountCalculator();

console.log(
  "answer____s",
  computeAmount
    .lacs(15)
    .crore(5)
    .crore(2)
    .lacs(20)
    .thousand(45)
    .crore(7)
    .value()
);

// computeAmount.lacs(15).crore(5).crore(2).lacs(20).thousan(45).crore(7).value()
// // Output-> 143545000

function AmountCalculator() {
  this.val = 0;

  this.lacs = (no) => {
    this.val += no * 100000;
    return this;
  };

  this.crore = (no) => {
    this.val += no * 10000000;
    return this;
  };

  this.thousand = (no) => {
    this.val += no * 1000;
    return this;
  };

  this.value = () => {
    return this.val;
  };

  return this;
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

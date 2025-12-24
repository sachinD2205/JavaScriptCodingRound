// computeAmount.lacs(15).crore(5).crore(2).lacs(20).thousan(45).crore(7).value()
// // Output-> 143545000

function AmountCalculator() {
  let val = 0;

  return {
    lacs: (no) => {
      val += no * 100000;
      return this;
    },

    crore: (no) => {
      val += no * 10000000;
      return this;
    },

    thousand: (no) => {
      val += no * 1000;
      return this;
    },

    value: () => {
      return val;
    },
  };
}

const computeAmount = AmountCalculator();

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

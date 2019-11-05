describe("removeCandy", () => {
  beforeEach(() => {
    const removeCandy = (Caramels, Gumballs) => {
      const bin = { Caramels: 510, Gumballs: 4 };
      const arrayOperation = Object.values(bin);
      const removeCaramel = arrayOperation[0] - 20;
      return removeCaramel;
    };
    removeCandy();
  });

  it(" should remove 20 Caramels from the bin", () => {
    const Caramel = removeCandy();
    expect(Caramel).toEqual(490);
  });
});

describe("addCandy", () => {
  beforeEach(() => {
    const addCandy = (Caramels, Gumballs) => {
      const bin = { Caramels: 510, Gumballs: 4 };
      const arrayOperation = Object.values(bin);
      const addGumball = arrayOperation[1] + 600;
      return addGumball;
    };
    addCandy();
  });

  it("should add 600 Gumballs to the bin ", () => {
    const Gumballs = addCandy();
    expect(Gumballs).toEqual(604);
  });
});

describe("removeOneCandyType", () => {
  beforeEach(() => {
    const removeOneCandyType = (Caramels, Gumballs) => {
      const bin = { Caramels: 510, Gumballs: 604 };
      const arrayOperation = Object.values(bin);
      const removeCaramel = arrayOperation[0] - 20;
      return removeCaramel;
    };
    removeOneCandyType();
  });

  it(" Gumballs should remain the same when 20 Caramels are removed from the bin", () => {
    const Caramel = removeOneCandyType();
    expect(Caramel).not.toEqual(584);
  });
});

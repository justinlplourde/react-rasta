import renderDirection from "./renderDirection";

describe("renderDirection", () => {
  it("should render direction appropriate (input: 'column')", () => {
    // arrange
    const input = "column";

    // act
    const output = renderDirection(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe(
      "flex-direction:column!important;"
    );
  });

  it("should render direction appropriate (input: 'column-reverse')", () => {
    // arrange
    const input = "column-reverse";

    // act
    const output = renderDirection(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe(
      "flex-direction:column-reverse!important;"
    );
  });

  it("should render direction appropriate (input: 'row')", () => {
    // arrange
    const input = "row";

    // act
    const output = renderDirection(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe(
      "flex-direction:row!important;"
    );
  });

  it("should render direction appropriate (input: 'row-reverse')", () => {
    // arrange
    const input = "row-reverse";

    // act
    const output = renderDirection(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe(
      "flex-direction:row-reverse!important;"
    );
  });

  it("should render direction appropriate (input: undefined)", () => {
    // arrange
    const input = undefined;

    // act
    const output = renderDirection(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe("");
  });
});

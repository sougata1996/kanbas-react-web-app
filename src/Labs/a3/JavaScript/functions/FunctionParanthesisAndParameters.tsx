function FunctionParanthesisAndParameters() {
  const square = (a: number) => a * a;
  const plusOne = (a: number) => a + 1;
  const twoSquared = square(2);
  const threePlusOne = plusOne(3);
  return (
    <>
      <h3>FunctionParanthesisAndParameters</h3>
      twoSquared = {twoSquared} <br />
      threePlusOne = {threePlusOne}
      <br />
    </>
  );
}

export default FunctionParanthesisAndParameters;

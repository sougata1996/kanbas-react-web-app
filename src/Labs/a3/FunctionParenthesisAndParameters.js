function FunctionParanthesis() {
const square = a => a * a;
const plusOne = a => a + 1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);

return (
    <div>
        <h1> ParenthesisAndParameters</h1>
        twoSquared = {twoSquared}<br/>
        square(2) = {square(2)}<br/>
        threePlusOne = {threePlusOne}<br/>
        plusOne(3) = {plusOne(3)}<br/>
    </div>
);
}
export default FunctionParanthesis;
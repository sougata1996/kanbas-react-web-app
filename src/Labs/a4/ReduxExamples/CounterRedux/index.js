import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterReducer";
function CounterRedux() {
  const { count } = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Counter Redux</h2>
      <h3>{count}</h3>
      <button className="btn"
      style={{backgroundColor: 'orange'}} 
      onClick={() => dispatch(increment())}>
        Increment </button>
      <button className="btn btn-primary" onClick={() => dispatch(decrement())}>
        Decrement </button>
    </div>
  );
}
export default CounterRedux;
import { FiMinus, FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return <div className="counter-card">
    <div className="counter-card-heading"><span className="counter-label">Current value</span><span className="counter-status">Live store</span></div>
    <div className="counter-controls"><button className="counter-button" type="button" aria-label="Decrement value" onClick={() => dispatch(decrement())}><FiMinus aria-hidden="true" /></button><output className="counter-value" aria-live="polite" aria-label="Current counter value">{count}</output><button className="counter-button" type="button" aria-label="Increment value" onClick={() => dispatch(increment())}><FiPlus aria-hidden="true" /></button></div>
    <p className="counter-help">Use the controls to update the Redux state.</p>
  </div>;
}

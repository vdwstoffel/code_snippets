import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "./store/counterSlice";

export default function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterSlicer.counter); // state.configureStoreExport.stateItem
  const showCounter = useSelector((state) => state.counterSlicer.showCounter);

  const increaseHandler = () => {
    dispatch(counterAction.increment());
  };

  const decreaseHandler = () => {
    dispatch(counterAction.decrement({ amount: 2 })); // specify a payload by name
  };

  const toggleCounter = () => {
    dispatch(counterAction.toggleCounter(!showCounter));
  };

  return (
    <div>
      <h1>Redux Example</h1>
      {showCounter ? <h2>Counter : {counter} </h2> : null}
      <button onClick={increaseHandler}>Increase</button>
      <button onClick={decreaseHandler}>Decrease</button>
      <button onClick={toggleCounter}>Toggle Show</button>
    </div>
  );
}

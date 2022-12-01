import { useDispatch } from "react-redux";
import { arrayActions } from "../store/array-slice";
import { useSelector } from "react-redux";
import style from "./GenerateArrayButton.module.css";

const GenerateArrayButton = (props) => {
  const dispatch = useDispatch();
  const array = useSelector((state) => state.arr.array);

  const resetArrayHandler = () => {
    dispatch(arrayActions.generateArray(array.length));
  };

  return (
    <button
      onClick={resetArrayHandler}
      className={style.button}
      disabled={props.onIsRunning}
    >
      Generate New Array
    </button>
  );
};

export default GenerateArrayButton;

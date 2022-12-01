import { useDispatch } from "react-redux";
import { arrayActions } from "../store/array-slice";
import style from "./ArraySlider.module.css";

const ArraySlider = (props) => {
  const dispatch = useDispatch();

  const resetArrayHandler = (event) => {
    dispatch(arrayActions.generateArray(event.target.value));
  };

  return (
    <>
      <div>
        <div className={style.arraySizeLabel}>
          Change Array Size & Sorting Speed
        </div>
        <div className={style.input}>
          <input
            type="range"
            min="4"
            max="100"
            disabled={props.onIsRunning}
            onChange={resetArrayHandler}
          />
        </div>
      </div>
    </>
  );
};

export default ArraySlider;

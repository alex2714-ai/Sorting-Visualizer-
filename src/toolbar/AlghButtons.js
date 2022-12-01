import { useDispatch, useSelector } from "react-redux";
import { alghActions } from "../store/updateAlgh";
import useSortingalgorithms from "../hooks/alghActions";
import GenerateArrayButton from "./GenerateArrayButton";
import ArraySlider from "./ArraySlider";
import "./AlghButtons.css";

const AlghButtons = () => {
  const dispatch = useDispatch();
  const { sortingAlgoritms } = useSortingalgorithms();

  const array = [...useSelector((state) => state.arr.array)];
  const algoritms = useSelector((state) => state.algorithms.currentAlgh);
  const isRunning = useSelector((state) => state.algorithms.isRunning);
  const speed = useSelector((state) => state.arr.sortingSpeed);

  const alghHandler = (algorithm) => {
    dispatch(alghActions.updateAlgh(algorithm));
  };

  const sort = () => {
    sortingAlgoritms(algoritms, array, speed);
  };

  return (
    <>
      <div className="ToolBar">
        <GenerateArrayButton onIsRunning={isRunning} />
        <div className="diveder" />
        <ArraySlider onIsRunning={isRunning} />
        <div className="diveder" />
        <div
          tabIndex="-1"
          onClick={() => alghHandler("bubbleSort")}
          className={!isRunning ? `${"AlghButton"}` : `${"AlghButtonDisable"}`}
        >
          Bubble Sort
        </div>
        <div
          tabIndex="-1"
          onClick={() => alghHandler("selectionSort")}
          className={!isRunning ? `${"AlghButton"}` : `${"AlghButtonDisable"}`}
        >
          Selection Sort
        </div>
        <div
          tabIndex="-1"
          onClick={() => alghHandler("mergeSort")}
          className={!isRunning ? `${"AlghButton"}` : `${"AlghButtonDisable"}`}
        >
          Merge Sort
        </div>
        <div
          tabIndex="-1"
          onClick={() => alghHandler("quickSort")}
          className={!isRunning ? `${"AlghButton"}` : `${"AlghButtonDisable"}`}
        >
          Quick Sort
        </div>
        <div className="diveder" />
        {algoritms ? (
          <button className="sortButton" disabled={isRunning} onClick={sort}>
            Start!
          </button>
        ) : null}
      </div>
    </>
  );
};

export default AlghButtons;

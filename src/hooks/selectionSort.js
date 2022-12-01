import { arrayActions } from "../store/array-slice";
import { useDispatch } from "react-redux";
import { alghActions } from "../store/updateAlgh";

const sleep = (milliSeconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliSeconds));
};

const useSelectionSort = () => {
  const dispatch = useDispatch();
  const selectionSort = async (array, speed) => {
    dispatch(alghActions.setIsRunning(true));
    for (let i = 0; i < array.length; i++) {
      let j = i + 1;
      let k = i;
      let bar1 = document.getElementsByClassName("sorting-bar")[i].style;
      while (j < array.length) {
        let bar2 = document.getElementsByClassName("sorting-bar")[j].style;
        let bar3 = document.getElementsByClassName("sorting-bar")[k].style;

        if (array[j] < array[k]) {
          k = j;
        }
        j += 1;

        bar1.backgroundColor = "green";
        bar2.backgroundColor = "red";
        bar3.backgroundColor = "blue";
        await sleep(speed);
        bar1.backgroundColor = "#50c2ff";
        bar2.backgroundColor = "#50c2ff";
        bar3.backgroundColor = "#50c2ff";
      }

      let temp = array[i];
      array[i] = array[k];
      array[k] = temp;
      dispatch(arrayActions.setArray([...array]));
    }
    dispatch(alghActions.setIsRunning(false));
  };
  return { selectionSort };
};

export default useSelectionSort;

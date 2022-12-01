import { arrayActions } from "../store/array-slice";
import { alghActions } from "../store/updateAlgh";
import { useDispatch } from "react-redux";

const sleep = (milliSeconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliSeconds));
};

const useBubbleSort = () => {
  const dispatch = useDispatch();
  const bubbleSort = async (primaryArray, speed) => {
    let currentArr = primaryArray;
    let sorted;
    dispatch(alghActions.setIsRunning(true));

    for (let i = 0; i < currentArr.length - 1; i++) {
      sorted = true;
      for (let j = 0; j < currentArr.length - i - 1; j++) {
        let bar1 = document.getElementsByClassName("sorting-bar")[j].style;
        let bar2 = document.getElementsByClassName("sorting-bar")[j + 1].style;
        bar1.backgroundColor = "green";
        bar2.backgroundColor = "green";
        await sleep(speed);

        if (currentArr[j] > currentArr[j + 1]) {
          let temp = currentArr[j];
          currentArr[j] = currentArr[j + 1];
          currentArr[j + 1] = temp;
          dispatch(arrayActions.setArray([...currentArr]));
          bar1.backgroundColor = "red";
          bar2.backgroundColor = "red";

          await sleep(speed);

          sorted = false;
        }

        bar1.backgroundColor = "#50c2ff";
        bar2.backgroundColor = "#50c2ff";
      }
      if (sorted === true) {
        break;
      }
    }
    dispatch(alghActions.setIsRunning(false));
  };
  return { bubbleSort };
};

export default useBubbleSort;

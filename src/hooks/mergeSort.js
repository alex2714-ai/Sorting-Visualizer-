import { arrayActions } from "../store/array-slice";
import { alghActions } from "../store/updateAlgh";
import { useDispatch } from "react-redux";

const sleep = (milliSeconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliSeconds));
};

const useMergeSort = () => {
  const dispatch = useDispatch();
  const merge = async (arr, low, mid, high, speed) => {
    let tempArray = [arr.length + 1];

    let i = low;
    let j = mid + 1;
    let k = low;

    while (i <= mid && j <= high) {
      let bar1 = document.getElementsByClassName("sorting-bar")[i].style;
      let bar2 = document.getElementsByClassName("sorting-bar")[j].style;

      if (arr[i] <= arr[j]) {
        tempArray[k++] = arr[i++];
      } else {
        tempArray[k++] = arr[j++];
        bar1.backgroundColor = "red";
        bar2.backgroundColor = "red";
        await sleep(speed);
      }
      dispatch(arrayActions.setArray([...arr]));
      bar1.backgroundColor = "green";
      bar2.backgroundColor = "green";
      await sleep(speed);

      bar1.backgroundColor = "#50c2ff";
      bar2.backgroundColor = "#50c2ff";
    }

    for (; i <= mid; i++) {
      tempArray[k++] = arr[i];
      dispatch(arrayActions.setArray([...arr]));
    }
    for (; j <= high; j++) {
      tempArray[k++] = arr[j];
      dispatch(arrayActions.setArray([...arr]));
    }

    for (i = low; i <= high; i++) {
      arr[i] = tempArray[i];
      dispatch(arrayActions.setArray([...arr]));
      let bar1 = document.getElementsByClassName("sorting-bar")[i].style;

      bar1.backgroundColor = "green";

      await sleep(speed);
      bar1.backgroundColor = "#50c2ff";
    }
  };

  const mergeSortHelper = async (array, low, high, speed) => {
    if (low < high) {
      dispatch(alghActions.setIsRunning(true));

      let mid = Math.floor((low + high) / 2);
      await mergeSortHelper(array, low, mid, speed);
      await mergeSortHelper(array, mid + 1, high, speed);
      await merge(array, low, mid, high, speed);
    }
  };
  const mergeSort = async (array, speed) => {
    await mergeSortHelper(array, 0, array.length - 1, speed);
    dispatch(alghActions.setIsRunning(false));
  };
  return { mergeSort };
};
export default useMergeSort;

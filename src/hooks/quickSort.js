import { arrayActions } from "../store/array-slice";
import { alghActions } from "../store/updateAlgh";
import { useDispatch } from "react-redux";

const sleep = (milliSeconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliSeconds));
};

const useQuickSort = () => {
  const dispatch = useDispatch();
  const partition = async (array, first, last, speed) => {
    let pivot = array[first];
    let i = first;
    let j = last;

    let barPivot = document.getElementsByClassName("sorting-bar")[i].style;
    let bar1 = document.getElementsByClassName("sorting-bar")[i].style;
    let bar2 = document.getElementsByClassName("sorting-bar")[j - 1].style;

    do {
      do {
        bar1.backgroundColor = "#50c2ff";

        bar1 = document.getElementsByClassName("sorting-bar")[i].style;
        i++;
        bar1.backgroundColor = "green";
        barPivot.backgroundColor = "yellow";
        await sleep(speed);
      } while (array[i] <= pivot);

      do {
        bar2.backgroundColor = "#50c2ff";
        j--;
        bar2 = document.getElementsByClassName("sorting-bar")[j].style;
        bar2.backgroundColor = "green";
        await sleep(speed);
      } while (array[j] > pivot);

      if (i < j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        dispatch(arrayActions.setArray([...array]));
        bar1.backgroundColor = "red";
        bar2.backgroundColor = "red";
        await sleep(speed);
        bar1.backgroundColor = "#50c2ff";
        bar2.backgroundColor = "#50c2ff";
      }
    } while (i < j);
    let temp = array[first];
    array[first] = array[j];
    array[j] = temp;

    bar2.backgroundColor = "red";
    barPivot.backgroundColor = "red";

    await sleep(speed);
    barPivot.backgroundColor = "#50c2ff";
    bar1.backgroundColor = "#50c2ff";
    bar2.backgroundColor = "#50c2ff";

    return j;
  };

  const quickSortHelper = async (array, first, last, speed) => {
    if (first < last) {
      dispatch(alghActions.setIsRunning(true));
      let j = await partition(array, first, last, speed);

      dispatch(arrayActions.setArray([...array]));
      await sleep(speed);
      await quickSortHelper(array, first, j, speed);
      await quickSortHelper(array, j + 1, last, speed);
    }
  };

  const quickSort = async (array, speed) => {
    await quickSortHelper(array, 0, array.length, speed);
    dispatch(alghActions.setIsRunning(false));
  };

  return { quickSort };
};

export default useQuickSort;

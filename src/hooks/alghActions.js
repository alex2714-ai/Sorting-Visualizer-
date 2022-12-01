import useBubbleSort from "./bubbleSort";
import useSelectionSort from "./selectionSort";
import useMergeSort from "./mergeSort";
import useQuickSort from "./quickSort";

const useSortingalgorithms = () => {
  const { bubbleSort } = useBubbleSort();
  const { selectionSort } = useSelectionSort();
  const { mergeSort } = useMergeSort();
  const { quickSort } = useQuickSort();

  const sortingAlgoritms = (algorithm, array, speed) => {
    if (algorithm === "bubbleSort") {
      bubbleSort(array, speed);
    }
    if (algorithm === "selectionSort") {
      selectionSort(array, speed);
    }
    if (algorithm === "mergeSort") {
      mergeSort(array, speed);
    }
    if (algorithm === "quickSort") {
      quickSort(array, speed);
    }
    if (algorithm === null) {
      console.log("null");
    }
  };
  return { sortingAlgoritms };
};

export default useSortingalgorithms;

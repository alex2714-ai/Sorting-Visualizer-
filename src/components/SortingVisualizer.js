import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { arrayActions } from "../store/array-slice";
import { useSelector } from "react-redux";
import "./SortingVisualizer.css";

const SortingVisualizer = () => {
  const dispatch = useDispatch();
  let array = useSelector((state) => state.arr.array);

  useEffect(() => {
    dispatch(arrayActions.generateArray(50));
  }, [dispatch]);

  const numWidth = Math.floor(document.body.clientWidth / (array.length * 3));
  const width = `${numWidth}px`;
  const color = array.length > 25 ? "rgba(0, 0, 0, 0)" : "black";
  const numFont =
    array.length > 20
      ? 12
      : array.length > 16
      ? 14
      : array.length > 9
      ? 16
      : array.length > 7
      ? 18
      : array.length > 3
      ? 20
      : 10;
  const fontSize = `${numFont}px`;
  const numMargim =
    array.length < 5
      ? 10
      : array.length < 10
      ? 8
      : array.length < 17
      ? 6
      : array.length < 30
      ? 4
      : array.length < 50
      ? 3.5
      : array.length < 100
      ? 3
      : 2.5;
  const margin = `${numMargim}px`;
  // console.log(array.length);

  return (
    <div className="container">
      <>
        {array.map((value, idx) => (
          <div
            className="sorting-bar"
            style={{
              height: `${value * 3}px`,
              width: width,
              fontSize: fontSize,
              color: color,
              marginRight: margin,
            }}
            key={idx}
          >
            {value}
          </div>
        ))}
      </>
    </div>
  );
};

export default SortingVisualizer;

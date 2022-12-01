import classes from "./MainNavigation.module.css";
import AlghButtons from "../../toolbar/AlghButtons";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>{<AlghButtons />}</li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

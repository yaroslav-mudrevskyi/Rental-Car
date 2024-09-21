import { Link } from "react-router-dom";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.homePage}>
      <Link className={s.btnClick} to="/catalog">
        Click here to choose the best car for you!
      </Link>
    </div>
  );
};

export default HomePage;

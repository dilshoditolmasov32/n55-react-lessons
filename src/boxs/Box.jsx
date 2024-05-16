import "./Box.css";
import { NavLink } from "react-router-dom";
const Box = () => {
  return (
    <div className="boxs_page">
      <div className="container">
        <div className="links">
          <h5>Recent posts</h5>
          <a>View all</a>
        </div>
        <div className="boxs">
          <div className="box">
            <h2>Making a design system from scratchs</h2>
            <h6>12 Feb 2020 Design, Pattern</h6>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>

          <div className="box">
            <h2>Making a design system from scratchs</h2>
            <h6>12 Feb 2020 Design, Pattern</h6>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;

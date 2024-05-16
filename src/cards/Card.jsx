import "./Card.css";
import img1 from "../assets/img1.svg";
import img2 from "../assets/img2.svg";
import img3 from "../assets/img3.svg";
const Card = () => {
  const items = [
    {
      id: 1,
      image: img1,
      title: "Dashboard",
      h2: "Designing Dashboards",
      number: 2020,
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 2,
      image: img2,
      title: "Illustration",
      h2: "Vibrant Portraits of 2020",
      number: 2018,
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 3,
      image: img3,
      title: "Typography",
      h2: "36 Days of Malayalam type",
      number: 2018,
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];

  const item = items?.map((value) => (
    <>
      <div className="card" key={value.id}>
        <div>
          <img src={value.image} alt="image" />
        </div>
        <div>
          <h2>{value.h2}</h2>
          <h3>
            <span>{value.number}</span>
            {value.title}
          </h3>
          <p>{value.text}</p>
        </div>
      </div>
      <div className="line"></div>
    </>
  ));
  return (
    <div className="cards_page">
      <div className="container cards ">
        <h5>Featured works</h5>
        {item}
      </div>
    </div>
  );
};

export default Card;

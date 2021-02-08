import React from "react";
import PropTypes from "prop-types";

function Food(props) {
  let textElem = <h3>Some Food</h3>;
  if (props.isLike) textElem = <h3>I like {props.name}</h3>;
  else textElem = <h3>I don't like {props.name}</h3>;
  return <div>{textElem}</div>;
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  isLike: PropTypes.bool.isRequired,
};

function FoodPage() {
  const foodsILike = [
    { id: 1, name: "ramen", isLike: true },
    { id: 2, name: "kimchi", isLike: false },
    { id: 3, name: "kimbap", isLike: true },
    { id: 4, name: "pizza", isLike: false },
  ];

  // Return html by using JSX
  return (
    <div>
      <h1>Hello !!!</h1>
      {foodsILike.map((elem) => (
        <Food key={elem.id} name={elem.name} isLike={elem.isLike} />
      ))}
    </div>
  );
}

export default FoodPage;

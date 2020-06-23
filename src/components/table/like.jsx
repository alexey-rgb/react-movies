import React from "react";

const Like = ({ handleHeart, title, currentHeartId, heartCondition }) => {
  const heartKey = Object.keys(heartCondition);
  const setClassName = () => {
    if (title === currentHeartId || heartCondition[title]) {
      return "fas fa-heart cursor";
    } else {
      return "far fa-heart cursor";
    }
  };
  return (
    <i
      id={title}
      onClick={() => handleHeart(title)}
      className={setClassName()}
    ></i>
  );
};

export default Like;

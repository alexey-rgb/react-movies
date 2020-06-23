import React from "react";

export const getButton = (
  nodeName,
  eventName,
  inputsCondition,
  currentValue
) => {
  const setDisabled = (condition) => {
    return currentValue !== "" &&
      condition.length === 4 &&
      !condition.includes(true)
      ? false
      : true;
  };

  return (
    <button
      disabled={setDisabled(inputsCondition)}
      type={eventName}
      class="btn btn-primary"
    >
      {nodeName}
    </button>
  );
};

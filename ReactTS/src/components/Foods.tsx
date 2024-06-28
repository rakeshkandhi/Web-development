import React from "react";

// Foods component
const Foods: React.FC = () => {
  const fruits: string[] = [
    "Orange",
    "Banana",
    "Strawberry",
    "Pineapple",
    "Watermelon",
  ];

  return (
    <>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <hr />
    </>
  );
};

export default Foods;

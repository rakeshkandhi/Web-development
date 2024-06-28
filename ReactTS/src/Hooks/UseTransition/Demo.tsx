import React, { useState, useTransition } from "react";
import jsonData from "C:/Users/Rakesh/Downloads/test.json";

const Demo: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [isPending, startTransition] = useTransition();
  const [input, setInputValue] = useState("");
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    startTransition(() => {
      setQuery(event.target.value);
    });
  };

  const filteredData = jsonData.filter(
    (item) =>
      item.firstName.toLowerCase().includes(query.toLowerCase()) ||
      item.lastName.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1>Local JSON Data Display</h1>
      <input
        type="text"
        style={{ padding: "10px" }}
        onChange={changeHandler}
        value={input}
      />
      {isPending && (
        <div>
          updating List.....
          <br />
          Please Wait........
        </div>
      )}
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>
            <strong>Name: </strong>
            {item.firstName.toLocaleUpperCase()}
            {item.lastName.toLocaleUpperCase()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Demo;

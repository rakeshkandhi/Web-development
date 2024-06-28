import React, { useState, useEffect } from "react";

interface Todos {
  count: string;
  date: string;
  level: string;
}
export const Demo1: React.FC = () => {
  const [data, setData] = useState<Todos[]>([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/hugit6/test03/8f6363297f2b4b4fc63b449760cfb04a9911cc06/t02.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div>
      <h1>Data Display</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            Index: {item.date}, Name: {item.level}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Demo1;
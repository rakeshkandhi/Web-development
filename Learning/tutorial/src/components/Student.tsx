import React from "react";

interface StudentDetails {
  name: string;
  isStudent?: boolean;
  age?: number;
}
const Student: React.FC<StudentDetails> = (props) => {
  const { name, age = 12, isStudent = true } = props;
  return (
    <>
      <div className="student">
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Is Student: {isStudent ? "Yes" : "No"}</p>
      </div>
    </>
  );
};

export default Student;

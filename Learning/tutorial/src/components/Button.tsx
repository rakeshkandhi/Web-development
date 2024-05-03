import React from "react";
const Button: React.FC = () => {
  const styles = {
    button: {
      backgroundColor: "hsl(200,100%,50%)",
      color: "white",
      padding: "10px 20px",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
    },
  };

  return <button style={styles.button}>Click Me</button>;
};

export default Button;

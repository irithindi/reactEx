import react from "react";

const Button = (props) => {
  return (
    <div>
      <button
        style={{
          fontWeight: props.weight,
          padding: "10px",
          background: "blue"
        }}
      >
        {props.children}
      </button>
      <button style={{ margin: "10px" }}> {props.children}'s</button>
    </div>
  );
};

export default Button;
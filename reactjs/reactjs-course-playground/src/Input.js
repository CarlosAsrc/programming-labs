import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.title}</label>
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        ref={ref}
        className={props.className}
        onChange={props.onChange}
      />
    </div>
  );
});

export default Input;

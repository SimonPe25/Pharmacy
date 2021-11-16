import React from "react";
import './style.scss'

const MyInput1 = (props) => {
  const { type, label, form, field } = props
  const { name } = field

  return (
    <div>
      <div>
        <label className="input">
          {label}
          <input type={type} {...field} className="input-enter" />
        </label>
      </div>
      {form.errors[name] && form.touched[name] && (
        <span className="error">{form.errors[name]}</span>
      )}
    </div>
  );
};

export default MyInput1;

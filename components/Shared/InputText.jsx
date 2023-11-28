import React from "react";

const InputText = ({ name, label, type, placeholder, warrning, value }) => {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder || ""}
        className="input input-bordered w-full"
        required
        autoComplete="off"
      />
      {warrning && (
        <label className="label">
          <span className="label-text-alt">{warrning || null}</span>
        </label>
      )}
    </div>
  );
};

export default InputText;

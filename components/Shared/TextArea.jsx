import React from "react";

const TextArea = ({ label, type, placeholder, warrning, onChange }) => {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <textarea
        type={type}
        name="service"
        placeholder={placeholder || ""}
        onChange={onChange}
        className="input input-bordered w-full h-24 p-2 placeholder:text-sm placeholder:font-thin placeholder:text-gray-400"
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

export default TextArea;

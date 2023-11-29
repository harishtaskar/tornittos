import React from "react";

const TextArea = ({ label, type, placeholder, warrning, onChange, value }) => {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <textarea
        type={type}
        name="notes"
        placeholder={placeholder || ""}
        onChange={onChange}
        value={value}
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

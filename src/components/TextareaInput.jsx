function TextareaInput({ classes, value, onHandleChange }) {
  return (
    <textarea
      value={value}
      onChange={onHandleChange}
      className={`w-full px-4 border-black border text-black ${classes}`}
      placeholder={value}
    ></textarea>
  );
}

export default TextareaInput;

function TextInput({ onHandleChange, value, classes }) {
  return (
    <input
      value={value}
      onChange={onHandleChange}
      className={`w-full px-4 border-black border text-black ${classes}`}
      type="text"
    />
  );
}

export default TextInput;

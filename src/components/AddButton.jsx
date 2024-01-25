function AddButton({ text, onAdd }) {
  return (
    <div className="flex justify-center items-center">
      <hr className="horizontal-rule bg-emerald-500" />
      <button
        onClick={onAdd}
        className="flex-shrink-0 px-4 py-2 rounded-lg bg-emerald-500 text-white"
      >
        Add {text}
      </button>
      <hr className="horizontal-rule bg-emerald-500" />
    </div>
  );
}

export default AddButton;

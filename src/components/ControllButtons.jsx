function ControllButtons({ handleCancel, handleClear, handleSave }) {
  return (
    <div className="flex justify-center gap-3">
      <button
        onClick={handleCancel}
        className="px-4 py-2 rounded-lg bg-yellow-500 text-white"
      >
        Cancel
      </button>
      <button
        onClick={handleClear}
        className="px-4 py-2 rounded-lg bg-red-500 text-white"
      >
        Clear
      </button>
      <button
        onClick={handleSave}
        className="px-4 py-2 rounded-lg bg-emerald-500 text-white"
      >
        Save
      </button>
    </div>
  );
}

export default ControllButtons;

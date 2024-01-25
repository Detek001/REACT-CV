function Label({ title, children }) {
  return (
    <label className="grid sm:grid-cols-5 mb-2">
      <span className="sm:col-span-2 font-bold">{title}</span>
      {children}
    </label>
  );
}

export default Label;

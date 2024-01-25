import { useDispatch, useSelector } from "react-redux";
import { toggleEdit } from "../features/Slice";
function Input() {
  const dispatch = useDispatch();
  const edit = useSelector((store) => store.slice.edit);
  return (
    <div className="fixed bottom-3 left-0 right-0 container flex justify-center">
      <button
        onClick={() => dispatch(toggleEdit())}
        className="text-center bg-orange-500 text-white rounded-lg w-full py-3"
      >
        {edit ? "CANCEL" : "EDIT"}
      </button>
    </div>
  );
}

export default Input;

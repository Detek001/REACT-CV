import { addSkill, editSkill } from "../features/Slice";
import { useDispatch, useSelector } from "react-redux";
import Label from "./Label";
import TextInput from "./TextInput";

function Skill({ type, details, id }) {
  const dispatch = useDispatch();
  const edit = useSelector((store) => store.slice.edit);

  function handleChange(e, category) {
    const value = e.target.value;

    dispatch(editSkill({ category, value, id }));
  }

  return (
    <div className="grid grid-cols-2 gap-6 my-4">
      {edit ? (
        <>
          <Label title="Type:">
            <TextInput
              classes="sm:col-span-3"
              value={type}
              onHandleChange={(e) => handleChange(e, "type")}
            ></TextInput>
          </Label>
          <Label title="Details:">
            <TextInput
              classes="sm:col-span-3"
              value={details}
              onHandleChange={(e) => handleChange(e, "details")}
            ></TextInput>
          </Label>
        </>
      ) : (
        <>
          <div className="font-bold flex-1">{type}</div>
          <div>{details}</div>
        </>
      )}
    </div>
  );
}

export default Skill;

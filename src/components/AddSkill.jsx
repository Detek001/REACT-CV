import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleEdit, addSkill } from "../features/Slice";
import Label from "./Label";
import TextInput from "./TextInput";
import ControllButtons from "./ControllButtons";

function Skill({ setShowAddFields }) {
  const initialData = {
    id: crypto.randomUUID(),
    type: "",
    details: "",
  };

  const dispatch = useDispatch();

  const [skill, setSkill] = useState(initialData);

  function handleChange(e, category) {
    const value = e.target.value;

    setSkill({
      ...skill,
      [category]: value,
    });
  }

  function handleClear() {
    setSkill(initialData);
  }

  function handleCancel() {
    setShowAddFields(false);
  }

  function handleSave() {
    dispatch(addSkill({ skill }));
    setShowAddFields(false);
    dispatch(toggleEdit());
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-6 my-4">
        <Label title="Type:">
          <TextInput
            classes="sm:col-span-3"
            value={skill.type}
            onHandleChange={(e) => handleChange(e, "type")}
          ></TextInput>
        </Label>
        <Label title="Details:">
          <TextInput
            classes="sm:col-span-3"
            value={skill.details}
            onHandleChange={(e) => handleChange(e, "details")}
          ></TextInput>
        </Label>
      </div>
      <ControllButtons
        handleCancel={handleCancel}
        handleClear={handleClear}
        handleSave={handleSave}
      ></ControllButtons>
    </>
  );
}

export default Skill;

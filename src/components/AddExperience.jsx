import { useDispatch } from "react-redux";
import { useState } from "react";
import { toggleEdit, addExperience } from "../features/Slice";
import Label from "./Label";
import TextInput from "./TextInput";
import TextareaInput from "./TextareaInput";
import ControllButtons from "./ControllButtons";

const initialData = {
  startDate: "",
  endDate: "",
  location: "",
  name: "",
  title: "",
  description: "",
};

function AddExperience({ type, setShowAddFields }) {
  const dispatch = useDispatch();

  const [experience, setExperience] = useState({
    id: crypto.randomUUID(),
    data: initialData,
  });

  function isDataEmpty(obj) {
    return Object.values(obj).every((value) => value.trim() === "");
  }

  function handleChange(e, category) {
    const value = e.target.value;

    setExperience({
      ...experience,
      data: {
        ...experience.data,
        [category]: value,
      },
    });
  }

  function handleClear() {
    setExperience({
      ...experience,
      data: initialData,
    });
  }

  function handleCancel() {
    setShowAddFields(false);
  }

  function handleSave() {
    if (isDataEmpty(experience.data)) return;

    dispatch(addExperience({ type, experience }));
    setShowAddFields(false);
    dispatch(toggleEdit());
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-6 my-4">
        <div>
          <Label title="Start date:">
            <TextInput
              classes="sm:col-span-3"
              value={experience.data.startDate}
              onHandleChange={(e) => handleChange(e, "startDate")}
            ></TextInput>
          </Label>
          <Label title="End date:">
            <TextInput
              classes="sm:col-span-3"
              value={experience.data.endDate}
              onHandleChange={(e) => handleChange(e, "endDate")}
            ></TextInput>
          </Label>
          <Label title="Location:">
            <TextInput
              classes="sm:col-span-3"
              value={experience.data.location}
              onHandleChange={(e) => handleChange(e, "location")}
            ></TextInput>
          </Label>
        </div>
        <div>
          <Label title="Name:">
            <TextInput
              classes="sm:col-span-3"
              value={experience.data.name}
              onHandleChange={(e) => handleChange(e, "name")}
            ></TextInput>
          </Label>
          <Label title="Title:">
            <TextInput
              classes="sm:col-span-3"
              value={experience.data.title}
              onHandleChange={(e) => handleChange(e, "title")}
              category="title"
            ></TextInput>
          </Label>
          <Label title="Description:">
            <TextareaInput
              classes="sm:col-span-3"
              value={experience.data.description}
              onHandleChange={(e) => handleChange(e, "description")}
            ></TextareaInput>
          </Label>
        </div>
      </div>
      <ControllButtons
        handleCancel={handleCancel}
        handleClear={handleClear}
        handleSave={handleSave}
      ></ControllButtons>
    </>
  );
}

export default AddExperience;

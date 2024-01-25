import { editExperience } from "../features/Slice";
import { useDispatch, useSelector } from "react-redux";
import Label from "./Label";
import TextInput from "./TextInput";
import TextareaInput from "./TextareaInput";

function ListItem({ data, id, type }) {
  const { startDate, endDate, location, name, title, description } = data;

  const dispatch = useDispatch();

  const edit = useSelector((store) => store.slice.edit);

  function handleChange(e, category) {
    const value = e.target.value;

    dispatch(editExperience({ type, value, id, category }));
  }

  return (
    <div className="grid grid-cols-2 gap-6 my-4">
      <div>
        {edit ? (
          <div>
            <Label title="Start date:">
              <TextInput
                classes="sm:col-span-3"
                value={startDate}
                onHandleChange={(e) => handleChange(e, "startDate")}
              ></TextInput>
            </Label>
            <Label title="End date:">
              <TextInput
                classes="sm:col-span-3"
                value={endDate}
                onHandleChange={(e) => handleChange(e, "endDate")}
              ></TextInput>
            </Label>
          </div>
        ) : (
          <div className="date mb-2">
            {startDate} - {endDate}
          </div>
        )}
        {edit ? (
          <Label title="Location:">
            <TextInput
              classes="sm:col-span-3"
              value={location}
              onHandleChange={(e) => handleChange(e, "location")}
            ></TextInput>
          </Label>
        ) : (
          <div className="city">{location}</div>
        )}
      </div>
      <div>
        {edit ? (
          <>
            <Label title="Name:">
              <TextInput
                classes="sm:col-span-3"
                value={name}
                onHandleChange={(e) => handleChange(e, "name")}
              ></TextInput>
            </Label>
            <Label title="Title:">
              <TextInput
                classes="sm:col-span-3"
                value={title}
                onHandleChange={(e) => handleChange(e, "title")}
              ></TextInput>
            </Label>
            <Label title="Description:">
              <TextareaInput
                classes="sm:col-span-3"
                value={description}
                onHandleChange={(e) => handleChange(e, "description")}
                category="description"
              ></TextareaInput>
            </Label>
          </>
        ) : (
          <>
            <div className="name font-bold mb-2">{name}</div>
            <div className="title mb-2">{title}</div>
            <div className="description">{description}</div>
          </>
        )}
      </div>
    </div>
  );
}

export default ListItem;

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AddButton from "./AddButton";
import Heading from "./Heading";
import ListItem from "./ListItem";
import AddExperience from "./AddExperience";

function Experience({ type }) {
  const data = useSelector((store) => store.slice.experience[type]);
  const edit = useSelector((store) => store.slice.edit);

  const [showAddFields, setShowAddFields] = useState(false);

  useEffect(() => {
    if (edit === false) setShowAddFields(false);
  }, [edit, showAddFields]);

  return (
    <div className="my-4">
      <Heading title={type}></Heading>
      {!showAddFields &&
        data.map((item) => {
          return (
            <ListItem
              data={item.data}
              key={item.id}
              id={item.id}
              type={type}
            ></ListItem>
          );
        })}

      {showAddFields && edit && (
        <AddExperience
          type={type}
          setShowAddFields={setShowAddFields}
        ></AddExperience>
      )}

      {edit && !showAddFields && (
        <AddButton onAdd={() => setShowAddFields(true)} text={type}></AddButton>
      )}
    </div>
  );
}

export default Experience;

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Heading from "./Heading";
import Skill from "./Skill";
import AddButton from "./AddButton";
import AddSkill from "./AddSkill";

function Skills() {
  const skills = useSelector((store) => store.slice.skills);
  const edit = useSelector((store) => store.slice.edit);

  const [showAddFields, setShowAddFields] = useState(false);

  useEffect(() => {
    if (edit === false) setShowAddFields(false);
  }, [edit, showAddFields]);

  return (
    <div>
      <Heading title="Skills & Interests"></Heading>
      {!showAddFields &&
        skills.map((skill) => {
          return (
            <Skill
              type={skill.type}
              details={skill.details}
              key={skill.id}
              id={skill.id}
            ></Skill>
          );
        })}

      {showAddFields && edit && (
        <AddSkill setShowAddFields={setShowAddFields}></AddSkill>
      )}

      {edit && !showAddFields && (
        <AddButton
          onAdd={() => setShowAddFields(true)}
          text="skill"
        ></AddButton>
      )}
    </div>
  );
}

export default Skills;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  edit: false,
  personalDetails: {
    name: "Max Mustermann",
    email: "maxmustermann@gmail.de",
    tel: "+49123456789",
    address: "New York, NY",
  },
  experience: {
    education: [
      {
        id: crypto.randomUUID(),
        data: {
          startDate: "09/2016",
          endDate: "08/2020",
          location: "Boston, MA",
          name: "Harvard University",
          title: "B.Sc. Business informatics",
        },
      },
    ],
    work: [
      {
        id: crypto.randomUUID(),
        data: {
          startDate: "09/2023",
          endDate: "present",
          location: "Cupertino, CA",
          name: "Apple Inc.",
          title: "Frontend Developer",
          description: "Part of the dev team",
        },
      },
    ],
  },
  skills: [
    {
      id: crypto.randomUUID(),
      type: "programming",
      details: "HTML, CSS, JavaScript, React",
    },
  ],
};

const Slice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    toggleEdit(state) {
      state.edit = !state.edit;
    },
    editPersonalDetails(state, action) {
      const newPersonalDetails = {
        ...state.personalDetails,
        [action.payload.category]: action.payload.value,
      };
      state.personalDetails = newPersonalDetails;
    },
    addExperience(state, action) {
      const type = action.payload.type;
      console.log(action.payload);
      state.experience[type].push(action.payload.experience);
    },
    editExperience(state, action) {
      const { type, value, id, category } = action.payload;

      state.experience[type] = state.experience[type].map((experience) => {
        if (experience.id === id) {
          return {
            id: experience.id,
            data: {
              ...experience.data,
              [category]: value,
            },
          };
        } else {
          return experience;
        }
      });
    },
    addSkill(state, action) {
      console.log(action.payload.skill);
      state.skills.push(action.payload.skill);
      console.log(state.skills);
    },
    editSkill(state, action) {
      const { category, value, id } = action.payload;

      state.skills = state.skills.map((skill) => {
        if (skill.id === id) {
          return {
            id: skill.id,
            type: skill.type,
            details: skill.details,
            [category]: value,
          };
        }
      });
    },
  },
});

export const {
  toggleEdit,
  editPersonalDetails,
  addExperience,
  editExperience,
  addSkill,
  editSkill,
} = Slice.actions;

export default Slice.reducer;

import { useDispatch, useSelector } from "react-redux";
import { editPersonalDetails } from "../features/Slice";
import TextInput from "./TextInput";

function PersonalDetails() {
  const dispatch = useDispatch();

  const { name, email, tel, address } = useSelector(
    (store) => store.slice.personalDetails
  );

  const edit = useSelector((store) => store.slice.edit);

  function handleChange(e, category) {
    const value = e.target.value;

    dispatch(editPersonalDetails({ category, value }));
  }

  return (
    <div className="bg-sky-300 p-8 rounded-t-lg flex flex-col justify-center items-center text-white">
      {edit ? (
        <label className="mb-2 flex items-center gap-2">
          <span>👤</span>
          <TextInput
            value={name}
            onHandleChange={(e) => handleChange(e, "name")}
          ></TextInput>
        </label>
      ) : (
        <h1 className="text-3xl mb-4">{name}</h1>
      )}

      <div className="flex flex-col md:flex-row justify-center items-center gap-y-2 gap-x-4">
        {edit ? (
          <>
            <label className="flex items-center gap-2">
              <span>📧</span>
              <TextInput
                value={email}
                onHandleChange={(e) => handleChange(e, "email")}
              ></TextInput>
            </label>
            <label className="flex items-center gap-2">
              <span>📞</span>
              <TextInput
                value={tel}
                onHandleChange={(e) => handleChange(e, "tel")}
              ></TextInput>
            </label>
            <label className="flex items-center gap-2">
              <span>🏡</span>
              <TextInput
                value={address}
                onHandleChange={(e) => handleChange(e, "address")}
              ></TextInput>
            </label>
          </>
        ) : (
          <>
            <span> 📧 {email}</span>
            <span> 📞 {tel}</span>
            <span> 🏡 {address}</span>
          </>
        )}
      </div>
    </div>
  );
}

export default PersonalDetails;

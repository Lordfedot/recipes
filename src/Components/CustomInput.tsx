import { ChangeEvent } from "react";
import { useField } from "formik";
import { toCapitilize } from "../Helpers/heplers";

interface CustomInputProps {
  name: string;
}

const CustomInput = ({ name }: CustomInputProps) => {
  const [field, meta, helpers] = useField(name);
  const error = toCapitilize(meta.error);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const modifiedValue = toCapitilize(value);
    console.log(value);
    
    helpers.setValue(modifiedValue);
  };

  return (
    <>
      <label>
        {toCapitilize(name)}
        <input
          {...field}
          placeholder={`${name}`}
          type="text"
          onChange={handleChange}
        />
      </label>

      {meta.touched && meta.error && <div>{error}</div>}
    </>
  );
};
export default CustomInput;

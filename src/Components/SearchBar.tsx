
import { Dispatch, FormEvent, SetStateAction, useState } from "react";

type Props = {
  getValue: Dispatch<SetStateAction<string>>;
  getOption: Dispatch<SetStateAction<string>>;
};
const SearchBar = ({ getValue, getOption }: Props) => {
  const [value, setValue] = useState("");
  const [option, setOption] = useState("title");


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    getValue(value)
    getOption(option)
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={e => setValue(e.target.value)} />
        <select value={option} onChange={e => setOption(e.target.value)}>
          <option value="title">Title</option>
          <option value="ingredients">Ingredients</option>
        </select>
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchBar;

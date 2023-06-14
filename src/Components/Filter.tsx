import { Dispatch, SetStateAction } from "react";
import "./../Card.css";

const categories = [
  "Beef",
  "Chicken",
  "Breakfast",
  "Dessert",
  "Goat",
  "Lamb",
  "Pasta",
  "Pork",
  " Side",
  "Seafood",
];
type Props = {
  getFilter: Dispatch<SetStateAction<string | null>>;
  getTime: Dispatch<SetStateAction<string | null>>;
};
const Filter = ({ getFilter, getTime }: Props) => {
  return (
    <form>
      <ul className="Filter_wrapper">
        {categories.map((category) => (
          <li key={category}>
            <button
              type="button"
              onClick={(e) => getFilter(e.currentTarget.textContent)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
      <label>
        Prepared in no longer than that time
        <input onChange={(e) => getTime(e.currentTarget.value)} type="number" />
      </label>
    </form>
  );
};

export default Filter;

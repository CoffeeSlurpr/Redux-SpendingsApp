import { useDispatch, useSelector } from "react-redux";
import { changeTerm } from "../store/Slices/ListSlice";

function Search() {
  const dispatch = useDispatch();

  const searchTerm = useSelector((state) => state.list.searchTerm);

  const handleSearchTermChange = (e) => {
    const value = e.target.value;

    dispatch(changeTerm(value));
  };

  return (
    <div className="list-header">
      <h3 className="title is-3">List</h3>
      <div className="search field is-horizontal">
        <label className="label">Search</label>
        <input
          className="input"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
    </div>
  );
}

export default Search;

import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../store";

function List() {
  const dispatch = useDispatch();

  const name = useSelector((state) => state.form.name);
  const filtered = useSelector(({ list: { items, searchTerm } }) => {
    return items.filter((item) => {
      const query = searchTerm.toLowerCase();

      return item.name.toLowerCase().includes(query);
    });
  });

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  const renderedItems = filtered.map((item) => {
    const isBold = name && item.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div
        key={item.id}
        className={`panel ${isBold && "bold"}`}
      >
        <p>
          {item.name} - ${item.cost}
        </p>
        <button
          onClick={() => handleRemove(item)}
          className="button is-danger"
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="list">
      {renderedItems}
      <hr />
    </div>
  );
}

export default List;

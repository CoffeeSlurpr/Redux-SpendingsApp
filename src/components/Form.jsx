import { useDispatch, useSelector } from "react-redux";
import { changeCost, changeName } from "../store/index";
import { addItem } from "../store/index";

function Form() {
  const dispatch = useDispatch();

  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });

  const handleInputChange = (e) => {
    const value = e.target.value;

    dispatch(changeName(value));
  };

  const handleCostChange = (e) => {
    const value = parseInt(e.target.value) || 0;

    dispatch(changeCost(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addItem({ name, cost }));
  };

  return (
    <div className="form panel">
      <h4 className="subtitle is-3">Add Items</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              value={name}
              onChange={handleInputChange}
            />
          </div>

          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              value={cost || 0}
              onChange={handleCostChange}
              type="number"
            />
          </div>
        </div>
        <div className="field">
          <button
            className="button is-link"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;

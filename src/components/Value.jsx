import { useSelector } from "react-redux";

function Value() {
  const Spent = useSelector(({ list: { items, searchTerm } }) => {
    const spending = items
      .filter((item) => {
        const query = searchTerm.toLowerCase();
        return item.name.toLowerCase().includes(query);
      })
      .reduce((total, curr) => {
        return total + curr.cost;
      }, 0);

    return spending;
  });

  return <div className="value">Spent: ${Spent}</div>;
}

export default Value;

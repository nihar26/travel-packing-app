import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  Items,
  onDeleteItem,
  onToggle,
  onClearList,
}) {
  const [sort, setBySort] = useState("input");
  let sortedItems;

  if (sort === "input") sortedItems = Items;

  if (sort === "description")
    sortedItems = Items.slice().sort((a, b) =>
      a.description.localeCompare(b.description)
    );

  if (sort === "packed")
    sortedItems = Items.slice().sort(
      (a, b) => Number(b.packed) - Number(a.packed)
    );

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            onDeleteItem={onDeleteItem}
            onToggle={onToggle}
            item={item}
            key={item.id}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sort} onChange={(e) => setBySort(e.target.value)}>
          <option value={"input"}>Sort by input</option>
          <option value={"description"}>Sort by description</option>
          <option value={"packed"}>Sort by packed</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}

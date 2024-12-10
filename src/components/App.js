import "./index.css";
import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "charger", quantity: 1, packed: true },
// ];

function App() {
  const [items, setItems] = useState([]);

  function handleItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleOnDelete(id) {
    // console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function HandleClear() {
    // console.log(id);
    const confirmed = window.confirm(
      "Are You Sure You Want To Delete all items?"
    );
    if (confirmed) setItems([]);
  }

  function handleOnToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  // console.log(items);

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleItems} />
      <PackingList
        onDeleteItem={handleOnDelete}
        Items={items}
        onToggle={handleOnToggle}
        onClearList={HandleClear}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;

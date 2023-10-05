import styles from "./App.module.css";

import bgImage from "./assets/bg-image.jpg";
import ShoppingForm from "./components/ShoppingForm";
import ListItem from "./components/ListItem.jsx";
import { useState } from "react";

let ITEMS = [
  {
    id: 1,
    name: "Banana",
    category: "fruta",
    quantity: 10,
    unity: "unidade",
    purchased: false,
  },
];

function App() {
  const [items, setItems] = useState(ITEMS);
  let id = (items[items.length - 1]?.id ?? 1) + 1;

  function handleSubmit(formData) {
    const newItem = {
      ...formData,
      id,
    };
    setItems([...items, newItem]);
  }

  function handleDelete(id) {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  }

  function handleCheckedChange(id, checked) {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, purchased: checked } : item
    );
    setItems(newItems);
  }

  return (
    <div>
      <header className={styles.header}>
        <img height={185} src={bgImage} alt="" role="presentation" />
      </header>

      <main className={styles.main}>
        <h1>Lista de Compras</h1>

        <ShoppingForm onSubmit={(formData) => handleSubmit(formData)} />

        <ul className={styles.itemList}>
          {items.map((item) => (
            <ListItem
              key={item.id}
              item={item}
              onDelete={handleDelete}
              onCheckedChange={handleCheckedChange}
            ></ListItem>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;

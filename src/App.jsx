import styles from "./App.module.css";

import bgImage from "./assets/bg-image.jpg";
import ShoppingForm from "./components/ShoppingForm";
import ListItem from "./components/ListItem.jsx";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // Estado derivado
  const purchasedItems = items.filter((item) => item.purchased).length;

  // Hook

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3333/items")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setItems(data);
      });
  }, []);

  async function handleCreate(formData) {
    const res = await fetch("http://localhost:3333/items", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ ...formData, purchased: false }),
    });
    const data = await res.json();
    setItems([...items, data]);
  }

  async function handleDelete(id) {
    const res = await fetch("http://localhost:3333/items/" + id, {
      method: "DELETE",
    });
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  }

  async function handleCheckedChange(id, checked) {
    const res = await fetch("http://localhost:3333/items/" + id, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH", //GET, POST, PUT, PATCH, DELETE
      body: JSON.stringify({ purchased: checked }),
    });

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

        <ShoppingForm onSubmit={handleCreate} />

        <div className={styles.purchasedItems}>
          Itens comprados <span> {purchasedItems}</span>
        </div>

        <ul className={styles.itemList}>
          {items.length > 0 ? (
            items.map((item) => (
              <ListItem
                key={item.id}
                item={item}
                onDelete={handleDelete}
                onCheckedChange={handleCheckedChange}
              ></ListItem>
            ))
          ) : isLoading ? (
            <p></p>
          ) : (
            <p>Não há nenhum item na Lista </p>
          )}
        </ul>
      </main>
    </div>
  );
}

export default App;

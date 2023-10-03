import styles from "./App.module.css";

import bgImage from "./assets/bg-image.jpg";
import ShoppingForm from "./components/ShoppingForm";
import ListItem from "./components/ListItem.jsx";

let items = [
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
  return (
    <div>
      <header className={styles.header}>
        <img height={185} src={bgImage} alt="" role="presentation" />
      </header>

      <main className={styles.main}>
        <h1>Lista de Compras</h1>

        <ShoppingForm />

        <ul className={styles.itemList}>
          {items.map((item) => (
            <ListItem key={item.id} item={item}></ListItem>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;

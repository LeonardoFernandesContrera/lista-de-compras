import styles from "./App.module.css";

import bgImage from "./assets/bg-image.jpg";
import ShoppingForm from "./components/ShoppingForm";

function App() {
  return (
    <div>
      <header className={styles.header}>
        <img height={185} src={bgImage} alt="" role="presentation" />
      </header>

      <main className={styles.main}>
        <h1>Lista de Compras</h1>

        <ShoppingForm />
      </main>
    </div>
  );
}

export default App;

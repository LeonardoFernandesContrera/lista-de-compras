import { Plus } from "lucide-react";
import styles from "./ShoppingForm.module.css";
import { useState } from "react";

/**
 * console.log(styles)
 * {
 *  shoppingForm: '_shoppingForm-dhs123sdfa',
 *  formControl:
 * }
 */

function ShoppingForm({ onSubmit }) {
  const [name, setname] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("unidade");
  const [category, setCategory] = useState("padaria");

  function handleSubmit(event) {
    event.preventDefault();

    const formData = {
      name,
      quantity,
      unit,
      category,
    };

    onSubmit(formData);
  }

  return (
    <form
      onSubmit={(event) => handleSubmit(event)}
      className={styles.shoppingForm}
    >
      <div className={styles.formControl}>
        <label className={styles.label} htmlFor="name">
          Item
        </label>
        <input
          className={styles.input}
          type="text"
          id="name"
          value={name}
          onChange={(event) => setname(event.target.value)}
          minLength={2}
          required
        />
      </div>

      <div className={styles.formControl}>
        <label className={styles.label} htmlFor="quantity">
          Quantidade
        </label>
        <div className={styles.quantityInput}>
          <input
            className={styles.input}
            type="number"
            id="quantity"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
            required
            min={1}
          />
          <select
            id="unit"
            className={styles.select}
            value={unit}
            onChange={(event) => setUnit(event.target.value)}
          >
            <option value="unidade">Un.</option>
            <option value="litro">L</option>
            <option value="kilograma">Kg</option>
          </select>
        </div>
      </div>

      <div className={styles.formControl}>
        <label className={styles.label} htmlFor="category">
          Categoria
        </label>
        <select
          className={styles.select}
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="padaria">Padaria</option>
          <option value="legume">legume</option>
          <option value="carne">Carne</option>
          <option value="fruta">Fruta</option>
          <option value="bebida">Bebida</option>
        </select>
      </div>

      <button
        type="submit"
        className={styles.submitButton}
        aria-label="Adicionar Item"
      >
        <Plus size={24} />
      </button>
    </form>
  );
}

export default ShoppingForm;

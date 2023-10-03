import { Plus } from "lucide-react";
import styles from "./ShoppingForm.module.css";

/**
 * console.log(styles)
 * {
 *  shoppingForm: '_shoppingForm-dhs123sdfa',
 *  formControl:
 * }
 */

function ShoppingForm() {
  return (
    <form className={styles.shoppingForm}>
      <div className={styles.formControl}>
        <label className={styles.label} htmlFor="name">
          Item
        </label>
        <input className={styles.input} type="text" id="name" />
      </div>

      <div className={styles.formControl}>
        <label className={styles.label} htmlFor="quantity">
          Quantidade
        </label>
        <div className={styles.quantityInput}>
          <input className={styles.input} type="number" id="quantity" />
          <select id="unit" className={styles.select}>
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
        <select className={styles.select} id="category">
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

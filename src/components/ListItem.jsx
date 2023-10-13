import { Trash2, CakeSlice, Carrot, Apple, Milk, Beef } from "lucide-react";
import styles from "./ListItem.module.css";

function ListItem({ item, onDelete, onCheckedChange }) {
  function handleChange(event) {
    onCheckedChange(item.id, event.target.checked);
  }

  return (
    <li className={styles.item}>
      <input type="checkbox" checked={item.purchased} onChange={handleChange} />

      <div>
        <p>{item.name}</p>
        <span>
          {item.quantity} {item.quantity > 1 ? item.unit + "s" : item.unit}
        </span>
      </div>

      <CategoryTag category={item.category}></CategoryTag>

      <button onClick={() => onDelete(item.id)}>
        <Trash2 size={16}></Trash2>
      </button>
    </li>
  );
}

const icons = {
  padaria: CakeSlice,
  legume: Carrot,
  fruta: Apple,
  bebida: Milk,
  carne: Beef,
};

function CategoryTag({ category }) {
  const Icon = icons[category];

  return (
    <span className={styles.category} data-category={category}>
      <Icon size={16}></Icon>
      {category}
    </span>
  );
}

export default ListItem;

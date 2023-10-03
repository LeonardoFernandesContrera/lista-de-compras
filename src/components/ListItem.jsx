import { Trash2 } from "lucide-react";
import styles from "./ListItem.module.css";

function ListItem({ item }) {
  return (
    <li className={styles.item}>
      <input type="checkbox" defaultChecked={item.purchased} />

      <div>
        <p>{item.name}</p>
        <span>
          {item.quantity} {item.unity}
        </span>
      </div>

      <span>{item.category}</span>

      <button>
        <Trash2 size={16}></Trash2>
      </button>
    </li>
  );
}

export default ListItem;


import { ItemCount } from "../ItemCount";
import style from "./style.module.css";

export function ItemListContainer({greeting}) {
    return (
        <>
            <div className={style.container}>{greeting}</div>
            <div><ItemCount /></div>
        </>
    );
}
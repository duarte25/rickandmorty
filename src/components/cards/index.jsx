import Link from "next/link"
import Styles from "./styles.module.css"

export default function Card({ id, name, image, status }) {

    return (

        <div className={Styles.card}>
            <Link href={`/character/${id}`}>
                <img src={image} className={Styles.imagem} />
                <h1 className={Styles.cardTitulo}>Name: {name}</h1>
                <p className={Styles.status}>Status: {status}</p>
            </Link>
        </div>
    )
}
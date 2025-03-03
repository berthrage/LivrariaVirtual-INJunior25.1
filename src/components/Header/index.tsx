import { Link } from 'react-router-dom'
import styles from './styles.module.css'

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <h1 className={styles.title}>
                    MENU
                </h1>
                <ul className={styles.list}>
                    <Link to={"/"}><li>Home</li></Link>
                    <Link to={"/pokemon"}><li>Pokemon</li></Link>
                    <Link to={"/contact"}><li>Contact Us</li></Link>
                    <Link to={"/forms-test"}><li>Forms Test</li></Link>
                </ul>
            </header>
            <hr></hr>
        </>
    )
}
import { useParams } from 'react-router-dom';
import styles from './styles.module.css';

export default function GenrePage() {
    const { genero } = useParams<string>();

    return(
        <>
            <section className={styles.genrePageSection}>
                <h1>{genero}</h1>
            </section>
        </>
    )
}
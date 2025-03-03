import styles from './styles.module.css'
import banner from '../../assets/images/banner.png'

export default function Home() {
    return(
        <> 
            <section>
                <img className={styles.banner} src={banner} alt="Banner"></img>
            </section>
        </>
    )
}
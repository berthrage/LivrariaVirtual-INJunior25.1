import styles from './styles.module.css'
import cozyImg from '../../assets/images/cozy-bookstand.jpg'

export default function Login() {
    return(
        <> 
            <section className={styles.cozySection}>
                <img src={cozyImg} alt="Cozy Bookstand"></img>
            </section>
            <section className={styles.loginSection}>
                <form>
                    <input type="text" placeholder="Digite aqui seu e-mail"></input>
                    <input type="password" placeholder="Digite aqui sua senha"></input>
                    <button type="button">Entrar</button>
                </form>
            </section>
        </>
    )
}
import styles from './styles.module.css'
import cozyImg from '../../assets/images/cozy-bookstand.jpg'
import logoLarge from '../../assets/images/Logo-large.png'
import PrimaryButton from '../../components/PrimaryButton'
import { Link } from 'react-router-dom'

export default function Login() {
    return(
        <> 
            <section className={styles.mainSection}>
                <section className={styles.cozySection}>
                    <img src={cozyImg} alt="Cozy Bookstand"></img>
                </section>
                <section className={styles.loginSection}>
                    <div className={styles.logoLarge}>
                        <Link to={'/'}><img src={logoLarge}></img></Link>
                    </div>
                    <div className={styles.welcomeText}>
                        <p>Bem vindo(a)!</p>
                        <h1>Entre na sua conta</h1>
                    </div>
                    <form className={styles.loginForm}>
                        <label>E-mail</label>
                        <input type="text" placeholder="Digite aqui seu e-mail"></input>
                        <label>Senha</label>
                        <input type="password" placeholder="Digite aqui sua senha"></input>
                    </form>
                    <div className={styles.buttonsSection}> 
                        <PrimaryButton type="button">Entrar</PrimaryButton>
                        <PrimaryButton id={styles.signInButton}type="button">Cadastre-se</PrimaryButton>
                    </div>
                </section>
            </section>
        </>
    )
}
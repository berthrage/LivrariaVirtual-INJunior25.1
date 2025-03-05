import styles from './styles.module.css'
import cozyImg from '../../assets/images/cozy-bookstand.jpg'
import logoLarge from '../../assets/images/Logo-large.png';
import logoLargeHovered from '../../assets/images/Logo-large-hovered.png';
import PrimaryButton from '../../components/PrimaryButton'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import ImageTransition from '../../components/ImageTransition';

const userSchema = z.object({
    email: z.string().nonempty('E-mail deve ser inserido.').refine(
        value => z.string().email().safeParse(value).success, {
            message: `O e-mail não é válido.`,
        }),

    password: z.string().nonempty('Senha deve ser inserida.').min(6, 'Senha deve haver pelo menos 6 caracteres.'),
});

type User = z.infer<typeof userSchema>;

export default function Login() {
    const { register, handleSubmit, formState: {errors, isSubmitting}, setError } = useForm<User>({
        resolver: zodResolver(userSchema),
    });

    const navigate = useNavigate();

    async function EnterUser(data: any) {
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log(data);
            navigate('/');
        } catch {
            setError('root', {
                message: 'Erro entrando em conta.'
            })

        }
    }

    return(
        <> 
            <section className={styles.mainSection}>
                <section className={styles.cozySection}>
                    <img src={cozyImg} alt="Cozy Bookstand"></img>
                </section>

                <section className={styles.loginSection}>
                    
                    <ImageTransition
                        linkTo='/'
                        firstImg={logoLarge}
                        secondImg={logoLargeHovered}
                        width={120} height={78}
                        firstAlt='logoLarge' secondAlt='logoLargeHovered'
                        id={styles.logoLarge}>
                    </ImageTransition>
                    
                    <div className={styles.welcomeText}>
                        <p>Bem vindo(a)!</p>
                        <h1>Entre na sua conta</h1>
                    </div>

                    <form className={styles.loginForm}>
                        <label>E-mail</label>
                        <input 
                            className={errors.email ? styles.inputError : styles.input}
                            type="text" 
                            placeholder="Digite aqui seu e-mail"
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault(); 
                                    handleSubmit(EnterUser)();
                                }
                            }}
                            {...register('email')}>
                        </input>
                        {errors.email && <span className={styles.error}>{errors.email.message}</span>}


                        <label>Senha</label>
                        <input 
                            className={errors.password ? styles.inputError : styles.input}
                            type="password" 
                            placeholder="Digite aqui sua senha"
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault(); 
                                    handleSubmit(EnterUser)();
                                }
                            }}
                            {...register('password')}>
                        </input>
                        {errors.password && <span className={styles.error}>{errors.password.message}</span>}

                    </form>
                    <div className={styles.buttonsSection}> 
                        <PrimaryButton 
                            disabled={isSubmitting} 
                            type="button"
                            onClick={() => handleSubmit(EnterUser)()}>
                                {isSubmitting ? 'Carregando...' : 'Entrar'}
                        </PrimaryButton>
                        <PrimaryButton 
                            id={styles.signInButton}
                            type="button">
                                Cadastre-se
                        </PrimaryButton>
                    </div>

                </section>
            </section>
        </>
    )
}
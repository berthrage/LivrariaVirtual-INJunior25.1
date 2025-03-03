import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import logoIcon from '../../assets/icons/Logo.png'
import profileIcon from '../../assets/icons/Profile.png'
import cartIcon from '../../assets/icons/Cart.png'

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <Link to={"/"}><img src={logoIcon}></img></Link>
                </div>

                <div className={styles.menuSection}>
                    <div className={styles.profileIcon}>
                    <Link to={'/login'}><img src={profileIcon}></img></Link>
                    </div>
                    <div className={styles.cartIcon}>
                        <img src={cartIcon}></img>
                    </div>
                </div>
            </header>
        </>
    )
}
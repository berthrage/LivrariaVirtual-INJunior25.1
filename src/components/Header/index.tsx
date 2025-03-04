import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import profileIcon from '../../assets/icons/Profile.png'
import profileIconHovered from '../../assets/icons/Profile-hovered.png'
import cartIcon from '../../assets/icons/Cart.png'
import cartIconHovered from '../../assets/icons/Cart-hovered.png'
import logo from '../../assets/icons/Logo.png'
import logoHovered from '../../assets/icons/Logo-hovered.svg'

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <Link to={"/"}>
                        <img src={logo} className={styles.logoStatic}></img>
                        <img src={logoHovered} className={styles.logoHovered}></img>
                    </Link>
                </div>
                

                <div className={styles.menuSection}>
                    <div className={styles.profileIcon}>
                        <Link to={'/login'}>
                            <img src={profileIcon} className={styles.profileIconStatic}></img>
                            <img src={profileIconHovered} className={styles.profileIconHovered}></img>
                        </Link>
                    </div>
                    
                    <div className={styles.cartIcon}>
                        <Link to={'/'}>
                            <img src={cartIcon} className={styles.cartIconStatic}></img>
                            <img src={cartIconHovered} className={styles.cartIconHovered}></img>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}
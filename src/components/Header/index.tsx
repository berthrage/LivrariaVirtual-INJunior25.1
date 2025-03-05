import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import profileIcon from '../../assets/icons/Profile.png'
import profileIconHovered from '../../assets/icons/Profile-hovered.png'
import cartIcon from '../../assets/icons/Cart.png'
import cartIconHovered from '../../assets/icons/Cart-hovered.png'
import logo from '../../assets/icons/Logo.png'
import logoHovered from '../../assets/icons/Logo-hovered.svg'
import useCartStore from '../../stores/CartStore'
import ImageTransition from '../ImageTransition'

export default function Header() {
    const { cart } = useCartStore();

    return (
        <>
            <header className={styles.header}>
                <ImageTransition
                    linkTo='/'
                    firstImg={logo}
                    secondImg={logoHovered}
                    width={60} height={39}
                    firstAlt='logo' secondAlt='logoHovered'>
                </ImageTransition>
                

                <div className={styles.menuSection}>
                    <ImageTransition
                        linkTo='/login'
                        firstImg={profileIcon}
                        secondImg={profileIconHovered}
                        width={50} height={50}
                        firstAlt='profileIcon' secondAlt='profileIconHovered'>
                    </ImageTransition>

                    <Link to={'/'}>
                        <div className={styles.cartIconBox}>
                            <div className={styles.cartIcon}>
                                <img src={cartIcon} className={styles.cartIconStatic}></img>
                                <img src={cartIconHovered} className={styles.cartIconHovered}></img>
                            </div>
                            {cart.length > 0 ? (
                                <>
                                    <div className={styles.cartQttIcon}>
                                        <p>{cart.length}</p>
                                    </div>
                                </>
                            ) : ''}
                            
                        </div>
                    </Link>

                </div>
            </header>
        </>
    )
}
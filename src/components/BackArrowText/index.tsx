import styles from './styles.module.css';
import arrow from '../../assets/icons/Arrow.png';
import arrowHovered from '../../assets/icons/Arrow-hovered.png';
import { Link } from 'react-router-dom';

interface BackArrowTextProps {
    text: string;
    linkTo?: string;
}

export default function BackArrowText(props: BackArrowTextProps) {
    return(
        <>
            <Link to={props.linkTo ? props.linkTo : '/'}>
                <div className={styles.section}>
                    <div className={styles.arrow}>
                        <img src={arrow} className={styles.arrowStatic}></img>
                        <img src={arrowHovered} className={styles.arrowHovered}></img>
                    </div>
                    <h1>{props.text}</h1>
                </div>
            </Link>
        </>
    )
}
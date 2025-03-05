import { Link } from 'react-router-dom';
import styles from './styles.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    linkTo?: string;
}

export default function PrimaryButton(props: ButtonProps) {
    return (
        <>  
            {props.linkTo ? 
                <Link to={props.linkTo? props.linkTo : ''}>
                    <div className={styles.buttonContainer}>
                        <button {...props} className={`${styles.button} ${props.className}`}>
                            {props.children}
                        </button>
                    </div>
                </Link> : 
                <div className={styles.buttonContainer}>
                    <button {...props} className={`${styles.button} ${props.className}`}>
                        {props.children}
                    </button>
                </div>}
        </>
    )
}
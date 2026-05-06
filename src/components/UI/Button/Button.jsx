import styles from './Button.module.css';

function Button({ children, variant = 'accent', onClick, type = 'button', fullWidth = false }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${styles.btn} ${styles[variant]} ${fullWidth ? styles.fullWidth : '' }`}
            >
                {children}
        </button>
    );
}

export default Button;
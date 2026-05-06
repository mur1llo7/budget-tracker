import { getCategoryMeta } from '../../../utils/categories';
import styles from './CategoryIcon.module.css';

function CategoryIcon({ category, size = 'md' }) {
    const { icon, background } = getCategoryMeta(category);

    return (
        <div
            className={`${styles.icon} ${styles[size]}`}
            style={{ background }} 
        >
            <span>{icon}</span>
        </div>
    );
}

export default CategoryIcon;
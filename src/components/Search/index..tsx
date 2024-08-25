
import { FiSearch } from 'react-icons/fi';
import styles from './styles.module.css';  

export function Search() {
    return (
        <div className={styles.buttonContainer}>
            <input 
              type="search" 
              name="search-movies" 
              id="search-movies" 
              className={styles.input}
            />

            <button type="submit" className={styles.button}>
              <FiSearch size={20} />
            </button>
        </div>
    )
}
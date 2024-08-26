
import { FiSearch } from 'react-icons/fi';
import styles from './styles.module.css';  
import { ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/router';

export function Search() {
  const [query, setQuery] = useState('');
  const router = useRouter();
  
  const handleSearch = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (query) {
      console.log(`filme novo: ${query}`);
      router.push(`/movies/${query}`);
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };


  return (
      <div className={styles.buttonContainer}>
          <input 
            type="search" 
            name="search-movies" 
            id="search-movies" 
            className={styles.input}
            value={query}
            onChange={handleInputChange}
          />

          <button 
            type="submit" 
            className={styles.button}
            onClick={handleSearch}
          >
            <FiSearch size={20} />
          </button>
      </div>
  )
}
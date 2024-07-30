"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import styles from "./SearchBox.module.css";

interface SearchBoxProps {
  onSearch: (query: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSearch(query);
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchBox}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        className={styles.searchInput}
      />
      <button type="submit" className={styles.searchButton}>
        Search
      </button>
    </form>
  );
};

export default SearchBox;

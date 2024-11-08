"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import styles from "./SearchBox.module.css";
import { CiSearch, CiLocationOn } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";

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
      <span>
        <CiSearch />
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search..."
          className={styles.searchInput}
        />
        <IoIosClose />
      </span>
      <span>
        <CiLocationOn />
        <input
          type="text"
          className={styles.searchInput}
          placeholder="All Locations"
        />
      </span>
      <button type="submit" className={styles.searchButton}>
        Search
      </button>
    </form>
  );
};

export default SearchBox;

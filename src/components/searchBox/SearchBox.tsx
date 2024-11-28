"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import styles from "./SearchBox.module.css";
import { CiSearch, CiLocationOn } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import Button from "../button/Button";

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
    if (query.trim() !== "") {
      onSearch(query); // Trigger the search with the query
      setQuery("");
    }
  };

  const clearInput = () => {
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchBox}>
      <span className={styles.searchInputs}>
        <CiSearch className={styles.icons} onClick={handleSubmit} />
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search..."
          className={styles.inputField}
        />
        {query && (
          <IoIosClose className={styles.closeIcone} onClick={clearInput} />
        )}
      </span>
      <span className={styles.searchInputs}>
        <CiLocationOn className={styles.icons} />
        <input
          type="text"
          className={styles.inputField}
          placeholder="All Locations"
        />
      </span>
      <Button
        text="Search"
        size="small"
        type="primary"
        buttonType="submit"
        className={styles.searchButton}
      />
    </form>
  );
};

export default SearchBox;

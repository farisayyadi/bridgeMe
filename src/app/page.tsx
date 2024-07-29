"use client";

import SearchBox from "@/components/searchBox/SearchBox";
import homeStyles from "./home.module.css";
import { useState } from "react";
import styles from "@/components/searchBox/SearchBox.module.css";

const Home: React.FC = () => {
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const handleSearch = async (query: string) => {
    // Perform the search (e.g., call an API)
    // Here we mock the search results for demonstration purposes
    const results = await mockSearch(query);
    setSearchResults(results);
  };

  // Mock search function
  const mockSearch = async (query: string): Promise<string[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([`Result for "${query}"`]);
      }, 500);
    });
  };

  return (
    <>
      <div className={homeStyles.container}>
        <div className={homeStyles.textContainer}>
          <h1>Let's be each other's Bridge</h1>
          <p>Empowering Connections, Inspiring Growth</p>
          <div className={homeStyles.buttons}>
            <button className={homeStyles.button}>learn more</button>
            <button className={homeStyles.button}>contact</button>
          </div>
        </div>
      </div>
      <SearchBox onSearch={handleSearch} />
      <div className={styles.results}>
        {searchResults.map((result, index) => (
          <div key={index} className={styles.results}>
            {result}
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;

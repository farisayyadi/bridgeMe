"use client";

import React from "react";
import SearchBox from "@/components/searchBox/SearchBox";
import homeStyles from "./home.module.css";
import { useState, useEffect } from "react";
import styles from "@/components/searchBox/SearchBox.module.css";
import Button from "@/components/button/Button";

const Home: React.FC = () => {
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!query.trim()) {
        // If query is empty, clear the results and return early
        setSearchResults([]);
        return;
      }
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/independent?status=true"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        // Filter the results based on the query
        const filteredData = data.filter((country: any) =>
          country.name.common.toLowerCase().includes(query.toLowerCase())
        );

        // Format the results based on the filtered data
        const results = filteredData.map((country: any) => {
          const name = country.name.common;
          const languages = country.languages
            ? Object.values(country.languages).join(", ")
            : "No languages available";
          const capital = country.capital
            ? country.capital.join(", ")
            : "No capital available";
          return `Country: ${name}, Capital: ${capital}, Languages: ${languages}`;
        });

        setSearchResults(results);
      } catch (error) {
        console.error("Failed to fetch search results:", error);
        setSearchResults([`Error fetching results for "${query}"`]);
      }
    };

    if (query) {
      fetchSearchResults();
    }
  }, [query]);

  const handleSearch = (query: string) => {
    setQuery(query);
  };

  return (
    <>
      <div className={homeStyles.container}>
        <div className={homeStyles.textContainer}>
          <h1>Let's be each other's Bridge</h1>
          <p>Empowering Connections, Inspiring Growth</p>
          <SearchBox onSearch={handleSearch} />
          <div className={homeStyles.buttons}>
            <Button
              text="Find Service"
              type="primary"
              size="big"
              route="/find-service"
            />
            <Button
              text="Become a Provider"
              type="primary"
              size="big"
              route="/become-a-provider"
            />
          </div>
        </div>
      </div>

      <div className={styles.results}>
        {searchResults.map((result, index) => (
          <div key={index} className={styles.result}>
            {result}
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;

"use client";

import React, { useState } from "react";
import SearchBox from "@/components/searchBox/SearchBox";
import homeStyles from "./home.module.css";
import styles from "@/components/searchBox/SearchBox.module.css";
import Button from "@/components/button/Button";
import { filterServices } from "@/utils/serviceSearch";
import { Service } from "@/app/services/page";
import Image from "next/image";

const Home: React.FC = () => {
  const [results, setResults] = useState<
    (Service & { ProviderName: string })[]
  >([]);

  const handleSearch = (query: string) => {
    const filtered = filterServices(query);
    setResults(filtered);
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
              route="/services"
            />
            <Button
              text="Become a Provider"
              type="primary"
              size="big"
              route="/providers"
            />
          </div>
        </div>
      </div>
      <div className={styles.results}>
        {results.map((service) => (
          <div key={service.ServiceID} className={styles.resultCard}>
            <div className={styles.imgWrapper}>
              <Image
                src={`/images/${service.Image}`} // Assuming images are in the "public/images" directory
                alt={service.ServiceName}
                fill
                className={styles.img}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.serviceName}>{service.ServiceName}</h3>
              <p className={styles.description}>{service.Description}</p>
              <p className={styles.providerName}>
                Provider: <strong>{service.ProviderName}</strong>
              </p>
              <p className={styles.price}>
                Price: <strong>${service.Price}</strong>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;

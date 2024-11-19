import React from "react";
import { providersData } from "@/dummyData/providers";
import styles from "./providers.module.css";

export interface Provider {
  ProviderID: number;
  ProviderName: string;
  ContactName: string;
  Email: string;
  Phone: string;
  Address: string;
  Rating: number;
  JoinDate: string;
}

const Providers = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Our Providers</h1>
      <div className={styles.providersGrid}>
        {providersData.map((provider) => (
          <div key={provider.ProviderID} className={styles.providerCard}>
            <h3 className={styles.providerName}>{provider.ProviderName}</h3>
            <p className={styles.contact}>
              <strong>Contact:</strong> {provider.ContactName}
            </p>
            <p className={styles.details}>
              <strong>Email:</strong> {provider.Email} | <strong>Phone:</strong>{" "}
              {provider.Phone}
            </p>
            <p className={styles.address}>
              <strong>Address:</strong> {provider.Address}
            </p>
            <p className={styles.rating}>
              <strong>Rating:</strong> {provider.Rating} ★
            </p>
            <p className={styles.joinDate}>
              <strong>Joined:</strong> {provider.JoinDate}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Providers;

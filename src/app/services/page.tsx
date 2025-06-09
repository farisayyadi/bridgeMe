import React from "react";
import { servicesData } from "@/dummyData/services";
import { providersData } from "@/dummyData/providers";
import Image from "next/image";
import styles from "./services.module.css";

export interface Service {
  ServiceID: number;
  ServiceName: string;
  Description: string;
  Category: string;
  Price: number;
  Duration: number;
  ProviderID: number;
  Image: string;
}

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

const getMergedData = () => {
  return servicesData.map((service) => {
    const provider = providersData.find(
      (p) => p.ProviderID === service.ProviderID
    );
    return {
      ...service,
      ProviderName: provider?.ProviderName || "Unknown Provider",
      ContactName: provider?.ContactName || "Unknown Contact",
    };
  });
};

const Services = () => {
  const mergedData = getMergedData();

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Discover Amazing Services</h1>
      <div className={styles.servicesGrid}>
        {mergedData.map((service) => (
          <div key={service.ServiceID} className={styles.serviceCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={`/images/${service.Image}`}
                alt={service.ServiceName}
                fill
                className={styles.img}
              />
              <div className={styles.categoryBadge}>
                {service.Category}
              </div>
            </div>

            <h3 className={styles.serviceName}>{service.ServiceName}</h3>
            <p className={styles.description}>{service.Description}</p>

            <div className={styles.provider}>
              <strong>Provider:</strong> {service.ProviderName}
              {service.ContactName && ` (${service.ContactName})`}
            </div>

            <div className={styles.details}>
              <div>
                <strong>Duration:</strong> {service.Duration} mins
              </div>
              <div className={styles.priceTag}>
                ${service.Price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

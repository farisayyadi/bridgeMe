"use client";

import React, { useState } from "react";
import SearchBox from "@/components/searchBox/SearchBox";
import homeStyles from "./home.module.css";
import Button from "@/components/button/Button";
import { filterServices } from "@/utils/serviceSearch";
import { Service } from "@/app/services/page";
import Image from "next/image";
import {
  Users,
  Star,
  TrendingUp,
  ArrowRight,
  Search,
  Rocket,
  HandHeart,
  Shield,
  Zap,
  Award,
  Globe,
  Heart
} from "lucide-react";

const Home: React.FC = () => {
  const [results, setResults] = useState<
    (Service & { ProviderName: string })[]
  >([]);

  const handleSearch = (query: string) => {
    const filtered = filterServices(query);
    setResults(filtered);
  };

  const stats = [
    { icon: Users, label: "Happy Customers", value: "50,000+" },
    { icon: Star, label: "Customer Rating", value: "4.9/5" },
    { icon: TrendingUp, label: "Premium Services", value: "1,200+" },
    { icon: Award, label: "Success Rate", value: "99.9%" },
  ];

  const features = [
    {
      title: "Discover Amazing Services",
      description: "Find verified local service providers with premium quality and trusted reviews.",
      icon: <Search size={32} />,
    },
    {
      title: "Launch Your Business",
      description: "Join our premium platform and grow your business with powerful tools and insights.",
      icon: <Rocket size={32} />,
    },
    {
      title: "Build Lasting Connections",
      description: "Create meaningful relationships that drive success and inspire community growth.",
      icon: <HandHeart size={32} />,
    },
    {
      title: "Secure & Trusted",
      description: "Advanced security measures and verified profiles ensure safe transactions.",
      icon: <Shield size={32} />,
    },
    {
      title: "Lightning Fast",
      description: "Instant matching and real-time communication for seamless service delivery.",
      icon: <Zap size={32} />,
    },
    {
      title: "Global Reach",
      description: "Connect with service providers worldwide and expand your business horizons.",
      icon: <Globe size={32} />,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className={homeStyles.hero}>
        <div className={homeStyles.heroContent}>
          <div className={homeStyles.heroText}>
            <h1 className={homeStyles.heroTitle}>
              Let's be each other's <span className={homeStyles.highlight}>Bridge</span>
            </h1>
            <p className={homeStyles.heroSubtitle}>
              Empowering Connections, Inspiring Growth. Connect with local service providers
              and discover opportunities in your community.
            </p>

            <div className={homeStyles.searchSection}>
              <SearchBox onSearch={handleSearch} />
            </div>

            <div className={homeStyles.heroButtons}>
              <Button
                text="Find Services"
                type="primary"
                size="big"
                route="/services"
              />
              <Button
                text="Become a Provider"
                type="secondary"
                size="big"
                route="/providers"
              />
            </div>
          </div>

          <div className={homeStyles.heroImage}>
            <div className={homeStyles.imageWrapper}>
              <div className={homeStyles.floatingCard}>
                <Heart className={homeStyles.cardIcon} />
                <span>Trusted by 50K+ Users</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={homeStyles.statsSection}>
        <div className={homeStyles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={homeStyles.statCard}>
              <stat.icon className={homeStyles.statIcon} />
              <div className={homeStyles.statValue}>{stat.value}</div>
              <div className={homeStyles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className={homeStyles.featuresSection}>
        <div className={homeStyles.sectionHeader}>
          <h2>Why Choose BridgeMe?</h2>
          <p>Discover the benefits of joining our growing community</p>
        </div>

        <div className={homeStyles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={homeStyles.featureCard}>
              <div className={homeStyles.featureIcon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <div className={homeStyles.featureLink}>
                Learn more <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Search Results */}
      {results.length > 0 && (
        <section className={homeStyles.resultsSection}>
          <h2>Search Results</h2>
          <div className={homeStyles.resultsGrid}>
            {results.map((service) => (
              <div key={service.ServiceID} className={homeStyles.resultCard}>
                <div className={homeStyles.resultImageWrapper}>
                  <Image
                    src={`/images/${service.Image}`}
                    alt={service.ServiceName}
                    fill
                    className={homeStyles.resultImage}
                  />
                </div>
                <div className={homeStyles.resultContent}>
                  <h3>{service.ServiceName}</h3>
                  <p className={homeStyles.resultDescription}>{service.Description}</p>
                  <div className={homeStyles.resultMeta}>
                    <span className={homeStyles.provider}>{service.ProviderName}</span>
                    <span className={homeStyles.price}>${service.Price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Home;

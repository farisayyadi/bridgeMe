"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import the map component to avoid SSR issues
const MapComponent = dynamic(() => import("../../components/MapComponent"), {
  ssr: false,
  loading: () => (
    <div style={{
      height: "50vh",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, var(--light-200) 0%, var(--accent-200) 100%)",
      borderRadius: "var(--radius-xl)"
    }}>
      <p>Loading map...</p>
    </div>
  ),
});

const Map = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div style={{
        height: "50vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, var(--light-200) 0%, var(--accent-200) 100%)",
        borderRadius: "var(--radius-xl)"
      }}>
        <p>Loading map...</p>
      </div>
    );
  }

  return <MapComponent />;
};

export default Map;

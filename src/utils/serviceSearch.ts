import { servicesData } from "@/dummyData/services";
import { providersData } from "@/dummyData/providers";
import { Service } from "@/app/services/page";

export const filterServices = (
  query: string
): (Service & { ProviderName: string })[] => {
  if (!query) return [];

  // Convert query to lowercase for case-insensitive search
  const lowerCaseQuery = query.toLowerCase();

  // Create a map for ProviderID -> ProviderName
  const providerMap = providersData.reduce((map, provider) => {
    map[provider.ProviderID] = provider.ProviderName;
    return map;
  }, {} as Record<number, string>);

  // Filter services based on ServiceName or ProviderName
  return servicesData
    .map((service) => ({
      ...service,
      ProviderName: providerMap[service.ProviderID] || "Unknown Provider", // Add ProviderName to the service
    }))
    .filter(
      (service) =>
        service.ServiceName.toLowerCase().includes(lowerCaseQuery) ||
        service.ProviderName.toLowerCase().includes(lowerCaseQuery)
    );
};

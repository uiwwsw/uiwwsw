import { PortfolioStorageService } from "@/application/ports";
import { useStore } from "./store";
export function usePortfolio(): PortfolioStorageService {
  return useStore() as PortfolioStorageService;
}

import { PortfolioStorageService } from "@/application/ports";
import { useStore } from "./store";
export function usePortfolioService(): PortfolioStorageService {
  return useStore() as PortfolioStorageService;
}

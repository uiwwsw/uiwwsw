import { Essay } from '@/domain/essay';
import { Portfolio } from '@/domain/portfolio';
import { Weather } from '@/domain/weather';

export interface ApiService {
	fetchEssays(): Promise<Essay[]>;
	fetchPortfolios(): Promise<Portfolio[]>;
	fetchWeather(): Promise<Weather>;
}

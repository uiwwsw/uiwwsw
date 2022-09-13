import { Essay } from '@/domain/essay';
import { Portfolio } from '@/domain/portfolio';
import { Weather } from '@/domain/weather';

export interface ApiService {
	fetchEssays(): Promise<Essay[]>;
	fetchPortfolios(): Promise<Portfolio[]>;
	fetchWeather(): Promise<Weather>;
}

export interface StorageService {
	get<T>(key: string): T;
	set({
		key,
		value,
		time,
	}: {
		key: string;
		value: unknown;
		time?: number;
	}): void;
	remove(key: string): void;
	clear(): void;
}
export interface StoreService {
	get<T>(key: string): T;
	set({
		key,
		value,
		time,
	}: {
		key: string;
		value: unknown;
		time?: number;
	}): void;
	remove(key: string): void;
	clear(): void;
}

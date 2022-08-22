// import { Cart } from "../domain/cart";
// import { Order } from "../domain/order";
// import { GithubRepo, Portfolio } from "../domain/portfolio";
// import { User, UserName } from "../domain/user";

import { KakaoStoryFeed } from "@/domain/essay";
import { GithubRepo, Portfolio } from "@/domain/portfolio";
import { Weather } from "@/domain/weather";

// export interface UserStorageService {
//   user?: User;
//   updateUser(user: User): void;
// }

// export interface CartStorageService {
//   cart: Cart;
//   updateCart(cart: Cart): void;
//   emptyCart(): void;
// }

export interface WeatherService {
  fetchData(): Promise<Weather>;
}
export interface GithubRepoService {
  fetchData(): Promise<GithubRepo[]>;
}
export interface KakaoFeedService {
  fetchData(): Promise<KakaoStoryFeed[]>;
}
export interface PortfolioStorageService {
  portfolio: Portfolio[];
  updatePortfolio(portfolio: Portfolio[]): void;
  // updateOrders(): void;
}
export type StoreService = PortfolioStorageService;
// export interface PortfolioService {
//   getPortfolio(githubs: GithubRepo[]): Promise<Portfolio[]>;
// }

// export interface AuthenticationService {
//   auth(name: UserName, email: Email): Promise<User>;
// }

// export interface NotificationService {
//   notify(message: string): void;
// }

// export interface PaymentService {
//   tryPay(amount: PriceCents): Promise<boolean>;
// }

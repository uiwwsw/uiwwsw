// import { Cart } from "../domain/cart";
// import { Order } from "../domain/order";
// import { GithubRepo, Portfolio } from "../domain/portfolio";
// import { User, UserName } from "../domain/user";

import { GithubRepo, Portfolio } from "@/domain/portfolio";

// export interface UserStorageService {
//   user?: User;
//   updateUser(user: User): void;
// }

// export interface CartStorageService {
//   cart: Cart;
//   updateCart(cart: Cart): void;
//   emptyCart(): void;
// }

export interface PortfolioService {
  getPortfolio(githubs: GithubRepo[]): Promise<Portfolio[]>;
}
export interface StoreService {
  portfolio: Portfolio[];
}
// export interface OrdersStorageService {
//   orders: Order[];
//   updateOrders(orders: Order[]): void;
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
import { IDiscountStrategy } from "./discountStrategy";

class DiscountContext {
  private strategy: IDiscountStrategy;

  constructor(strategy: IDiscountStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: IDiscountStrategy) {
    this.strategy = strategy;
  }

  calculateAmount(amount: number) {
    return this.strategy.calculateAmount(amount);
  }
}



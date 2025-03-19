import { IDiscountStrategy } from "./discountStrategy";
export class PremiumUser implements IDiscountStrategy {
    calculateAmount(amount: number): number {
      return amount * 0.8; // 20% off
    }
  }
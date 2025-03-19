import { IDiscountStrategy } from "./discountStrategy";
export class RegularUser implements IDiscountStrategy {
    calculateAmount(amount: number): number {
      return amount * 0.9; // 10% off
    }
  }
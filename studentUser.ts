import { IDiscountStrategy } from "./discountStrategy";
export class StudentUser implements IDiscountStrategy {
    calculateAmount(amount: number): number {
      return amount * 0.5; // 50% off
    }
  }
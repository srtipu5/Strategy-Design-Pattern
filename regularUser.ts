import { IDiscountStrategy } from "./discountStrategy";
export class RegularUser implements IDiscountStrategy {
    calculateAmount(amount: number): number {
      return amount;
    }
  }
import { IDiscountStrategy } from "./discountStrategy";
export class VipUser implements IDiscountStrategy {
    calculateAmount(amount: number): number {
      return amount * 0.7; // 30% off
    }
  }
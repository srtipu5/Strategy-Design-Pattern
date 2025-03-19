export interface IDiscountStrategy {
    calculateAmount(amount: number): number;
  }
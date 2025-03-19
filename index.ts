import { IDiscountStrategy } from "./discountStrategy";
import { PremiumUser } from "./premiumUser";
import { RegularUser } from "./regularUser";
import { StudentUser } from "./studentUser";
import { UserType } from "./userType";
import { VipUser } from "./vipUser";
function applyDiscount(amount: number, userType: UserType = UserType.Regular): number {
  let discountStrategy: IDiscountStrategy;
  switch (userType) {
    case UserType.Premium:
      discountStrategy = new PremiumUser();
      break;
    case UserType.Student:
      discountStrategy = new StudentUser();
      break;
    case UserType.Vip:
      discountStrategy = new VipUser();
      break;
    default:
      discountStrategy = new RegularUser();
  }

  return discountStrategy.calculateAmount(amount);
}

console.log(applyDiscount(100, UserType.Vip));

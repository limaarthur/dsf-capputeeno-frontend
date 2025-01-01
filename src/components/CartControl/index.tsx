import { ShoppingBag } from "lucide-react";
import { CardControlContainer, CartCount } from "./styles";

export function CartControl() {
  return (
    <CardControlContainer>
      <ShoppingBag className="shopping-bag-icon"/>
      <CartCount>2</CartCount>
    </CardControlContainer>
  )
}
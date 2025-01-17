import { ProductCardContainer } from "./styles";
import img from "../../assets/caneca-ceramica.png"
import { Divider } from "../Divider";

export function ProductCard() {
  return (
    <ProductCardContainer>
      <img src={img} alt="Caneca de cerâmica" />
      <div>
        <h3>Caneca de cerâmica rústica</h3>
        <Divider />
        <p>R$ 40,00</p>
      </div>
      
    </ProductCardContainer>
  )
}
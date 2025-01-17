import { FilterBar } from "./components/FilterBar";
//import { Header } from "./components/Header";
import { ProductsList } from "./components/ProductsList";
//import { CartPage } from "./components/CardPage";
import { Header } from "./components/Header";
//import { Product } from "./components/Product";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      {/*<CartPage />
      <Product />*/}
      <FilterBar />
      <ProductsList />
    </>
  )
}
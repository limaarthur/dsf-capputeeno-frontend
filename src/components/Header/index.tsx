import { CartControl } from "../CartControl"
import { SearchForm } from "../SearchForm"
import { HeaderContainer, Logo } from "./styles"

export function Header() {
  return (
    <HeaderContainer>
      <Logo>Capputteno</Logo>
      <div>
        <SearchForm />
        <CartControl />
      </div>
    </HeaderContainer>
  )
}
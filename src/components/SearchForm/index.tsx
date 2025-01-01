import { SearchFormContainer, SearchFormInputContainer } from "./styles";
import { Search } from 'lucide-react'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <SearchFormInputContainer placeholder="Procurando por algo específico?"/>
        <Search className="search-icon"/>
    </SearchFormContainer>

  )
}
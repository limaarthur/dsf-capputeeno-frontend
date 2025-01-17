import { FilterByTypeContainer, FilterItem, FilterList } from "./styles";

export function FilterByType() {
  return (
    <FilterByTypeContainer>
      <FilterList>
        <FilterItem>Todos os produtos</FilterItem>
        <FilterItem>Camisetas</FilterItem>
        <FilterItem>Canecas</FilterItem>
      </FilterList>
    </FilterByTypeContainer>
  )
}
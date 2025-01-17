import { FilterByPriority } from "../FilterByPriority";
import { FilterByType } from "../FilterByType";
import { FilterBarContainer } from "./styles";

export function FilterBar() {
  return (
    <FilterBarContainer>
      <FilterByType />
      <FilterByPriority />
    </FilterBarContainer>
  )
}
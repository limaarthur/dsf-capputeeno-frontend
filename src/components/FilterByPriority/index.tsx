import { ChevronDown } from "lucide-react";
import { FilterByPriorityContainer } from "./styles";

export function FilterByPriority() {
  return (
    <FilterByPriorityContainer>
      <button>
        Organizar por
        <ChevronDown className="chevron-down-icon"/>
        </button>
    </FilterByPriorityContainer>
  )
}
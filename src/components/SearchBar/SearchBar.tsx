import React from "react";
import { SearchContainer, Input } from "./styles";
import { SearchIcon } from "../Icons";

interface SearchBarProps {
  id?: string;
  onChange?: (arg: string) => void;
  value?: string;
  name?: string;
}
function SearchBar({ onChange, value, name, id }: SearchBarProps) {
  const handleChange = ({ target }: React.BaseSyntheticEvent) => {
    const isFunction = typeof onChange === "function";
    if (isFunction) {
      onChange?.(target.value as string);
    }
  };
  return (
    <SearchContainer>
      <SearchIcon height={20} width={20} />
      <Input
        placeholder="Search"
        name={name}
        id={id}
        type="text"
        value={value}
        onChange={handleChange}
      />
    </SearchContainer>
  );
}

export default SearchBar;

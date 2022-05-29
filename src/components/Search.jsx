import styled from "@emotion/styled";
import { SearchIcon } from "@heroicons/react/outline";
import React from "react";

const Icon = styled(SearchIcon)`
  width: 30px;
  margin-right: 12px;
`;

const SearchInputWrapper = styled("div")`
  display: flex;
`;

const Input = styled("input")`
  padding: 0 12px;
  width: 100%;
`;

function SearchInput() {
  return (
    <SearchInputWrapper>
      <Icon />
      <Input placeholder="Search..." />
    </SearchInputWrapper>
  );
}

export default SearchInput;

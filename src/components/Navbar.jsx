import styled from "@emotion/styled";
import { UserCircleIcon } from "@heroicons/react/outline";
import React from "react";
import SearchInput from "./Search";
import Text from "./typography/Text";

const NavbarWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SubscribeButton = styled("button")`
  margin-left: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 13px;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border: none;
  cursor: pointer;
  transition: background 85ms ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.black};
  }
`;

const Icon = styled(UserCircleIcon)`
  width: 30px;
  margin-right: 12px;
`;

const Flexbox = styled("div")`
  display: flex;
`;

function Navbar() {
  return (
    <NavbarWrapper>
      <Text variant="lg">Hatchways Times</Text>
      <Flexbox>
        <SearchInput />
        <SubscribeButton>
          <Icon />
          <p>Subscribe</p>
        </SubscribeButton>
      </Flexbox>
    </NavbarWrapper>
  );
}

export default Navbar;

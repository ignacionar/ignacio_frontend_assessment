import React from "react";
import styled from "@emotion/styled";

import blogs from "../data/blogs.json";
import Text from "./typography/Text";

const exampleFooter = [
  "Help",
  "Status",
  "Writers",
  "Blog",
  "Careers",
  "Privacy",
  "Terms",
  "About",
];

const Flexbox = styled.div`
  display: flex;
`;

const Sidebar = styled.div`
  ${(props) => {
    const breakpoints = props.theme.getBreakpoints();

    return breakpoints({
      position: "sticky !important",
      top: 0,
      alignSelf: "flex-start",
      height: "auto",
      marginLeft: "120px",
      padding: "20px 0",
      display: ["none", "block"],
    });
  }}
`;

const List = styled(Flexbox)`
  width: 400px;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(230, 230, 230, 1);

  &:last-child {
    padding-top: 24px;
    border-bottom: none;
  }
`;

const Tag = styled.div`
  padding: 8px 12px;
  border-radius: 50px;
  background: #eee;
  text-transform: capitalize;
  cursor: pointer;
`;

function StickySidebar() {
  return (
    <Sidebar>
      <Text variant="body" textTransform="uppercase" fontWeight={700}>
        discover more of what matters to you
      </Text>
      <List>
        {blogs.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </List>
      <List>
        {exampleFooter.map((footer) => (
          <Text variant="body" fontSize={14} cursor="pointer" key={footer}>
            {footer}
          </Text>
        ))}
      </List>
    </Sidebar>
  );
}

export default StickySidebar;

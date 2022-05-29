import React from "react";
import styled from "@emotion/styled";
import BlogList from "./components/BlogList";
import StyledNavbar from "./components/Navbar";
import PageWrapper from "./components/page/PageWrapper";
import StickySidebar from "./components/StickySidebar";

const BlogPageWrapper = styled.div`
  display: flex;
  margin-top: 60px;
`;

function HatchwaysBlog() {
  return (
    <PageWrapper>
      <StyledNavbar />
      <BlogPageWrapper>
        <BlogList />
        <StickySidebar />
      </BlogPageWrapper>
    </PageWrapper>
  );
}

export default HatchwaysBlog;

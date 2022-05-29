import styled from "@emotion/styled";

const PageWrapper = styled.div`
  ${(props) => {
    const breakpoints = props.theme.getBreakpoints();
    return breakpoints({
      maxWidth: props.theme.page.wrapper.maxWidth,
      margin: "0 auto",
      padding: props.theme.page.wrapper.padding,
    });
  }}
`;

export default PageWrapper;

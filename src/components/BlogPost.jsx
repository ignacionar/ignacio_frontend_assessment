import React from "react";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import Text from "./typography/Text";

const Flexbox = styled.div`
  ${(props) => {
    const breakpoints = props.theme.getBreakpoints();

    return breakpoints({
      display: "flex",
      gap: "4px",      
    });
  }}
`;

const BlogWrapper = styled(Flexbox)`
  ${(props) => {
    const breakpoints = props.theme.getBreakpoints();
    const theme = useTheme();

    return breakpoints({
      maxWidth: ["100%", 600],
      alignItems: ["flex-start", "center"],
      margin: "35px 0",
      boxShadow: "5px 5px 5px 2px rgba(0, 0, 0, 0.4)",
      border: `2px solid ${theme.colors.primary}`,
    });
  }}
`;

const BlogMetadata = styled(Flexbox)`
  padding: 8px;
  justify-content: center;
`;

const BlogContent = styled.div`
  ${(props) => {

    const breakpoints = props.theme.getBreakpoints();

    return breakpoints({
      display: "grid",
      rowGap: "12px",
      margin: "0 10px"
    })
  }}

`;

const BlogAvatar = styled(Flexbox)`
  margin-top: 15px;
  display: grid;
  grid-template-rows: 1fr;
`;

const BlogAvatarImage = styled.img`
  ${(props) => {
    
    const theme = useTheme();
    const breakpoints = props.theme.getBreakpoints();

    return breakpoints({
      width: "100px",
      height: "100px",
      backgroundColor: theme.colors.secondary,
      borderRadius: "100%",
      outline: `1px solid ${theme.colors.black}`,
      margin: '0 auto',
    })
  }}
`;

function BlogPost({ author, title, excerpt, readingTimeMinutes }) {
  const theme = useTheme();

  return (
    <BlogWrapper>
      <BlogContent>
        <BlogAvatar>
          <BlogAvatarImage
            src={`https://joeschmoe.io/api/v1/${author}`}
            alt="Author"
            className="authorImage"
          />
          <Text variant="body" textAlign="center" fontSize={`${theme.textStyles.fontSizes.lg[1]}px`} fontWeight={`${theme.textStyles.fontWeight.heading}`}>{author}</Text>
        </BlogAvatar>
        <Text
          variant="md"
          color={theme.colors.black}
          display="-webkit-box"
          WebkitLineClamp="4"
          WebkitBoxOrient="vertical"
          width="100%"
          overflow="hidden"
          textAlign="center"
          fontWeight={theme.textStyles.fontWeight.body}
          backgroundColor={theme.colors.secondary}
          borderRadius={"15px"}
>
          {title}
        </Text>
        <Text variant="body" lineHeight="20px" backgroundColor={theme.colors.tertiary} border={`${theme.colors.tertiary} 5px solid`} color={`${theme.colors.white}`}>
          {excerpt}
        </Text>
        <BlogMetadata>
          <Text variant="body" color={theme.colors.lightGrey} fontSize="13px" >
            &middot;
          </Text>
          <Text variant="body" color={theme.colors.lightGrey} fontSize="13px" >
            {readingTimeMinutes} min read &middot;
          </Text>
        </BlogMetadata>
      </BlogContent>
    </BlogWrapper>
  );
}

BlogPost.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  excerpt: PropTypes.string,
  readingTimeMinutes: PropTypes.number,
};

BlogPost.defaultProps = {
  author: "",
  title: "",
  excerpt: "",
  readingTimeMinutes: 0,
};

export default BlogPost;

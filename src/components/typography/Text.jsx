import React from "react";
import { useTheme } from "@emotion/react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

/**
 * Component that is used for all text content on the webpage using the base typeface scale.
 */
function Text({ variant, children, ...rest }) {
  const theme = useTheme();
  const breakpoints = theme.getBreakpoints();

  const determineVariant = () => {
    let componentVariant;

    switch (variant) {
      case "xl":
      case "lg":
        componentVariant = "h1";
        break;
      case "md":
        componentVariant = "h2";
        break;
      case "body":
      default:
        componentVariant = "p";
        break;
    }

    return componentVariant;
  };

  const textFontSize = () => {
    let fontSize;

    switch (variant) {
      case "xl":
        fontSize = theme.textStyles.fontSizes.xl;
        break;
      case "lg":
        fontSize = theme.textStyles.fontSizes.lg;
        break;
      case "md":
        fontSize = theme.textStyles.fontSizes.md;
        break;
      case "body":
      default:
        fontSize = theme.textStyles.fontSizes.body;
        break;
    }

    return fontSize;
  };

  const textColor = () => {
    let color;

    switch (variant) {
      case "xl":
      case "lg":
      case "md":
        color = theme.textStyles.color.heading;
        break;
      case "body":
      default:
        color = theme.textStyles.color.body;
        break;
    }

    return color;
  };

  const fontWeight = () => {
    let weight;

    switch (variant) {
      case "xl":
      case "lg":
      case "md":
        weight = theme.textStyles.fontWeight.heading;
        break;
      case "body":
      default:
        weight = theme.textStyles.fontWeight.body;
        break;
    }

    return weight;
  };

  const TextComponent = styled(determineVariant())`
    ${breakpoints({
      fontSize: textFontSize(),
      color: textColor(),
      fontWeight: fontWeight(),
      ...rest,
    })}
  `;

  return <TextComponent>{children}</TextComponent>;
}

Text.propTypes = {
  variant: PropTypes.oneOf(["xl", "lg", "md", "body"]),
  children: PropTypes.node,
};

Text.defaultProps = {
  variant: "body",
  children: null,
};

export default Text;

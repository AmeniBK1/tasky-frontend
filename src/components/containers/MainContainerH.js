//!This is the main container where you can adjust the padding and margin of the app
import React from "react";
import styled from "styled-components/native";
import { colors } from "../colors";

const { white } = colors;

const StyledView = styled.View`
  flex: 1;
  background-color: ${white};
  margin-top: 0px; /* add some margin to the top */
`;

const MainContainerH = (props) => {
  return <StyledView {...props}>{props.children}</StyledView>;
};

export default MainContainerH
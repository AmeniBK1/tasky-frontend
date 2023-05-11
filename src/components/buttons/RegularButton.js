//!This is the regular button of all components
import React from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import RegularText from "../texts/RegularText";
const { primary, white } = colors;
const ButtonView = styled.TouchableOpacity`
  deiplay: flex;
  padding: 15px;
  background-color: ${primary};
  width: 100%;
  justify-content: center;
  align-items: center;
  border-raduis: 40px;
  height: 60px;
  margin-bottom: 20px;
`;
const RegularButton = ({ color, ...props }) => {
  return (
    <ButtonView {...props} onPress={props.onPress} style={{ padding: 30, borderRadius: 30 }}>
      <RegularText
        style={[{ 
          color: white,
          fontSize: 18,
          fontWeight: 900,
          ...props?.textStyle 
          }]}
      >
        {props.children}
      </RegularText>
    </ButtonView>
  );
};

export default RegularButton;

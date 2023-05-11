//!IconProfile is the components of Home screen icon in that Screen we can find the icon on top (it gives a good look to the screen ;) )
import React from "react";
import styled from "styled-components/native";
import { ScreenHeight } from "../shared";
import { colors } from "../colors";
import { FontAwesome } from '@expo/vector-icons'; 
const { white, secondary } = colors;
const IconBg = styled.View`
  background-color: ${secondary};
  width: ${ScreenHeight * 0.15}px;
  height: ${ScreenHeight * 0.15}px;
  border-radius: ${ScreenHeight * 0.2};
  justify-content: center;
  align-items: center;
  align-self: center;
`;

const IconProfile = ({ name, color, ...props }) => {
  return (
    <IconBg style={{ ...props.style }}>
      <FontAwesome
        name={name}
        size={ScreenHeight * 0.1}
        color={color ? color : white}
      />
    </IconBg>
  );
};

export default IconProfile;

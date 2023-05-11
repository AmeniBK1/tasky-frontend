import React from "react";
import MainContainer from "../components/containers/MainContainer";
import RegularButton from "../components/buttons/RegularButton";
import Logof from "../components/imageComponent/Logo";
import { View } from "react-native";
import SmallText from "../components/texts/SmallText";
import BigText from "../components/texts/BigText";

const HomePage = ({ navigation }) => {
  const moveTo = (screen, payLoad) => {
    navigation.navigate(screen, { ...payLoad });
  };

  return (
    <MainContainer>
      <Logof
        src={require("./../assets/logof.png")}
        style={{ marginTop: "5%" }}
      />
      <View
        style={{
          height: 220,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
        }}
      >
        <BigText style={{
            color: "#000000",
            borderRadius: 16,
            fontWeight: "600",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          Welcome to Tasky!
        </BigText>
        <SmallText style={{
            color: "#000000",
            backgroundColor: "#FFFFFF",
            borderRadius: 16,
            fontWeight: "600",
            fontSize: 14,
            padding: 50,
            textAlign: "center",
          }}
        >
          Please login to acess your account        
          and enjoy all the services we offer 
        </SmallText>
        <RegularButton onPress={() => moveTo("Login")}>
          Login
        </RegularButton>
        <RegularButton onPress={() => moveTo("Signup")}>
          Sign Up
        </RegularButton>
      </View>
    </MainContainer>
  );
};

export default HomePage;

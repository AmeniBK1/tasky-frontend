import React from "react";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import RootStack from "./src/navigators/RootStack";
import { Provider } from "react-redux";
import store from "./src/_actions/store";
import { setAuth } from "./src/util/setAuth";
import {
  setUser,
  Logout,
} from "./src/_actions/logicHandlerActions/authActions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import Toast from "react-native-toast-message";
import SignUp from "./src/screens/Signup";
import ClientScreen from "./src/screens/ClientScreen";
import Login from "./src/screens/Login";
export default function App() {
  //get jwt item from asynsStorage

  AsyncStorage.getItem("jwt").then((token) => {
    if (token) {
      const decode = jwt_decode(token);
      store.dispatch(setUser(decode));
      setAuth(token);
      const currentDate = Date.now() / 1000;
      console.log(currentDate);
      console.log(decode.exp);
      if (decode.exp < currentDate) {
        store.dispatch(Logout());
      }
    }
  });
  return (
    <Provider store={store}>
      <RootStack/>
      <StatusBar style="auto" />
      <Toast />
    </Provider>
  );
}

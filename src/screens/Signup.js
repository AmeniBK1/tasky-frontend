import React, { useState } from 'react';
import MainContainer from "../components/containers/MainContainer";
import StyledTextInput from "../components/inputs/StyledTextInput";
import { Formik } from "formik";
import RegularButton from "../components/buttons/RegularButton";
import { ActivityIndicator, ScrollView, View,TouchableOpacity,Text, StyleSheet } from "react-native";
import { colors } from "../components/colors";
import PressableText from "../components/texts/PressableText";
import { SignupAction } from "../_actions/logicHandlerActions/authActions";
import { useDispatch } from "react-redux";
import BigText from "../components/texts/BigText";
import * as Yup from "yup";
import api from "../Connect/api";
import axios from 'axios';
import ClientScreen from "../screens/ClientScreen";
//The signup schema for validation with Yup
const SignupSchema = Yup.object().shape({

  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Please enter your email address"),
  password: Yup.string()
    .required("Required")
    .min(8, "Too Short!")
    .max(24, "Too Long!")
    .matches(/(?=.*[0-9])/, "Password must contain a number.")
    .matches(/(?=.*[a-z])/, "Password must contain a lowercase letter.")
    .matches(/(?=.*[A-Z])/, "Password must contain a uppercase letter.")
    .matches(/(?=.*[!@#$%^&*])/, "Password must contain a special character."),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  name: Yup.string().required("name required"),
  phone: Yup.number().required("Phone number required"),
});

const SignUp = ({ navigation }) => {
  const moveTo = (screen, payLoad) => {
    navigation.navigate(screen, { ...payLoad });
  };
  const { white } = colors;

  const dispatch = useDispatch();

  //role
    const [selection, setSelection] = useState('client'); // default selection is 'client'
  
    const handleSelection = (newSelection) => {
      setSelection(newSelection);
    };

  const submitForm = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(api.signup+"/user/signup", {
        name: values.name,
        email: values.email,
        password: values.password,
        role: selection,
        phone: values.phone,
      });
  
      if (response.data) {
        console.log(response.data);
        setSubmitting(false);
        moveTo("ClientScreen");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <MainContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BigText style={{ marginBottom:  30 , fontSize: 30, textAlign: "center"}}>Welcome on board ! </BigText>
        <Formik
          initialValues={{
            name: "",
            phone: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={submitForm}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            isSubmitting,
            touched,
            errors,
          }) => (
            <>
              <StyledTextInput
                icon="account"
                label={"Full Name"}
                placeholder={"Enter Your Full Name"}
                autoCapitalize="none"
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                style={{ marginBottom: 15 }}
                value={values.name}
                errors={touched.name && errors.name}
              />
              <View>
                <Text style={styles.title}>Select user type:</Text>
                <View style={styles.container}>
                  <TouchableOpacity 
                    onPress={() => handleSelection('client')} 
                    style={[styles.button, selection === 'client' ? styles.selected : null]}
                  >
                    <Text style={[styles.buttonTextC, selection === 'client' ? styles.selectedButtonTextC : null]}>
                      Client
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    onPress={() => handleSelection('prestataire')} 
                    style={[styles.button, selection === 'prestataire' ? styles.selected : null]}
                  >
                    <Text style={[styles.buttonTextP, selection === 'prestataire' ? styles.selectedButtonTextP : null]}>
                      Prestataire
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <StyledTextInput
                icon="email"
                label={"Your Email"}
                placeholder={"Enter Your Email Address"}
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                style={{ marginBottom: 15 }}
                value={values.email}
                errors={touched.email && errors.email}
              />
              <StyledTextInput
                icon="phone"
                label={"Phone Number"}
                placeholder={"Enter Your Phone Number"}
                autoCapitalize="none"
                onChangeText={handleChange("phone")}
                onBlur={handleBlur("phone")}
                style={{ marginBottom: 15 }}
                value={values.phone}
                errors={touched.phone && errors.phone}
              />
              <StyledTextInput
                icon="lock"
                label={"Password"}
                placeholder="**********"
                isPassword={true}
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={handleChange("password")}
                value={values.password}
                onBlur={handleBlur("password")}
                style={{ marginBottom: 15 }}
                errors={touched.password && errors.password}
              />
              <StyledTextInput
                icon="lock"
                label={"Confirm Your Password"}
                isPassword={true}
                placeholder="**********"
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={handleChange("confirmPassword")}
                value={values.confirmPassword}
                onBlur={handleBlur("confirmPassword")}
                style={{ marginBottom: 15 }}
                errors={touched.confirmPassword && errors.confirmPassword}
              />
     
              {!isSubmitting && (
                <RegularButton onPress={handleSubmit}>
                  Create Account
                </RegularButton>
              )}
              {isSubmitting && (
                <RegularButton disabled={true}>
                  <ActivityIndicator
                    size="small"
                    color={white}
                  ></ActivityIndicator>
                </RegularButton>
              )}

              <PressableText
                style={{ paddingTop: 15 }}
                onPress={() => moveTo("Login")}
              >
                Have an account? Login
              </PressableText>
            </>
          )}
        </Formik>
        
      </ScrollView>
      
    </MainContainer>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 20,
    marginBottom: 5, 
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'black',
  },
  selected: {
    backgroundColor: '#723DD4',
    borderColor: 'black',
    color: '#fff',
  },
  buttonTextC: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  buttonTextP: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  selectedButtonTextC: {
    color: '#fff',
  },
  selectedButtonTextP: {
    color: '#fff',
  },
});
export default SignUp

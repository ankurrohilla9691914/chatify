import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup_EnterEmail from "./src/screens/LoginSignup/Signup/Signup_EnterEmail";
import Login from "./src/screens/LoginSignup/Login/Login";
import Signup_EnterVerification from "./src/screens/LoginSignup/Signup/Signup_EnterVerification";
import Signup_ChoosePassword from "./src/screens/LoginSignup/Signup/Signup_ChoosePassword";
import Signup_ChooseUsername from "./src/screens/LoginSignup/Signup/Signup_ChooseUsername";
import Signup_AccountCreated from "./src/screens/LoginSignup/Signup/Signup_AccountCreated";
import ForgotPassword_EnterEmail from "./src/screens/LoginSignup/ForgotPassword/ForgotPassword_EnterEmail";
import ForgotPassword_AccountRecovered from "./src/screens/LoginSignup/ForgotPassword/ForgotPassword_AccountRecovered";
import ForgotPassword_ChoosePassword from "./src/screens/LoginSignup/ForgotPassword/ForgotPassword_ChoosePassword";
import MainPage from "./src/screens/MainPage/MainPage";
import ForgotPassword_EnterVerificationCode from "./src/screens/LoginSignup/ForgotPassword/ForgotPassword_EnterVerficationCode";
import BottomNavBar from "./src/components/BottomNavBar";
import { PRIMARY_COLOR } from "./src/constants";
import All_Chats from "./src/screens/ChatSection/All_Chats";
import SearchUserPage from "./src/screens/MainPage/SearchUserPage";
import NotificationsPage from "./src/screens/MainPage/NotificationsPage";
import MyProfile from "./src/screens/Profile/MyProfile";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.androidSafeAreaView}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false, animation: "slide_from_right" }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="Signup_EnterEmail"
            component={Signup_EnterEmail}
          />
          <Stack.Screen
            name="Signup_EnterVerification"
            component={Signup_EnterVerification}
          />
          <Stack.Screen
            name="Signup_ChooseUsername"
            component={Signup_ChooseUsername}
          />
          <Stack.Screen
            name="Signup_ChoosePassword"
            component={Signup_ChoosePassword}
          />

          <Stack.Screen
            name="Signup_AccountCreated"
            component={Signup_AccountCreated}
          />
          <Stack.Screen
            name="ForgotPassword_EnterEmail"
            component={ForgotPassword_EnterEmail}
          />
          <Stack.Screen
            name="ForgotPassword_EnterVerificationCode"
            component={ForgotPassword_EnterVerificationCode}
          />
          <Stack.Screen
            name="ForgotPassword_AccountRecovered"
            component={ForgotPassword_AccountRecovered}
          />
          <Stack.Screen
            name="ForgotPassword_ChoosePassword"
            component={ForgotPassword_ChoosePassword}
          />
          <Stack.Screen
            name="All_Chats"
            component={All_Chats}
            options={{ animation: "slide_from_bottom" }}
          />
          <Stack.Screen name="MainPage" component={MainPage} />
          <Stack.Screen
            name="SearchUserPage"
            component={SearchUserPage}
            options={{ animation: "slide_from_bottom" }}
          />
          <Stack.Screen
            name="NotificationsPage"
            component={NotificationsPage}
            options={{ animation: "slide_from_bottom" }}
          />
          <Stack.Screen
            name="MyProfile"
            component={MyProfile}
            options={{ animation: "slide_from_bottom" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  androidSafeAreaView: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: PRIMARY_COLOR,
  },
});

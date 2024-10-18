import { StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { Routes } from "./src/routes";

import { THEME } from "./src/theme";
import { Loading } from "./src/components/Loading";

import { CartContextProvider } from "./src/contexts/CartContext";
import { NotificationClickEvent, OneSignal } from "react-native-onesignal";
import { tagUserInfoCreate } from "./src/notifications/notificationsTags";
import { useEffect } from "react";

OneSignal.initialize("10eeaeaf-2c5e-45d7-a767-6dc03b972144");
OneSignal.Notifications.requestPermission(true);

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  tagUserInfoCreate();

  useEffect(() => {
    const handleNotificationClick = (event: NotificationClickEvent): void => {
      const { actionId } = event.result;

      switch (actionId) {
        case `1`:
          console.log("Ver todos");

          break;

        default:
          break;
      }

      console.log(event.notification);
    };

    OneSignal.Notifications.addEventListener("click", handleNotificationClick);

    return () => {
      OneSignal.Notifications.removeEventListener(
        "click",
        handleNotificationClick
      );
    };
  }, []);

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>
    </NativeBaseProvider>
  );
}

import React from "react";
import { Button, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { LoginScreenProps } from "../types";
import { SwipeablePanel } from "./swipeable-panel";
import { LoginScreen } from "./login";

export const SplashLogin = (props: LoginScreenProps) => {
  return (
    <View style={styles.container}>
      <SwipeablePanel openLabel="Login" content={<LoginScreen {...props} />} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
});

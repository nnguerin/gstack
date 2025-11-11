import { StyleSheet, Text } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedView } from "@/components/themed-view";
import Swiper from "react-native-deck-swiper";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Swiper
        cards={["DO", "MORE", "OF", "WHAT", "MAKES", "YOU", "HAPPY"]}
        renderCard={(card) => {
          return (
            <ThemedView style={styles.card}>
              <Text style={styles.text}>{card}</Text>
            </ThemedView>
          );
        }}
        onSwiped={(cardIndex) => {
          console.log("swiped", cardIndex);
        }}
        onSwipedLeft={(cardIndex) => {
          console.log("swiped left", cardIndex);
        }}
        onSwipedRight={(cardIndex) => {
          console.log("swiped right", cardIndex);
        }}
        onSwipedTop={(cardIndex) => {
          console.log("swiped top", cardIndex);
        }}
        onSwipedBottom={(cardIndex) => {
          console.log("swiped bottom", cardIndex);
        }}
        onSwipedAll={() => {
          console.log("onSwipedAll");
        }}
        cardIndex={0}
        backgroundColor={"transparent"}
        stackSize={3}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white",
  },
  text: {
    textAlign: "center",
    fontSize: 50,
  },
});

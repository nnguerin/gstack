import React, { useRef, useMemo, ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-paper";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

interface SwipeablePanelProps {
  openLabel: string;
  content: ReactNode;
}

export function SwipeablePanel({ openLabel, content }: SwipeablePanelProps) {
  const bottomSheetRef = useRef<BottomSheet>(null);

  // Snap points - where the sheet can rest
  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

  const handleOpenPress = () => bottomSheetRef.current?.expand();

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.content}>
        <Button mode="contained" onPress={handleOpenPress}>
          {openLabel}
        </Button>
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        index={-1} // Start closed (-1) or open (0, 1, 2 based on snapPoints)
        snapPoints={snapPoints}
        enablePanDownToClose
        backgroundStyle={styles.bottomSheetBackground}
      >
        <BottomSheetView style={styles.sheetContent}>{content}</BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  bottomSheetBackground: {
    backgroundColor: "#fff",
  },
  sheetContent: {
    flex: 1,
    padding: 16,
  },
});

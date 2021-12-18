import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import Share from "react-native-share";

const url = "https://awesome.contents.com/";
const title = "Caffeine Diary";
const message = "Share To-Do-List with Friends!";

const options = {
  title,
  url,
  message,
};

export default function App() {
  const share = async (customOptions = options) => {
    try {
      await Share.open(customOptions);
    } catch (err) {
      console.log(err);
    }
    return (
        <View style={styles.container}>
          <StatusBar style="auto" />
        
          <View style={{ marginVertical: 5 }}>
            <Button
              onPress={async () => {
                await share({
                  title: "Sharing pdf file with firends!",
                  message: "Watch Friend's To-Do-List on Caffeine-Diary!",
                  url: file.pdf,
                });
              }}
              title="Share pdf"
            />
          </View>
        </View>
      );
  };

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const singleShare = async (customOptions) => {
    try {
      await Share.shareSingle(customOptions);
    } catch (err) {
      console.log(err);
    }
};

const singleShare = async (customOptions) => {
    try {
      const { isInstalled } = await Share.isPackageInstalled(
        "com.Caffeine-Diary.android"
      );

      if (isInstalled) {
        await Share.shareSingle(customOptions);
      } else {
        Alert.alert(
          "Caffeine-Diary not installed",
          "Please install Caffeine-Diary",
          [{ text: "OK", onPress: () => console.log("OK Pressed") }]
        );
      }
    } catch (err) {
      console.log(err);
    }
};

<View style={{ marginVertical: 5 }}>
        <Button
          onPress={async () => {
            await singleShare({
              title: "Share via Caffeine-Diary",
              message: "some awesome dangerous message",
              url: file.pdf,
              social: Share.Social.Caffeine-Diary,
              filename: file.pdf,
            });
          }}
          title="Share to Caffeine-Diary"
        />
 </View>
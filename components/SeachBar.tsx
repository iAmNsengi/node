import { icons } from "@/constants/icons";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const SeachBar = () => {
  return (
    <View>
      <Text className="text-white flex-row items-center bg-dark-200 rounded-full px-5 py-4">
        <Image source={icons.search} />
      </Text>
    </View>
  );
};

export default SeachBar;

const styles = StyleSheet.create({});

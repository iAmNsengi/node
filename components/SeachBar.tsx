import { icons } from "@/constants/icons";
import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";

interface Props {
  placeholder: string;
  onPress?: () => void;
}

const SeachBar = ({ placeholder, onPress }: Props) => {
  return (
    <View className="text-white flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor={"#abf8bff"}
      />
      <TextInput
        className="flex-1 ml-2 text-white"
        onPress={onPress}
        placeholder={placeholder}
        value=""
        onChangeText={() => {}}
        placeholderTextColor={"#a8b5db"}
      />
    </View>
  );
};

export default SeachBar;

const styles = StyleSheet.create({});

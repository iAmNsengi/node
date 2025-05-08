import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import React from "react";
import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
} from "react-native";

const TabIcon = ({
  title,
  icon,
  focused,
}: {
  title: string;
  icon: ImageSourcePropType;
  focused: boolean;
}) => {
  return (
    <ImageBackground
      source={focused ? images.highlight : ""}
      className="flex flex-row w-full flex-1 min-w-[90px] min-h-14 mt-2 justify-center items-center rounded-full overflow-hidden px4"
    >
      <Image source={icon} tintColor={"#151312"} className="size-5" />
      <Text className="text-secondary text-base font-semibold ml-2">
        {title}{" "}
      </Text>
    </ImageBackground>
  );
};

const _Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon title="Home" icon={icons.home} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.save} focused={focused} title="Saved" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.person} focused={focused} title="Profile" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} title="Search" />
          ),
        }}
      />
    </Tabs>
  );
};

export default _Layout;

const styles = StyleSheet.create({});

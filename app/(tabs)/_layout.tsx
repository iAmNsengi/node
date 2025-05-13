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
  View,
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
  return focused ? (
    <ImageBackground
      source={focused ? images.highlight : ""}
      className="flex flex-row w-full flex-1 min-w-[90px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"
    >
      <Image source={icon} tintColor={"#151312"} className="size-5" />
      <Text className="text-secondary text-xs font-semibold ml-2">{title}</Text>
    </ImageBackground>
  ) : (
    <View className="size-full flex flex-col mt-6 text-xs justify-center items-center rounded full">
      <Image source={icon} tintColor={"#fff"} className="size-5" />
    </View>
  );
};

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0f0D23",
          // borderRadius: 50,
          // marginHorizontal: 20,s
          // marginBottom: 36,
          // height: 52,
          // position: "absolute",
          // borderWidth: 1,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon title="Home" icon={icons.home} focused={focused} />
          ),
        }}
      />{" "}
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
    </Tabs>
  );
};

export default _Layout;

const styles = StyleSheet.create({});

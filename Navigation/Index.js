import React from "react";
import "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, TouchableOpacity } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import WelcomeScreen from "../app/WelcomeScreen";
import LoginScreen from "../app/Auth/LoginScreen";
import RegisterScreen from "../app/Auth/RegisterScreen";
import HomeScreen from "../app/home/HomeScreen";
import MessageScreen from "../app/home/MessageScreen";
import FavoriteScreen from "../app/home/FavoriteScreen";
import ProfileScreen from "../app/home/ProfileScreen";
import { COLORS } from "../constant/Theme";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const RootStack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        headerTitle: "Discover",
        headerRight: () => (
          <TouchableOpacity onPress={() => alert("Menu button Pressed!")}>
            <Ionicons name="bag" size={24} />
          </TouchableOpacity>
        ),
        headerRightContainerStyle: { paddingRight: 10 },
        headerStyle: { backgroundColor: COLORS.lightWhite },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          tabBarLabel: "Messages",
          tabBarIcon: ({ color }) => (
            <Ionicons name="file-tray-outline" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarLabel: "Favorite",
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart-outline" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: (color) => (
            <Ionicons name="person-outline" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function Index() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="App Stack" component={AppStack} />
      <RootStack.Screen name="Bottom Stack" component={BottomTab} />
    </RootStack.Navigator>
  );
}

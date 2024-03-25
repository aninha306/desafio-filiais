import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Cadastro from "../screens/Cadastro"
import Escolas from "../screens/Escolas"
import { user } from "../data/Profile";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Profile"
        component={Profile}
        initialParams={{ data: user }}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={24}
              color={focused ? "black" : "grey"}
            />
          ),
          tabBarLabel: "Perfil",
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "black",
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={24}
              color={focused ? "black" : "grey"}
            />
          ),
          tabBarLabel: "Inicial",
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "black",
        }}
      />

      <Tab.Screen
        name="Cadastro"
        component={Cadastro}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="list"
              size={24}
              color={focused ? "black" : "grey"}
            />
          ),
          tabBarLabel: "Cadastros",
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "black",
        }}
      />
       <Tab.Screen
        name="Escolas"
        component={Escolas}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="plus"
              size={24}
              color={focused ? "black" : "grey"}
            />
          ),
          tabBarLabel: "Filiais",
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "black",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import { perfil } from "../data/Profile";
import Filiais from "../screens/Filiais";
import Lista from "../screens/Lista";
import Detalhes from "../screens/Detalhes";
import { user } from "../data/Escola";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Profile"
        component={Profile}
        initialParams={{ data: perfil }}
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
          tabBarLabel: "Home",
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "black",
        }}
      />
      <Tab.Screen
        name="Filiais"
        component={Filiais}
        initialParams={{ edit: false, user: null }}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="plus"
              size={24}
              color={focused ? "black" : "grey"}
            />
          ),
          tabBarLabel: "Cadastro",
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "black",
        }}
      />
      <Tab.Screen
        name="Lista"
        component={Lista}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="list"
              size={24}
              color={focused ? "black" : "grey"}
            />
          ),
          tabBarLabel: "Filiais",
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "black",
        }}
      />
      <Tab.Screen
        name="Detalhes"
        component={Detalhes}
        initialParams={{ data: user }}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="clipboard"
              size={24}
              color={focused ? "black" : "grey"}
            />
          ),
          tabBarLabel: "Detalhes",
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "black",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
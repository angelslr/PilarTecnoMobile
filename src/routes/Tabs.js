import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeStack from "./HomeStack";
import ListStack from "./ListStack";
import ProfileStack from "./ProfileStack";
import MapStack from "./MapStack";

const Tab = createMaterialBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Casa" component={HomeStack} />
      <Tab.Screen name="PerfilTab" component={ProfileStack} />
      <Tab.Screen name="MapTab" component={MapStack} />
      <Tab.Screen name="ListTab" component={ListStack} />
    </Tab.Navigator>
  );
}

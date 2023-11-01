import { NavigationContainer } from '@react-navigation/native';
import { Octicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PageList from './PageList';
import PageChat from './PageChat';
const BottomTab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <BottomTab.Navigator screenOptions={{headerShown: false, tabBarStyle: {backgroundColor: "#1BA9FF"}}}
        
      >

        <BottomTab.Screen name='PageChat' component={PageChat}
          
          options={{
            title: "",
            tabBarIcon: ({focused, color})=>{
            return <Octicons name="three-bars" size={24} color="black" />
          }}}
        />

        <BottomTab.Screen name='PageList' component={PageList}
          options={{
            title: "",
            tabBarIcon: ({focused, color})=>{
              return <Octicons name="home" size={24} color="black" />
            }}}
        />
        
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}


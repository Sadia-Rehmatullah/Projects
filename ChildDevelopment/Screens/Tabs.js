import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Skills from './Progress';
import SkillCategories from './Today';
const Tab = createBottomTabNavigator();


function MyTabs() {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Today') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
              <Ionicons name="md-checkmark-circle" size={40} color="purple" />
            // <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
          } else if (route.name === 'Progress') {
            iconName = 'home';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Progress"  component={Skills}  />
      <Tab.Screen name="Today" component={SkillCategories} />
    </Tab.Navigator>
  );
}

export default MyTabs;

const styles = StyleSheet.create(
  {
    title: {
      color: 'black',
      fontSize: 20,
      alignSelf: 'center',
      fontWeight: '700',
    },
  }
)
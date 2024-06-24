import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

//telas
import Index from '../components/Index';
import Lista from '../components/Lista';
import Carrinho from '../components/Carrinho';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBarOptions={{
        activeTintColor: '#FF5733', // Cor do ícone ativo (selecionado)
        inactiveTintColor: '#C0C0C0', // Cor do ícone inativo (não selecionado)
      }}>
     

      <Tab.Screen
        name="Lista"
        component={Lista}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="fruit-watermelon"
              size={size}
              color={color}
            />
          ),
          tabBarLabel: 'Alimentos',
        }}
      />

      <Tab.Screen
        name="Info1"
        component={Carrinho}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="shopping-cart" color={color} size={size} />
          ),
          tabBarLabel: 'Carrinho',
        }}
      />
    </Tab.Navigator>
  );
}

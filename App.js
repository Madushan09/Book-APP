import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import Dashboard from './screens/Dashboard';
import Adventure from './screens/Advencture';
import DC_Comic from './screens/DC_Comic';
import Horror from './screens/Horror';
import Mystery from './screens/Mystery';
import Short_Stories from './screens/Short_Stories';
import Profile from './screens/Profile';
import Classics from './screens/Classics';
import Fantasy from './screens/Fantasy';
import Romance from './screens/Romance';
import DragonRun from './screens/DragonRun';
import TheNebula from './screens/TheNebula';
import Space_Academy from './screens/Space_Academy';
import Don_Quixote from './screens/Don_Quixote';
import One_Hundred from './screens/One_Hundred';
import Anna_Karenina from './screens/Anna_Karenina';
import Cart from './screens/Cart';
import Sign from './screens/Sign';
import Register from './screens/Register';





const Stack = createNativeStackNavigator()

export default function App() {
  return (

    
  
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={HomeScreen} />
          <Stack.Screen name="DashBoard" component={Dashboard} />
          <Stack.Screen name="Advencture" component={Adventure} />
          <Stack.Screen name="Classics" component={Classics} />
          <Stack.Screen name="DC_Comic" component={DC_Comic} />
          <Stack.Screen name="Mystery" component={Mystery} />
          <Stack.Screen name="Fantasy" component={Fantasy} />
          <Stack.Screen name="Romance" component={Romance} />
          <Stack.Screen name="Short_Stories" component={Short_Stories} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="TheNebula" component={TheNebula} />
          <Stack.Screen name="DragonRun" component={DragonRun} />
          <Stack.Screen name="Space_Academy" component={Space_Academy} />
          <Stack.Screen name="Don_Quixote" component={Don_Quixote} />
          <Stack.Screen name="One_Hundred" component={One_Hundred} />
          <Stack.Screen name="Anna_Karenina" component={Anna_Karenina} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="Sign" component={Sign} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Horror" component={Horror} />
          
          
          
        </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
   
  );
}

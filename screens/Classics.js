import React from 'react';
import { ScrollView, StyleSheet,Image,View } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';


function Classics ({ navigation }) {
    return (


      
        <ScrollView style={styles.scrollView}>
        
          
          <View style={styles.container}>
        <View style={styles.image}>
        <Image source={{
          width: 250,
          height: 370,
          
          padding: 50,
          alignItems: 'center',
          uri: 'https://top15.in/wp-content/uploads/Anna-Karenina-939x1024.jpg'
          }}
        />
        </View>
        
            <Card.Content>
              <Button style={styles.Btn}mode="contained" onPress={() => navigation.navigate('Anna_Karenina')}>
              Anna Karenina

              </Button>
			                
        <View style={styles.image}>
        <Image source={{
          width: 250,
          height: 370,
          
          padding: 50,
          alignItems: 'center',
          uri: 'https://top15.in/wp-content/uploads/One-Hundred-Years-Of-Solitude-877x1024.jpg'
          }}
        />
        </View>
              <Button style={styles.Btn}mode="contained" onPress={() => navigation.navigate('One_Hundred')}>
              One Hundred Years Of Solitude
              </Button>
			  
              <View style={styles.image}>
        <Image source={{
          width: 250,
          height: 370,
          
          padding: 50,
          alignItems: 'center',
          uri: 'https://top15.in/wp-content/uploads/Don-Quixote-878x1024.jpg'
          }}
        />
        </View>
              <Button style={styles.Btn}mode="contained" onPress={() => navigation.navigate('Don_Quixote')}>
              Don Quixote

              </Button>
			 
            
            </Card.Content>
           </View>

          

          
        </ScrollView>
      )
}



const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: DefaultTheme.colors.background,
    paddingTop: 10,
    paddingBottom:10
  },
  Button: {
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    
  },
  image:{
   
    alignItems: 'center',
    marginBottom:10,
    marginTop:5
    
 

  },
  Btn:{
    marginBottom:10,
    backgroundColor:"#009999",
  }
  
});

export default Classics;
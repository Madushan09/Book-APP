import React from 'react';
import { ScrollView, StyleSheet,Image,View } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';


function Short_Stories ({ navigation }) {
    return (


      
        <ScrollView style={styles.scrollView}>
        
          
          <View style={styles.container}>
        <View style={styles.image}>
        <Image source={{
          width: 250,
          height: 370,
          
          padding: 50,
          alignItems: 'center',
          uri: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572297115-51G2GGjeBjL.jpg?crop=1.00xw:0.962xh;0,0.0180xh&resize=640:*'
          }}
        />
        </View>
        
            <Card.Content>
              <Button style={styles.Btn}mode="contained" onPress={() => navigation.navigate('Fuel Details')}>
              Riverhead Books This Is How You Lose Her

              </Button>
			  
              
              <View style={styles.image}>
        <Image source={{
          width: 250,
          height: 370,
          
          padding: 50,
          alignItems: 'center',
          uri: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572297319-51Y82I5ACdL.jpg?crop=1.00xw:0.962xh;0,0.0100xh&resize=640:*'
          }}
        />
        </View>
              <Button style={styles.Btn}mode="contained" onPress={() => navigation.navigate('Diesel')}>
              Florida
              </Button>
			  
              <View style={styles.image}>
        <Image source={{
          width: 250,
          height: 370,
          
          padding: 50,
          alignItems: 'center',
          uri: 'https://tse3.mm.bing.net/th?id=OIP.bSTVj5F9On0AFyZLOwnHiAAAAA&pid=Api&P=0&w=105&h=166'
          }}
        />
        </View>
              <Button style={styles.Btn}mode="contained" onPress={() => navigation.navigate('')}>
              Orbit How Long 'til Black Future Month?
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

export default  Short_Stories;
import React from 'react';
import { ScrollView, StyleSheet,Image,View } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';


function Mystery ({ navigation }) {
    return (


      
        <ScrollView style={styles.scrollView}>
        
          
          <View style={styles.container}>
        <View style={styles.image}>
        <Image source={{
          width: 250,
          height: 370,
          
          padding: 50,
          alignItems: 'center',
          uri: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572293115-41zqZwXZ-WL.jpg?crop=1.00xw:0.984xh;0,0.00600xh&resize=640:*'
          }}
        />
        </View>
        
            <Card.Content>
              <Button style={styles.Btn}mode="contained" onPress={() => navigation.navigate('Fuel Details')}>
              The Night Fire

              </Button>
			  
              
              <View style={styles.image}>
        <Image source={{
          width: 250,
          height: 370,
          
          padding: 50,
          alignItems: 'center',
          uri: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572293468-516dZVA7rQL.jpg?crop=0.958xw:1xh;center,top&resize=640:*'
          }}
        />
        </View>
              <Button style={styles.Btn}mode="contained" onPress={() => navigation.navigate('Diesel')}>
              The Adventures of Sherlock Holmes
              </Button>
			  
              <View style={styles.image}>
        <Image source={{
          width: 250,
          height: 370,
          
          padding: 50,
          alignItems: 'center',
          uri: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572293489-51MlxNgCsyL.jpg?crop=1.00xw:0.932xh;0,0.0440xh&resize=640:*'
          }}
        />
        </View>
              <Button style={styles.Btn}mode="contained" onPress={() => navigation.navigate('')}>
              And Then There Were None
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

export default  Mystery;
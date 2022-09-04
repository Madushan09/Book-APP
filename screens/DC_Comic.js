import React from 'react';
import { ScrollView, StyleSheet,Image,View } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';


function DC_Comic ({ navigation }) {
    return (


      
        <ScrollView style={styles.scrollView}>
        
          
          <View style={styles.container}>
        <View style={styles.image}>
        <Image source={{
          width: 250,
          height: 370,
          
          padding: 50,
          alignItems: 'center',
          uri: 'https://storage.googleapis.com/hipcomic/p/4c275cb0fea159ee94c3a8174d70ea2c.jpg'
          }}
        />
        </View>
        
            <Card.Content>
              <Button style={styles.Btn}mode="contained" onPress={() => navigation.navigate('Fuel Details')}>
              SUPERGIRL

              </Button>
			
              
              <View style={styles.image}>
        <Image source={{
          width: 250,
          height: 370,
          
          padding: 50,
          alignItems: 'center',
          uri: 'https://cdn11.bigcommerce.com/s-0kvv9/images/stencil/1280x1280/products/263852/367933/apins8mkk__23083.1529611844.jpg?c=2'
          }}
        />
        </View>
              <Button style={styles.Btn}mode="contained" onPress={() => navigation.navigate('Diesel')}>
              The Flash
              </Button>
			  
              <View style={styles.image}>
        <Image source={{
          width: 250,
          height: 370,
          
          padding: 50,
          alignItems: 'center',
          uri: 'https://www.milwaukeeindependent.com/wp-content/uploads/2020/12/121020_TimFoxBlackBatman_02.jpg'
          }}
        />
        </View>
              <Button style={styles.Btn}mode="contained" onPress={() => navigation.navigate('')}>
              BATMAN 2

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

export default  DC_Comic;
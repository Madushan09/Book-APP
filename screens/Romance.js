import React from 'react';
import { ScrollView, StyleSheet,Image,View } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';


function Romance ({ navigation }) {
    return (


      
        <ScrollView style={styles.scrollView}>
        
          
          <View style={styles.container}>
        <View style={styles.image}>
        <Image source={{
          width: 250,
          height: 370,
          
          padding: 50,
          alignItems: 'center',
          uri: 'https://picture.bookfrom.net/img/j-a-fielding-and-bwwm-club/antonio_her_italian_millionaire_bwwm_romance_book_1.jpg'
          }}
        />
        </View>
        
            <Card.Content>
              <Button style={styles.Btn}mode="contained" onPress={() => navigation.navigate('')}>
              Antonio, Her Italian Millionaire 

              </Button>
			  
              
              <View style={styles.image}>
        <Image source={{
          width: 250,
          height: 370,
          
          padding: 50,
          alignItems: 'center',
          uri: 'https://read-online-books.com/files/04/76/95/f047695/public/00024.jpeg'
          }}
        />
        </View>
              <Button style={styles.Btn}mode="contained" onPress={() => navigation.navigate('')}>
              Christmas Romance (Best Christmas Romances of 2013)
              </Button>
			  
              <View style={styles.image}>
        <Image source={{
          width: 250,
          height: 370,
          
          padding: 50,
          alignItems: 'center',
          uri: 'https://readonlinefree.net/files/11/30/78/f113078/public/cover.jpeg'
          }}
        />
        </View>
              <Button style={styles.Btn}mode="contained" onPress={() => navigation.navigate('')}>
              Mr. Dark: An Alpha Billionaire Romance
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

export default  Romance;
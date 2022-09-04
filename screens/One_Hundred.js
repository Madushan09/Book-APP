import React from 'react';
import { ScrollView, StyleSheet,Image,View ,Text} from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';


function One_Hundred ({ navigation }) {
    return (
      


      
        <ScrollView style={styles.scrollView}>
          <Card style={styles.card}>
          
            
            <View style={styles.container}>
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
        <Text style={styles.title}>
        Book Name :- One Hundred Years Of Solitude 
        {'\n'}{'\n'}Author :- Gabriel Garcia Marquez
        {'\n'}{'\n'}Description :- The late Columbian author, Gabriel Garcia Marquez published his most triumphant work, One Hundred Years of Solitude, Nobel Prize winner in 1982. Marquez employs the power of myth and folktale in relating history and Latin American culture. The genre of magic realism emphasizes the extraordinary of commonplace things while mystical things are shown to be common.
        {'\n'}{'\n'}Price :- Rs.1500.00
        <Text style={styles.Discount}>
        {'\n'}{'\n'}Discount :- 30%
        </Text>
        {'\n'}{'\n'}10,011 Ratings 
        
      </Text>
        </View>
        
            <Card.Content>
              <Button style={{backgroundColor:"#009999",}} mode="contained" onPress={() => navigation.navigate('Cart')}>
              Add to Cart
              </Button>
              
            
            </Card.Content>
            
          </Card>

          
        </ScrollView>
        
      )
}



const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: DefaultTheme.colors.background,
    paddingTop: 10
  },
  image:{
   
    alignItems: 'center',
    marginBottom:10,
    marginTop:5
    
 

  },
  card: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor:'black'
    
    
  },
  title:{
    fontSize:16,
    textAlign:'left',
    marginTop:10,
    color:'white',
    fontWeight:'bold',
    marginBottom:15
    
 
   },
   Discount:{
    color:"red"
  }
  
});

export default One_Hundred;
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import React from 'react'

export default function Skills() {
  const skill = [
      {key:2,  title: "Reactjs",     color:"#87CEEB", image:"https://img.icons8.com/officexs/344/react.png"},
      {key:1,  title: "JavaScript",      color:"#FF4500", image:"https://img.icons8.com/color/344/javascript--v1.png"},
      {key:3,  title: "HTML",     color:"#4682B4", image:"https://img.icons8.com/color/344/html-5--v1.png"} ,
      {key:4,  title: "css",   color:"#6A5ACD", image:"https://img.icons8.com/color/344/css3.png"},
      {key:5,  title: "React Native",  color:"#FF69B4", image:"https://img.icons8.com/external-others-amoghdesign/344/external-react-native-soleicons-fill-vol-1-others-amoghdesign.png"} ,
      {key:6,  title: "Bootstrap",   color:"#00BFFF", image:"https://img.icons8.com/color/344/bootstrap.png"} ,
      {key:7,  title: "Wordpress",   color:"#00FFFF", image:"https://img.icons8.com/color/344/wordpress.png"} ,
      {key:8,  title: "PHP",    color:"#20B2AA", image:"https://img.icons8.com/color/344/php.png"} ,
        
    ]
  return (
    <View style={styler.container}>
    <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 30, textAlign: 'center', textDecorationLine: 'underline', marginBottom: 25 }}>My Projects List </Text>
    
      <FlatList style={styler.list}
        contentContainerStyle={styler.listContainer}
        data={skill}
        horizontal={false}
        numColumns={2}
        keyExtractor= {skill=>skill.title}
        renderItem={({item}) => {
          return (
            
            <View>
            
              <TouchableOpacity style={[styler.card, {backgroundColor:item.color}]} onPress={() => {this.clickEventListener(item)}}>
                <Image style={styler.cardImage} source={{uri:item.image}}/>
              </TouchableOpacity>

              <View style={styler.cardHeader}>
                <View style={{alignItems:"center", justifyContent:"center"}}>
                  <Text style={[styler.title, {color:item.color}]}>{item.title}</Text>
                </View>
              </View>
            </View>
          )
        }}/>
    </View>
  );
}
const styler = StyleSheet.create({
container:{
  flex:1,
  marginTop:40,
  backgroundColor:'#fff',
  marginTop:0
},
list: {
  paddingHorizontal: 5,
  backgroundColor:"#fff",
},
listContainer:{
  alignItems:'center'
},
/******** card **************/
card:{
  shadowColor: '#474747',
  shadowOffset: {
    width: 0,
    height: 6,
  },
  shadowOpacity: 0.37,
  shadowRadius: 7.49,

  elevation: 50,
  marginVertical: 20,
  marginHorizontal: 40,
  backgroundColor:"#e2e2e2",
  //flexBasis: '42%',
  width:120,
  height:120,
  borderRadius:60,
  alignItems:'center',
  justifyContent:'center'
},
cardHeader: {
  paddingVertical: 17,
  paddingHorizontal: 16,
  borderTopLeftRadius: 1,
  borderTopRightRadius: 1,
  flexDirection: 'row',
  alignItems:"center", 
  justifyContent:"center"
},
cardContent: {
  paddingVertical: 12.5,
  paddingHorizontal: 16,
},
cardFooter:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingTop: 12.5,
  paddingBottom: 25,
  paddingHorizontal: 16,
  borderBottomLeftRadius: 1,
  borderBottomRightRadius: 1,
},
cardImage:{
  height: 50,
  width: 50,
  alignSelf:'center'
},
title:{
  fontSize:24,
  flex:1,
  alignSelf:'center',
  fontWeight:'bold'
},
}); 




// un used code ################ //


// return (
//   <ScrollView style={{ flex: 1 }}>
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
//       <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 30, textAlign: 'center', textDecorationLine: 'underline' }}>
//         Technical Skills </Text>
//       <Skills lang={require('./assets/images/lang1.png')} />
//       <Skills lang={require('./assets/images/lang2.png')} />
//       <Skills lang={require('./assets/images/lang3.png')} />
//       <Skills lang={require('./assets/images/lang4.png')} />
//       <Skills lang={require('./assets/images/lang5.png')} />
//       <Skills lang={require('./assets/images/lang6.png')} />
//       <Skills lang={require('./assets/images/lang7.png')} />
//     </View>
//   </ScrollView>
// );

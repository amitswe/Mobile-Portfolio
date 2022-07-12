import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProjectDetails = ({ imageSource, title, score }) => {

  return (
    <View>
      <Image style={{height:200,width:250,alignSelf:'center',marginTop:15}} source={imageSource} />
      <Text style={{textAlign:'center',color:'red',fontSize:20,margin:5}}>{title}</Text>
      <Text style={{textAlign:'justify',color:'black',fontSize:15,marginBottom:30}}> {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProjectDetails;
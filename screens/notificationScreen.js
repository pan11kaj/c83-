import React, {Component} from 'react';
import {Text,View,StyleSheet,TextInput, Alert,TouchableOpacity} from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import MyHeader from '../components/MyHeader';
import db from '../config';
import firebase from 'firebase'
export default class NotificationScreen extends Component{
constructor(props){
    super(props);
    this.state={
     allnotifications:[],userId:firebase.auth().currentUser.email
    }
    this.Notificationref=null
}

componentDidMount(){
    this.getNotifications()
}
componentwillUnMount(){
    this.Notificationref()
}
getNotifications=()=>{ this.requestRef = 
    
    db.collection("all_notifications") .where("notification_status", "==", "unread")
 .where("targeted_user_id",'==',this.state.userId)
  .onSnapshot((snapshot)=>{ var allNotifications = []
     snapshot.docs.map((doc) =>{ 
         var notification = doc.data();
          notification["doc_id"] = doc.id
 allNotifications.push(notification) }); 
 this.setState({ allNotifications : allNotifications }); }) }

keyExtractor=(item,index)=>index.toString()
renderItem=({item,index})=>{
    return(
        <ListItem
        key={index}
        leftElement={<Icon name={"book"} type={"font-awesome"} color="#696969"/>}
        title={item.book_name}
        titleStyle={{fontWeight:'bold',color:'black'}}
        subtitle={item.message}
        bottomDivider
        />
    )
} 

    render(){
        return(
            <View style={styles.container}>
         <View style={{flex:0.1}}><MyHeader title="Notifications" navigation={this.props.navigation}/></View>
         <View style={{flex:0.9}}>
             {this.state.allnotifications.length ===0 ?
             (<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                 <Text style={{fontSize:25}} >
                     you have no Notifications
                 </Text></View>):(
                     <FlatList
                     keyExtractor={this.keyExtractor}
                     data={this.state.allnotifications}
                     renderItem={this.renderItem}
                     />
                 )
            }
         
         </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({ container : { flex : 1 } })
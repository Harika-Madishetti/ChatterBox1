import React, {Component} from 'react';
import { Text, FlatList , TouchableOpacity} from 'react-native';
import styles from "../Stylesheet/styleSheet";
import firebase from '@firebase/app'
import 'firebase/database'
import config from '../firebase/db';

try {
    firebase.initializeApp(config);
    console.log("done");
} catch (e) {
    if (!/already exists/.test(e.message))
        console.log("firebase intialization error " + e.stackTrace);
}

export default class Inbox extends Component{
    constructor(props) {
        super(props);
       this.state ={
            ChatListContacts:[
                {name: 'Ranga'},
                {name: 'Harika'},
                {name: 'Hema'},
                {name: 'Manoj'},
                {name: 'Harish'},
                {name: 'Katta'},
            ]
        };
    }
    render() {
        return(
            <FlatList
                data={this.state.ChatListContacts}
                renderItem={({ item }) =>(
                    <TouchableOpacity style={styles.separator}>
                        <Text style={styles.item}> {item.name} </Text>
                    </TouchableOpacity>
                )}
            />

        );
    }
}


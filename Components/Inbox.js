import React, {Component} from 'react';
import { Text, FlatList , View} from 'react-native';
import styles from "../Stylesheet/styleSheet";

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
                renderItem={({ item }) => (
                    <View style={styles.separator}>
                        <Text style={styles.item}> {item.name} </Text>
                    </View>
                )}
            />

        );
    }
}
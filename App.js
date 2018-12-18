import React, {Component} from 'react';
import { Text, FlatList , View} from 'react-native';
import styles from "./styleSheet";
import Header from "./Header";

export default class App extends Component {
    constructor(props) {
        super(props);
            this.state ={
                FlatListItem:[
                    {name: 'Ranga'},
                    {name: 'Harika'},
                    {name: 'Hema'},
                    {name: 'Manoj'},
                    {name: 'Harish'},
                    {name: 'Katta'},
                ],
            };
        }
        ListEmpty = () => {
            return (
                <View style={styles.MainContainer}>
                    <Text style={{ textAlign: 'center' }}>No Data Found</Text>
                </View>
            );
        };
  render() {
      return (
          <View style={styles.mainContainer}>
              <Header/>
              <View style={styles.contentContainer}>
                  <FlatList
                      data={this.state.FlatListItem}
                      renderItem={({ item }) => (
                          <View style={styles.separator}>
                          <Text style={styles.item}> {item.name} </Text>
                          </View>
                      )}
                      ListEmptyComponent={this.ListEmpty}/>
              </View>
          </View>
      );
  }
}

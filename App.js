import React, {Component} from 'react';
import {StyleSheet, Text, FlatList , View} from 'react-native';

export default class App extends Component {
    constructor(props) {
        super(props);
            this.state ={
                FlatListItem:[
                    {key: 'Ranga'},
                    {key: 'Harika'},
                    {key: 'Manoj'},
                    {key: 'Harish'},
                    {key: 'Hema'},
                    {key: 'Katta'},
                    {key: 'Lokesh'},
                    {key: 'Ranga'},
                    {key: 'Harika'},
                    {key: 'Manoj'},
                    {key: 'Harish'},
                    {key: 'Hema'},
                    {key: 'Katta'},
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
              <View style={styles.headerContainer}>
                  <View style={styles.leftHeaderContainer}>
                      <Text style={styles.logoText}>P2PAPP</Text>
                  </View>
                  <View style={styles.rightHeaderContainer}>
                  </View>
              </View>
              <View style={styles.contentContainer}>
                  <FlatList
                      data={this.state.FlatListItem}
                      renderItem={({ item }) => (
                          <View style={styles.separator}>
                          <Text style={styles.item}> {item.key} </Text>
                          </View>
                      )}
                      ListEmptyComponent={this.ListEmpty}/>
              </View>
          </View>
      );
  }
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        height: 24,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 50,
        flexDirection: "row",
    },
    separator: {
        justifyContent: "center",
        padding: 10,
        height: 50,
        borderBottomColor: "rgba(92,94,94,0.5)",
        borderBottomWidth: 0.25
    },
    headerContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#075e54",
        alignItems:"center",
        paddingRight: 5
    },
    leftHeaderContainer: {
        alignItems: "flex-start",
        flexDirection: "row"
    },
    rightHeaderContainer: {
        alignItems: "flex-end",
        flexDirection: "row"
    },
    contentContainer: {
        flex: 6,
        flexDirection: "row",
    },
    logoText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
        alignItems: "flex-start",
        marginLeft: 10
    },
});
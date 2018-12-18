import React, {Component} from 'react';
import {View} from 'react-native';
import styles from "../Stylesheet/styleSheet";
import Header from "./Header";
import Inbox from "./Inbox";

export default class App extends Component {
  render() {
      return (
          <View style={styles.mainContainer}>
              <Header/>
              <View style={styles.contentContainer}>
                  <Inbox/>
              </View>
          </View>
      );
  }
}

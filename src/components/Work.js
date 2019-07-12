import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import Swipeout from 'react-native-swipeout';
import { toggleDone, toggleShow, deleteWord } from '../redux/actionCreators';

class Work extends Component {
  render() {
    const {
      title, detail, isDone, isShow, id,
    } = this.props.myWork;
    const textDecorationLine = isDone ? 'line-through' : 'none';
    const doneButtonText = isDone ? 'redo' : 'do';
    const showButtonText = isShow ? 'hide' : 'show';
    const detailText = isShow ? detail : '';

    // Buttons
    const swipeoutBtns = [
      {
        onPress: () => {
          this.props.deleteWord(id);
        },
        text: 'Delete',
        backgroundColor: 'red',
      },
    ];

    return (
      <Swipeout style={styles.container} right={swipeoutBtns}>
        <View style={styles.item}>
          <Text style={{ fontWeight: 'bold', textDecorationLine }}>{title}</Text>
          <Text>{detailText}</Text>
          <Text>{id}</Text>
          <View style={styles.controller}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.toggleDone(id)}
            >
              <Text>{doneButtonText}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.toggleShow(id)}
            >
              <Text>{showButtonText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Swipeout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  item: {
    padding: 10,
    backgroundColor: '#D2DEF6',
  },
  controller: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#F5F5F5',
    borderRadius: 4,
    padding: 10,
    margin: 10,
  },
});

export default connect(null, { toggleDone, toggleShow, deleteWord })(Work);

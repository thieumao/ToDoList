import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Swipeout from 'react-native-swipeout';
import { toggleDone, toggleShow, deleteWord } from '../redux/actionCreators';

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

class Work extends Component {
  deleteAction() {
    this.props.deleteWord(this.props.myWork.id);
  }

  render() {
    const {
      title, detail, isDone, isShow, id,
    } = this.props.myWork;
    const textDecorationLine = isDone ? 'line-through' : 'none';
    const doneButtonText = isDone ? 'redo' : 'do';
    const showButtonText = isShow ? 'hide' : 'show';
    const detailText = isShow ? detail : '';

    const deleteButton = {
      onPress: () => {
        this.deleteAction();
      },
      text: 'Delete',
      backgroundColor: 'red',
    };

    return (
      <Swipeout style={styles.container} right={[deleteButton]}>
        <View style={styles.item}>
          <Text style={textDecorationLine}>{title}</Text>
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

Work.propTypes = {
  deleteWord: PropTypes.func.isRequired,
  toggleDone: PropTypes.func.isRequired,
  toggleShow: PropTypes.func.isRequired,
  myWork: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    detail: PropTypes.string,
    isDone: PropTypes.bool,
    isShow: PropTypes.bool,
  }).isRequired,
};

export default connect(null, { toggleDone, toggleShow, deleteWord })(Work);

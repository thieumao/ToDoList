import React from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleAdd } from '../redux/actionCreators';

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'red',
    borderRadius: 4,
    padding: 4,
  },
});

const Header = ({ onToggleAdd }) => (
  <View style={styles.header}>
    <Text />
    <Text style={styles.title}>MY WORKS</Text>
    <TouchableOpacity onPress={() => onToggleAdd()}>
      <Text style={styles.button}>Add</Text>
    </TouchableOpacity>
  </View>
);

Header.propTypes = {
  onToggleAdd: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onToggleAdd: () => dispatch((toggleAdd())),
});

export default connect(null, mapDispatchToProps)(Header);

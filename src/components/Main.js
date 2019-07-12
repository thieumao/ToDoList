import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Work from './Work';
import Filter from './Filter';
import Header from './Header';
import Form from './Form';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});

class Main extends Component {
  getWorkList() {
    const { myFilter, myWorks } = this.props;
    if (myFilter === 'TODO') return myWorks.filter(e => !e.isDone);
    if (myFilter === 'DONE') return myWorks.filter(e => e.isDone);
    return myWorks;
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={{ flex: 10 }}>
          { this.props.myIsAdding ? <Form /> : null }
          <FlatList
            data={this.getWorkList()}
            renderItem={({ item }) => <Work myWork={item} />}
            keyExtractor={item => item.id.toString()}
          />
        </View>
        <Filter />
      </View>
    );
  }
}

Main.propTypes = {
  myFilter: PropTypes.string.isRequired,
  myWorks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      detail: PropTypes.string,
      isDone: PropTypes.bool,
      isShow: PropTypes.bool,
    }),
  ).isRequired,
  myIsAdding: PropTypes.bool.isRequired,
};

// Main.defaultProps = {
//   myWorks: [],
// }

function mapStateToProps(state) {
  return {
    myFilter: state.filterStatus,
    myWorks: state.arrWorks,
    myIsAdding: state.isAdding,
  };
}

export default connect(mapStateToProps)(Main);

import React, { Component } from 'react';
import { Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { Action } from './Redux/RepoRedux';

class RepoList extends Component {
  componentDidMount() {
    this.props.getRepos('relferreira');
  }

  renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() =>
        this.props.navigation.navigate('Detail', { name: item.name })
      }>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
  render() {
    const { repos } = this.props;
    return (
      <FlatList
        styles={styles.container}
        data={repos}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

const mapStateToProps = state => {
  // console.log(state.repos)
  let storedRepositories = state.repos.map(repo => ({ key: repo.id, ...repo }));
  return {
    repos: storedRepositories,
  };
};
// const mapDispatchToProps = {
//   getRepos: listRepos,
// };
const mapDispatchToProps = {
  getRepos: data => Action.getRepos(data),
};
// const mapDispatchToProps = dispatch => ({
//   getRepos: user =>
//     dispatch(
//       Action.getRepos({
//         request: {
//           url: `/users/${user}/repos`,
//         },
//       }),
//     ),
// });
// const mapDispatchToProps = dispatch => {
//   return {
//     getRepos: data => dispatch(Action.listRepos(data)),
//   };
// };

function listRepos(user) {
  console.log('LIST ' + user);
  return Action.getRepos({
    request: {
      url: `/users/${user}/repos`,
    },
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RepoList);

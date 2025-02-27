import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUA } from './actions';

class UserAgent extends Component {
  componentDidMount() {
    this.props.loadData();
  }
  render() {
    if (this.props.isFetching) {
      return <span>Loading</span>;
    }
    if (this.props.error) {
      return <span>Error</span>;
    }
    return <span>User-agent: {this.props.data['user-agent']}</span>;
  }
}
const mapStateToProps = state => {
  return {
    isFetching: state.ua.isFetching,
    data: state.ua.data,
    error: state.ua.error
  };
};
const mapDispatchToProps = dispatch => {
  return {
    loadData: () => dispatch(loadUA())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAgent);

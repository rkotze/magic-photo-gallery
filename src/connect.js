import React, { Component } from 'react';

function connect(defaultState, dispatchAction) {
  return function (MyComponent) {

    function mapPropsToState(props = {}, state = {}) {
      const stateKeys = Object.keys(state);
      const propsToStateReducer = (newState, keyName) => {
        if (keyName in props) {
          newState[keyName] = props[keyName];
        }
        return newState;
      };

      return stateKeys.reduce(propsToStateReducer, state);
    }

    return class Connect extends Component {
      constructor(props) {
        super(props);
        this.state = dispatchAction(
          mapPropsToState(props, defaultState),
          {});
      }

      dispatch = (action) => {
        if(typeof action === 'function'){
          return action(this.dispatch, this.state);
        }
        this.setState(prevState => dispatchAction(prevState, action));
      }

      render() {
        return (<MyComponent {...this.props} {...this.state} dispatch={this.dispatch} />);
      }
    }
  }
}

export default connect;
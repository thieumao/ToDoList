import React from 'react';
import { YellowBox, AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'RCTBridge',
]);

export default class ToDo extends React.Component {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent(appName, () => ToDo);

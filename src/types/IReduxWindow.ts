/* istanbul ignore file */

interface IReduxWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION__: any;
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}

export default IReduxWindow;

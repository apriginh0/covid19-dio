
import { StylesProvider } from '../node_modules/@material-ui/styles/index';
import { CssBaseline } from '../node_modules/@material-ui/core/index';
import GlobalStyle from './commons/styles/global-style';
import Main from './containers/Main/index';

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <GlobalStyle />
      <Main />
    </StylesProvider>
  );
}

export default App;

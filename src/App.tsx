import MyComponent from './components/MyComponent';
import Toolbar from './components/Toolbar';
import { ThemeProvider } from './context/theme.context';

function App() {
  return (
    <ThemeProvider>
      <Toolbar />
      <MyComponent />
    </ThemeProvider>
  );
}

export default App;

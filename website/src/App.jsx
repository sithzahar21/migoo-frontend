import './App.css';
import { RouterProvider } from 'react-router';
import router from "./routes/Router.js";
import { CustomThemeProvider } from './context/ThemeContext';

function App() {
  localStorage.setItem("firstTime", true);

  return (
    <CustomThemeProvider>
      <RouterProvider router={router} />
    </CustomThemeProvider>
  );
}

export default App;

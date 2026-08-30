import './styles/App.css'
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import ThemeProvider from './context/ThemeProvider';
import LanguageProvider from './context/LanguageProvider';
import Preloader from './components/ui/Preloader';

function App() {
  return ( 
   <ThemeProvider>
      <LanguageProvider>
        <Preloader />
  <RouterProvider router={router} /> 
  </LanguageProvider>
    </ThemeProvider>




    );
}

export default App

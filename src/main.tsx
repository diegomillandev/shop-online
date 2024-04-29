import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { AxiosInterceptor } from './interceptors';
import './styles.css';

AxiosInterceptor();
ReactDOM.createRoot(document.getElementById('root')!).render(<App />);

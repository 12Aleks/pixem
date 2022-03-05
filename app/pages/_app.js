import 'bootstrap/dist/css/bootstrap.css';
import '../styles/style.scss';
import { Provider } from 'react-redux';
import store from '../store/index';


export default function MyApp({ Component, pageProps }) {
    return (
       <Provider store={store}>
           <Component {...pageProps} />
       </Provider>
    )
}
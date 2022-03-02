import Header from "./header";
import Footer from "./footer";
import Head from "next/head";
import {useSelector} from 'react-redux';

const MainContainer = ({children, title, keywords}) => {
    const selector = useSelector(state => state.colorTheme.value);

    return (
        <section className={selector.payload ? undefined: 'dark'}>
            <Head>
                <title>{title}</title>
                <link rel="shortcut icon" href="/favicon.ico" />
                <meta keywords={'pixem converter' + keywords}></meta>
            </Head>
            <Header />
            {children}
            <Footer/>
        </section>
    );
};

export default MainContainer;
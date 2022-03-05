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
                <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
                <link rel="manifest" href="/static/site.webmanifest" />
                <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="theme-color" content="#ffffff" />
                <meta keywords={'pixem converter' + keywords}></meta>
            </Head>
            <Header />
               {children}
            <Footer/>
        </section>
    );
};

export default MainContainer;
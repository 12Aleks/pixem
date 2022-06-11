import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import {useSelector} from 'react-redux';

const MainContainer = ({children, title, keywords}) => {
    const selector = useSelector(state => state.colorTheme.value);

    return (
        <section className={selector.payload ? undefined : 'dark'}>
            <Head>
                <title>Pixem | {title}</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png"/>
                <link rel="manifest" href="/static/site.webmanifest"/>
                <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="description"
                      content="Pixem app is an online tool that helps you convert pixels into different relative and absolute measurement units."/>
                <meta keywords={`pixem converter ${keywords}`}/>
                <meta name="robots" content="index,follow"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="google-site-verification" content="1N41cNbyiMA6g6uIMYhMIBq-G8M_-ewOO3WGfZYefGw"/>
            </Head>
            <Header/>
            {children}
            <Footer/>
        </section>
    );
};

export default MainContainer;
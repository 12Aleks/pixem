import Header from "./header";
import Footer from "./footer";
import Head from "next/head";
import {useState} from "react";

const MainContainer = ({children, title, keywords}) => {
    const [theme, setTheme] = useState(true);

    return (
        <section className={theme ? undefined: 'dark'}>
            <Head>
                <title>{title}</title>
                <meta keywords={'pixem converter' + keywords}></meta>
            </Head>
            <Header theme={theme} setTheme={data => setTheme(data)}/>
            {children}
            <Footer/>
        </section>
    );
};

export default MainContainer;
import React, {createContext} from 'react'
import Home from "./home";
import MainContainer from "../components/MainContainer";

export const Context = createContext(null);

const Index = () => {
    return (
        <MainContainer title={'Home page'} keywords={'Home page'}>
            <Home/>
        </MainContainer>
    );
};

export default Index;
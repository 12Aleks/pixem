import {createContext} from 'react'
import Home from "./home";
import MainContainer from "../components/MainContainer";

export const Context = createContext(null)

const Index = () => {
    return (
        <MainContainer>
            <Home/>
        </MainContainer>
    );
};

export default Index;
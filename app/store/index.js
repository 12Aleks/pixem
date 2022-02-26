import {makeAutoObservable} from 'mobx-react-lite'

export default class State{
    constructor(){
        this._theme = true;
        makeAutoObservable(this)
    }
    setTheme(theme){
        this._theme = theme
    }

    get theme(){
        return this._theme
    }
}

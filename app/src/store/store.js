import {makeAutoObservable} from 'mobx'

export default class Data{
    constructor(){

        makeAutoObservable(this)
    }
}





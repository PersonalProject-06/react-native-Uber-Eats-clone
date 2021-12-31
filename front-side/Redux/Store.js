
import {createStore} from "redux"
import reducer from "./Reducers/index"


const configureStore = (initialState)=>{
    let store= createStore(reducer,initialState)
    return store 
}

export default configureStore
import * as actionsTypes from "../Actions/ActionsTypes"

const initialState ={
    csvResult:{},
    dataFromCsv:[]
}

const fileResultReducer=(state=initialState, action)=>{
    switch(action.type){
        case actionsTypes.CSV_FILE_RESULT:
        return{
            ...state,
            csvResult:action.results,
            dataFromCsv:action.data
        } 
        default:
            return state   
    }
}

export default fileResultReducer
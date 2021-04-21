import * as actionsTypes from './ActionsTypes'

export const csvResult=(results,data)=>{
return {
    type: actionsTypes.CSV_FILE_RESULT,
    results: results,
    data:data
}
}
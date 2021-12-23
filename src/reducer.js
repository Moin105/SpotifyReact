export const initialState = {
    user: null,
    playlist:[],
    playing: false,
    item: null,
    token:'BQAzh5wYNCPf6zAsuKyIaQvAT8Hm13jWRojEOQFVmuWWD7w2-h…Bo_HlUOFNms-FbeUxYta16LXtupQx1Wgh8S7_AcyToJ_8oQuU'
}

const reducer = (state , action)=>{
console.log('dddddddddddddddddddddddd',action);

switch (action.type){
    case 'SET_USER':
        return {
            ...state,
            user: action.user
        }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }

default :
return state;        
}

}
export default reducer
import * as types from "../actionTypes";
import * as resultadosApi from "../../../api/matchesApi";
import { func } from "prop-types";
import { beginApiCall, apiCallError } from "../apiStatusActions";

export function CreateResultadosSuccess(matches){
    
    return {type: types.CREATE_RESULTADOS_SUCCESS, matches};
}

export function MatchDisabledSuccess(matches){
    
    return {type: types.MATCH_DISABLED_SUCCESS, matches};
}

export function saveResultados(user, match, matches){
    return function(dispatch, getState){
        dispatch(beginApiCall());
        return resultadosApi.saveResultados(user,match)
        .then(savedResultados => {
            
            dispatch(CreateResultadosSuccess(matches));
        })
        .catch(error => {
            dispatch(apiCallError(error));
            throw error;
        })
    }
}

export function saveDisabledMatch(user, match, matches){
    return function(dispatch, getState){
        dispatch(beginApiCall());
        return resultadosApi.saveDisabledMatch(user,match)
        .then(savedResultados => {
            
            dispatch(MatchDisabledSuccess(matches));
        })
        .catch(error => {
            dispatch(apiCallError(error));
            throw error;
        })
    }
}
import * as types from "../actionTypes";
import * as playersApi from "../../../api/playersApi";
import * as adminApi from "../../../api/adminApi";
import { func } from "prop-types";
import { beginApiCall, apiCallError } from "../apiStatusActions";


export function changeChampionSuccess(campeon, seleccionado){
    
    var objectData = {campeon, seleccionado};
    return {type: types.CHANGE_CAMPEON, objectData};
}

export function saveChampionSuccess(campeon){
    
    return {type: types.SAVE_CAMPEON_SUCCESS, campeon};
}



export function changeChampion(campeon, seleccionado){
    
    return function(dispatch, getState){
        
        dispatch(changeChampionSuccess(campeon, seleccionado));
    }
}

export function saveChampion(userLogin, campeon){
    
    return function(dispatch){
        dispatch(beginApiCall());
        //courseApi
        return adminApi.saveChampionTeam(userLogin, campeon)
        .then(champSave => {
            adminApi.saveChampionUser(userLogin, campeon)
            .then(champSave => {
                dispatch(saveChampionSuccess(campeon));
            })
            .catch(error => {
                dispatch(apiCallError(error));
                throw error;
            })
        })
        .catch(error => {
            dispatch(apiCallError(error));
            throw error;
        })
    }
}
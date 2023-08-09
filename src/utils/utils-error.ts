import {setErrorAC, setStatusAC} from '../app/app-reducer';
import {Dispatch} from 'redux';

export const handleServerNetworkError = (dispatch:Dispatch, error:string) => {
    dispatch(setErrorAC(error))
    dispatch(setStatusAC('failed'))
}


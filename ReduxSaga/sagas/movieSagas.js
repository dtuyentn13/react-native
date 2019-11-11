import { FETCH_MOVIES, FETCH_SUCCEEDED, FETCH_FAILED } from '../actions/actionTypes';
//Saga effects
import { put, takeLatest } from 'redux-saga/effects';
import { Api } from './Api';

function* fetchMovies() {
    try {
        const receivedMovies = yield Api.getMoviesFromApi();
        console.log("TCL: function*fetchMovies -> receivedMovies", receivedMovies)  
        yield put({ type: FETCH_SUCCEEDED, receivedMovies: receivedMovies });     
    } catch (error) {       
    console.log("TCL: function*fetchMovies -> error", error)
         
        yield put({ type: FETCH_FAILED, error });
    }
}
export function* watchFetchMovies() {
    yield takeLatest(FETCH_MOVIES, fetchMovies);
}
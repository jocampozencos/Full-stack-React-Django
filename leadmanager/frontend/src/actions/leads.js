import axios from 'axios';

import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERRORS } from './types';

//GET LEADS

export const getLeads = () => dispatch => {

    axios.get('/api/leads/')
        .then(response => {
            dispatch({
                type: GET_LEADS,
                payload: response.data
            })
        })

        .catch(error =>
            console.log(error));
}

//DELETE LEAD

export const deleteLead = (id) => dispatch => {

    axios.delete(`/api/leads/${id}/`)
        //axios.get('/api/leads/' + id + '/')

        .then(response => {
            dispatch({
                type: DELETE_LEAD,
                payload: id
            })
        })

        .catch(error =>
            console.log(error));
}

//ADD LEAD
export const addLead = (leads) => dispatch => {

    axios.post('/api/leads/', leads)
        .then(response => {
            dispatch({
                type: ADD_LEAD,
                payload: response.data
            })
        })

        .catch(err => {
            const errors = {
                msg: err.response.data,
                stauts: err.response.status
            }
            dispatch({
                type: GET_ERRORS,
                payload: errors
            })
        })
}





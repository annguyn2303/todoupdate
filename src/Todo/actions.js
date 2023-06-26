import {SET_JOB, ADD_JOB, DELETE_JOB, LINE_THROUGH, REMOVE_LINE_THROUGH, ADD_COMPLETED_JOB} from './constants'

export const setJob = payload => {
    return {
      type: SET_JOB,
      payload
    }
  }
export  const addJob = payload => {
    return {
      type: ADD_JOB,
      payload,
    }
    
  }
  
export const deleteJob = payload => {
    return {
      type: DELETE_JOB,
      payload
    }
  }
  
export const lineThrough = payload => {
    return {
      type: LINE_THROUGH,
      payload
    }
  }
  
export const removeLineThrough = payload => {
    return {
      type: REMOVE_LINE_THROUGH,
      payload
    }
  }
  
export const addCompletedJob = payload => {
    return {
      type: ADD_COMPLETED_JOB,
      payload
    }
  }
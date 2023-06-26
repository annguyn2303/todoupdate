import {SET_JOB, ADD_JOB, DELETE_JOB, LINE_THROUGH, REMOVE_LINE_THROUGH, ADD_COMPLETED_JOB} from './constants'

export const initState = {
    job: '',
    jobs: [],
    completedJobs: []
  }

  const reducer = (state, action) => {
  
    let newState
    switch(action.type){
      case SET_JOB:
        newState = {
          ...state,
          job: action.payload
        }
        break
      case ADD_JOB:
        newState = {
          ...state,
          jobs: [ ...state.jobs, action.payload ]
        }
      break
      case DELETE_JOB:
        const newJobs = [...state.jobs]
        newJobs.splice(action.payload, 1)
        newState = {
          ...state,
          jobs: newJobs
      }
      break
      case LINE_THROUGH:
        const updatedJobs = [...state.jobs]
        updatedJobs[action.payload] = <s>{updatedJobs[action.payload]}</s>
        newState = {
          ...state,
          jobs: updatedJobs
        }
      break
      case REMOVE_LINE_THROUGH:
        const restoredJobs = [...state.jobs]
        restoredJobs[action.payload] = restoredJobs[action.payload].props.children
        newState = {
          ...state,
          jobs: restoredJobs
        }
      break
      case ADD_COMPLETED_JOB:
        newState = {
          ...state,
          completedJobs: [ ...state.completedJobs, action.payload ]
        }
      break
      default:
        throw new Error('Invalid action!')
    }
    
    return newState;
  }

  export default reducer
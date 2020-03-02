const initialState = null

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEND MESSAGE':
            return action.notification
        case 'RESET':
            return null
        default:
            return state
    }
  }

export const reset = () => {
    return {
      type: 'RESET',
    }
}

let emptyTimer
export const sendNotification = (notification, kerroin) => {
    return async dispatch => {
        clearTimeout(emptyTimer)
        dispatch ({
            type: 'SEND MESSAGE',
            notification
        })
        emptyTimer = setTimeout(() => {
            dispatch(reset())  
          }, kerroin * 1000)
    }
}

export default notificationReducer
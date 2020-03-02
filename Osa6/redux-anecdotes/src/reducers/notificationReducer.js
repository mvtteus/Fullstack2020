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

export const sendNotification = (notification, kerroin) => {
    return async dispatch => {
        dispatch ({
            type: 'SEND MESSAGE',
            notification
        })
        setTimeout(() => {
            dispatch(reset())  
          }, kerroin * 1000)
    }
}

export default notificationReducer
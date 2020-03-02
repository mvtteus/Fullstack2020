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

export const sendNotification = (notification) => {
    return {
        type: 'SEND MESSAGE',
        notification
    }
}

export default notificationReducer
const initialState = "huutista"

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEND MESSAGE':
            return action.notification
        default:
            return state
    }
  }
  
export const sendNotification = () => {
    return {
        type: 'SEND MESSAGE',
        data: "huuu"
    }
}

export default notificationReducer
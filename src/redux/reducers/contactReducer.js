import {GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT} from '../actions/types'

const initialState = {
  contacts: []
};

export default(state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
    console.log(action)
      return {
        ...state,
        contacts: action.payload
      }
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      }
    case DELETE_CONTACT:
    console.log(action)
      return {
        ...state,
        contacts: state.contacts.filter( contact => contact.id !== action.payload.id)
      }    
    default:
      return state;
  }
}
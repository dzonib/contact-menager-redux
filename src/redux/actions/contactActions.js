import {GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT} from '../actions/types'
import axios from 'axios'

export const getContacts = () =>async dispatch => {

  const res = await axios.get('https://jsonplaceholder.typicode.com/users')

  dispatch({
    type: GET_CONTACTS,
    payload: res.data
  })
}

export const deleteContact = ({id} = {}) => ({type: DELETE_CONTACT, payload: {
    id
  }})

export const addContact = ({name, email, phone, id}) => ({
  type: ADD_CONTACT,
  payload: {
    id,
    name,
    email,
    phone
  }
})
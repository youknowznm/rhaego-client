import axios from 'axios'
import {
  UPDATE_REGISTER_FIELD,
  CHECK_REGISTER_FIELDS,
  REQUEST_REGISTER_START,
  REQUEST_REGISTER_FAIL,
  REQUEST_REGISTER_DONE,
  REQUEST_REGISTER_RESET,
} from './actionTypes'

export const updateRegisterField = (fieldName, fieldValue) => ({
  type: UPDATE_REGISTER_FIELD,
  fieldName,
  fieldValue,
})
export const checkRegisterFields = () => ({
  type: CHECK_REGISTER_FIELDS,
})
export const requestRegisterStart = () => ({
  type: REQUEST_REGISTER_START
})
export const requestRegisterDone = (r) => ({
  type: REQUEST_REGISTER_DONE,
  r,
})
export const requestRegisterFail = (e) => ({
  type: REQUEST_REGISTER_FAIL,
  e,
})
export const requestRegisterReset = () => ({
  type: REQUEST_REGISTER_RESET,
})
export const requestRegister = (registerFields) => {
  return (dispatch) => {
    const apiurl = '/register'

    dispatch(requestRegisterStart())

    return axios
      .post(apiurl, registerFields)
      .then((r) => {
        if (r.status !== 200) {
          throw new Error('Fail to get response with status ' + r.status)
        }
        console.log(r);
        dispatch(requestRegisterDone(r))
      })
      .catch((e) => {
        console.log(e);
        dispatch(requestRegisterFail(e))
      })

  };
}

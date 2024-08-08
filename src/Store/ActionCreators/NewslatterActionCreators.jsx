import { ADD_NEWSLATTER, DELETE_NEWSLATTER, GET_NEWSLATTER} from "../Constant";

export function createNewslatter(data) {
  return {
    type: ADD_NEWSLATTER,
    payload: data,
  };
}

export function getNewslatter(data) {
  return {
    type: GET_NEWSLATTER,
    payload: data,
  };
}

// export function updateNewslatter(data) {
//   return {
//     type: UPDATE_NEWSLATTER,
//     payload: data,
//   };
// }

export function deleteNewslatter(data) {
  return {
    type: DELETE_NEWSLATTER,
    payload: data,
  };
}

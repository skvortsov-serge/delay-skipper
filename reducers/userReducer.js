export default function reducer(state={
  user: {
    name: "Sergey",
    age: 21,
  },
  fetching: false,
  fetched: false,
}, action) {
  
  switch (action.type) {
    case "FETCH_USER": {
      return {...state, fetching: true}
    }
    case "FETCH_USER_FULFILED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        user: action.payload,
      }
    }
    case "INPUT_CHANGED": {
      return {
        value: action.payload,
      }
    }
  }
  return state;
}

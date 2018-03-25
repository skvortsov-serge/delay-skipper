export function fetchUser() {
 return {
    type: "FETCH_USER_FULFILED",
    payload: {
      name: "Sergey",
      age: 21,
    }
 }
}

export function inputChanged(value) {
  return {
    type: "INPUT_CHANGED",
    payload: value,
  }
 }

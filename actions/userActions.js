export function fetchUser() {
 return {
    type: "FETCH_USER_FULFILED",
    payload: {
      name: "Sergey",
      age: 21,
    }
 }
}

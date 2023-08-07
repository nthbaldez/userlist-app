import axios from "axios";

export async function fetchUsers() {
  const API_URL = 'http://localhost:8080/users';
  const response = await axios.get(API_URL);
  return response;
}

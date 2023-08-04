import axios, { AxiosPromise } from "axios";

interface UserProps {
  name: string;
  birthDate: string;
  address: string;
  telephoneNumber: string;
  status: string;
  image: string;
}

interface UsersFetchResponse {
  data: UserProps[]
}

export async function fetchUsers() {
  const API_URL = '/data.json';
  const response = await axios.get(API_URL);
  console.log(response); 
}

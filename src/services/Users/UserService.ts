import { api } from '../api';

import { v4 as uuidv4 } from 'uuid';

interface CreateUserProps {
  name: string;
  birthDate: string;
  address: string;
  telephoneNumber: string;
}

interface UpdateUserProps {
  id: string
  name?: string;
  birthDate?: string;
  address?: string;
  telephoneNumber?: string;
  status: string;
  image: string;
}

function generateRandomID() {
  const length = 10;
  const characters = '0123456789';
  let id = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    id += characters.charAt(randomIndex);
  }

  return id;
}

export async function GetUsers() {
  let urlAPI = `${api.defaults.baseURL}/users`;

  const header = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  };

  return await api.get(urlAPI, header);
}

export async function CreateUser(payload: CreateUserProps) {
  api
    .post('/users', {
      name: payload.name,
      birthDate: payload.birthDate,
      address: payload.address,
      telephoneNumber: payload.telephoneNumber,
      id: generateRandomID(),
      status: 'Done',
      image: ''
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function UpdateUser(payload: UpdateUserProps) {
  console.log('chegou aqui: ' + payload.name);
    try {
      const response = await api.put(`/users/${payload.id}`, payload);
      console.log('User updated:', response.data);
      // Handle successful update, show notifications, etc.
    } catch (error) {
      console.error('Error updating user:', error);
      // Handle errors, show error messages, etc.
    }
}

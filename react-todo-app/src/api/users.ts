import type { User } from '../types';
import AxiosInstance from './axiosInstance';

// const FETCH_URL = 'https://68760973814c0dfa653a55c2.mockapi.io/api/v1/user';

const refineUser = (users: User[]): User[] => {
  const refineData = users.map((user) => ({
    ...user,
    avatar: user.avatar.replace(/-/g, ''),
  }));
  return refineData;
};

//fetch 함수 작성
export const fetchUsers = async (): Promise<User[]> => {
  try {
    // const response = await fetch(FETCH_URL);
    const response = await AxiosInstance.get<User[]>('/user');
    // if (!response.ok) {
    //   throw new Error(`HTTP 오류, 상태: ${response.status}`);
    // }
    // const data: User[] = await response.json();
    // const refineData = refineUser(data);
    const refineData = refineUser(response.data);
    console.log(refineData);
    return refineData;
  } catch (error) {
    console.error(`error발생: ${error}`);
    return [];
  }
};

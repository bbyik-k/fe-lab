import { useEffect, useState } from 'react';
import type { User } from '../types';
import { fetchUsers } from '../api/users';

export const useUsers = () => {
  // data 상태 저장
  const [users, setUsers] = useState<User[]>([]);
  // 로딩 상태 지정
  const [loading, setLoading] = useState(true);

  // 5. api 호출 로직 작성 - 재호출 가능성
  const load = async () => {
    setLoading(true);
    const data = await fetchUsers();
    setUsers(data);
    setLoading(false);
  };

  // 6. 최초 1회 useEffect 로 관리
  useEffect(() => {
    load();
  }, []);

  return { users, loading, refetch: load };
};

import { useUsers } from '../../hooks/useUsers';
import { UserItem } from './UserItem';

export default function UserList() {
  const { users, loading, refetch } = useUsers();

  if (loading) {
    return <p>로딩 중입니다...</p>;
  }

  return (
    <div>
      <h2>사용자 목록</h2>
      <button onClick={refetch} disabled={loading}>
        다시 불러오기
      </button>
      <ul>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
}

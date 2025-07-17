import type { User } from '../../types';

interface Props {
  user: User;
}

export const UserItem = ({ user }: Props) => {
  return (
    <li>
      <strong>이름: {user.name}</strong>
      <span>{`아바타: ${user.avatar}`}</span>
    </li>
  );
};

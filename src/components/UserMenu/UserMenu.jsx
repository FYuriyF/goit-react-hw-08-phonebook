import { selectUser } from '../../store/useSelector';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../store/auth/authOperation';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useSelector(selectUser);
  return (
    <div className={css.userMenuContainer}>
      <p className={css.userName}>{user.name}</p>
      <button
        className={css.logOutBtn}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
}

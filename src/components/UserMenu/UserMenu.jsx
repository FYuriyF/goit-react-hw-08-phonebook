import { selectUser } from '../../store/useSelector';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { logOut } from '../../store/auth/authOperation';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogOut = async () => {
    try {
      await dispatch(logOut()).unwrap();
      toast.success(`Good bye ${user.name} !`);
    } catch (error) {
      toast.error('Error Login');
    }
  };

  return (
    <div className={css.userMenuContainer}>
      <p className={css.userName}>{user.name}</p>
      <button className={css.logOutBtn} type="button" onClick={handleLogOut}>
        LOGOUT
      </button>
    </div>
  );
};

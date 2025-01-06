import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {setUserList} from './usersSlice';
import { getAllUsers } from '../services/userListService';
import { RootState } from './store';

export interface AdminSliceResponse {
  users: payload;

}

export interface payload {
  data: any;
  isLoading: boolean;
  error: string | null;
}

export const useUser = (): AdminSliceResponse => {
  const dispatch = useDispatch();

  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [usersError, setUsersError] = useState<string | null>(null);

  const users = useSelector((state: RootState) => state.users);


  const fetchUsersFromServer = async () => {
    setIsLoadingUsers(true);
    setUsersError(null);
    const { res, err } = await getAllUsers();
    if (res?.data) {
      dispatch(setUserList(res.data));
    } else {
      setUsersError(err?.message || 'Error fetching users');
    }
    setIsLoadingUsers(false);
  };

  console.log(users.users)
  useEffect(() => {
    if (users.users.length < 1) fetchUsersFromServer();
  }, [users]);


  return {
    users: {
      data: users,
      isLoading: isLoadingUsers,
      error: usersError,
    },
  };
};


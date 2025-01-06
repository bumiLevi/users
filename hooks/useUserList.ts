import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as service from '../services/userListService'
import { deleteUserFromList, updateUserList } from '../store/usersSlice';
import useSort from './useSort';
import useSearch from './useSearch';
import { useUser } from '../store/useUsers';
import { customMessageAlert } from '../components/shared/costumeAlert/customAlert';
import { costumedConfirm } from '../components/shared/costumeConfirm/costumeConfirm';


function useUserList() {
  const { users } = useUser();
  const usersData = users.data.users;
  const dispatch = useDispatch();
  const search = useSearch(usersData);
  const sort = useSort(search.filteredItems);
  const [isAddEditPopupOpen, setIsAddEditPopupOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isLoading, setIsLoading] = useState(users.data.length === 0);
  const [delLoading, setDelLoading] = useState<Record<string, boolean>>({})

  useEffect(() => {
    if (users.data.length > 0) setIsLoading(false)
    if (Array.isArray(users.data)) {
      const initialLoadingState = users.data.reduce((acc: Record<string, boolean>, user: any) => {
        acc[user._id] = false;
        return acc;
      }, {});
      setDelLoading(initialLoadingState);
    } else {
      setDelLoading({});
    }
  }, [users.data]);


  const handleAddUserClick = () => {
    setIsAddEditPopupOpen(true);
  };

  const handleEditUserClick = (user: any) => {
    setIsAddEditPopupOpen(true);
    setSelectedUser(user);
  };

  const handleClosePopup = () => {
    setIsAddEditPopupOpen(false);
    setSelectedUser(null);
  };


  useEffect(() => {
    search.setSearchBy('username');
  }, []);

  const delUser = (id: string) => {
    const callback = async () => {
      setDelLoading({...delLoading, [id]: true})
      const { res, err } = await service.deleteUser(id)
      if (res) {
        dispatch(deleteUserFromList(id));
        customMessageAlert({ message: "משתמש נמחק בהצלחה!", type: "success" });
      } else {
        customMessageAlert({ message: `ⓘ שגיאה בעת מחיקת המשתמש: ${err?.message}`, type: 'error'})
      }
      setDelLoading({...delLoading, [id]: false})
    }
    costumedConfirm({
      title: "אישור מחיקה",
      message: 'האם אתם בטוחים שברצונכם למחוק משתמש זה?',
      confirmText: "מחק משתמש",
      onConfirm: callback,
    });
  }


  return {
    delUser,
    isAddEditPopupOpen,
    selectedUser,
    handleAddUserClick,
    handleEditUserClick,
    handleClosePopup,
    search,
    sort,
    isLoading,
    delLoading
  };
}

export default useUserList;
import React from "react";
import useUserList from "../../hooks/useUserList";
import * as styles from "./usertList.style";
import * as DataTable from "../shared/data_table.styles";
import Popup from "./addEditPopup/addEditUserPopup";
import { MdDelete, MdEdit } from "react-icons/md";
import { Spinner } from "../shared/form.styles";

const UserList: React.FC = () => {
  const {
    delUser,
    isAddEditPopupOpen,
    selectedUser,
    handleAddUserClick,
    handleEditUserClick,
    handleClosePopup,
    search,
    sort,
    isLoading,
    delLoading,
  } = useUserList();

  return (
    <DataTable.Container dir="rtl">
      <DataTable.H1>משתמשים</DataTable.H1>
      <DataTable.Search>
        <DataTable.InputWrap>
          <DataTable.SearchInput
            type="text"
            value={search.searchWord}
            onChange={(e) => search.setSearchWord(e.target.value)}
            placeholder="חפש..."
          />
          <DataTable.SwitchContainer>
            <DataTable.SwitchLabel checked={search.searchBy === "username"}>
              <DataTable.Switch
                type="radio"
                name="searchBy"
                value="username"
                checked={search.searchBy === "username"}
                onChange={() => search.setSearchBy("username")}
              />
              <span>משתמש</span>
            </DataTable.SwitchLabel>
            <DataTable.SwitchLabel checked={search.searchBy === "email"}>
              <DataTable.Switch
                type="radio"
                name="searchBy"
                value="email"
                checked={search.searchBy === "email"}
                onChange={() => search.setSearchBy("email")}
              />
              <span>אימייל</span>
            </DataTable.SwitchLabel>
          </DataTable.SwitchContainer>
        </DataTable.InputWrap>

        <DataTable.Button onClick={handleAddUserClick}>
          הוסף משתמש
        </DataTable.Button>
      </DataTable.Search>
      <DataTable.bodyWrap>
        <DataTable.TableWrapper>
          {/* Header Row with Sorting */}
          {isLoading ? (
            <DataTable.P>
              <Spinner style={{ display: "inline-block" }} />
              &nbsp;טוען נתונים
            </DataTable.P>
          ) : (
            <>
              <DataTable.row>
                <styles.userNameHeader>
                  <DataTable.SortButton
                    isActive={sort.sortBy === "username"}
                    sortOrder={sort.sortOrder}
                    onClick={() => {
                      sort.handleSort("username");
                    }}
                  >
                    {sort.sortOrder === "asc" && sort.sortBy === "username" ? (
                      <span className={`arrow asc`}>↑</span>
                    ) : (
                      <span className={`arrow desc`}>↓</span>
                    )}
                  </DataTable.SortButton>
                  שם משתמש
                </styles.userNameHeader>

                <styles.nameHeader>שם</styles.nameHeader>

                <styles.emailHeader>
                  <DataTable.SortButton
                    isActive={sort.sortBy === "email"}
                    sortOrder={sort.sortOrder}
                    onClick={() => {
                      sort.handleSort("email");
                    }}
                  >
                    {sort.sortOrder === "asc" && sort.sortBy === "email" ? (
                      <span className={`arrow asc`}>↑</span>
                    ) : (
                      <span className={`arrow desc`}>↓</span>
                    )}
                  </DataTable.SortButton>
                  אימייל
                </styles.emailHeader>

                <styles.buttonHeader>
                  מחק/ערוך
                </styles.buttonHeader>
              </DataTable.row>

              {/* Data Rows */}
              <DataTable.tableBody>
                {sort.sortedList && sort.sortedList.length > 0 ? (
                  sort.sortedList.map((user, index) => (
                    <DataTable.row key={index}>
                      <styles.userNameCell title={user.username}>
                        {user.username}
                      </styles.userNameCell>
                      <styles.nameCell title={user.fullName}>
                        {user.fullName}
                      </styles.nameCell>
                      <styles.emailCell title={user.email}>
                        {user.email}
                      </styles.emailCell>
                      <styles.buttonCell>
                        <styles.functionButton
                          onClick={() =>
                            user.status !== "deleted" && delUser(user._id)
                          }
                          aria-label="delete"
                          title="מחק משתמש"
                          disabled={delLoading[user._id]}
                        >
                          {delLoading[user._id] ? <Spinner /> : <MdDelete />}
                        </styles.functionButton>
                        <styles.functionButton
                          onClick={() =>
                            user.status !== "deleted" && handleEditUserClick(user)
                          }
                          aria-label="edit"
                          title="ערוך פרטי משתמש"
                        >
                          <MdEdit />
                        </styles.functionButton>
                      </styles.buttonCell>
                    </DataTable.row>
                  ))
                ) : (
                  <DataTable.P>אין נתונים להצגה</DataTable.P>
                )}
              </DataTable.tableBody>

            </>
          )}
        </DataTable.TableWrapper>
      </DataTable.bodyWrap>

      {isAddEditPopupOpen && (
        <Popup user={selectedUser} onClose={handleClosePopup} />
      )}
    </DataTable.Container>
  );
};

export default UserList;

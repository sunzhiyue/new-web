import React from 'react';

import UserList from '../components/Users/UserLIst';
import UserModal from '../components/Users/UserModal';
import UserSearch from '../components/Users/UserSearch';
import styles from './Users.less';

function Users() {
  const userListProps = {};
  const userModalProps = {};
  const UserSearchProps = {};
  return (
    <div className={styles.normal}>
      <UserList {...userListProps} />
      <UserModal {...userModalProps} />
      <UserSearch {...UserSearchProps} />
    </div>
  );
}

Users.propTypes = {

};
export default Users;

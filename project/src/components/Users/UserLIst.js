/**
 * sunzhiyue 2018-1-11
 */
import React from 'react';
import { Table, Popconfirm } from 'antd';
import 'antd/dist/antd.css';

const UserList = ({
  total,
  current,
  loading,
  dataSource,
}) => {
  const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="a"> {text} </a>,
  }, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  }, {
    title: '操作',
    key: 'operation',
    render: () => (
      <p>
        <a onClick={() => {}}>编辑</a>
        &nbsp;
        <Popconfirm title="确定要删除吗？" onConfirm={() => {}}>
          <a>删除</a>
        </Popconfirm>
      </p>
    ),
  }];
  const pagination = {
    total,
    current,
    pageSize: 10,
    onChange: () => {},
  };
  return (
    <div>
      <Table
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        rowKey={record => record.id}
        pagination={pagination}
      />
    </div>
  );
};

export default UserList;

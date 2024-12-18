import { Button, Card, Table, Tooltip, message } from 'antd';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import Loading from 'components/shared-components/Loading';
import { useHistory } from "react-router-dom";

const List = ({match}) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const history = useHistory()

  useEffect(() => {
    const getUsers = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        if (response.ok) {
          const json = await response.json();
          setUsers(json);
        } else {
          console.error('Ошибка HTTP: ' + response.status);
        }
      } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
      } finally {
        setIsLoading(false)
      }
    };
    getUsers();
  }, []);

  const deleteUser = (userId) => {
    const newUsers = users.filter(item => item.id !== userId)
		setUsers(newUsers)
		message.success({ content: `Deleted user ${userId}`, duration: 2 });
	}

  const tableColumns = [
    {
      title: 'User',
      dataIndex: 'name',
      render: (_, record) => (
        <div className="d-flex">
          <AvatarStatus
            onNameClick={() => history.push(`${match.url}Item/${record.id}`)}
            src={record.img}
            name={record.name}
            subTitle={record.email}
          />
        </div>
      ),
      sorter: {
        compare: (a, b) => {
          a = a.name.toLowerCase();
          b = b.name.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
    },
    {
      title: 'City',
      dataIndex: 'address',
      render: date => <div>{date.city}</div>,
      sorter: {
        compare: (a, b) => {
          a = a.address.city.toLowerCase();
          b = b.address.city.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
    },
    {
      title: 'Company',
      dataIndex: 'company',
      render: date => <div>{date.name}</div>,
      sorter: {
        compare: (a, b) => {
          a = a.company.name.toLowerCase();
          b = b.company.name.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
    },
    {
      title: '',
      dataIndex: 'actions',
      render: (_, elm) => (
        <div className="text-right">
          <Tooltip title="Delete">
            <Button
              danger
              icon={<DeleteOutlined />}
              onClick={() => deleteUser(elm.id)}
              size="small"
            />
          </Tooltip>
        </div>
      ),
    },
  ];

  if (isLoading) {
    return <Loading />
  }

  return (
    <Card bodyStyle={{ padding: '0px' }}>
      <Table columns={tableColumns} dataSource={users} rowKey="id" />
    </Card>
  );
};

export default List;

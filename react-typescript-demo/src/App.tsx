import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import User from './User';
import { AppProps, Users } from './App.types';



const App: FC<AppProps> = ({ title }) => {
  const [users, setUsers] = useState<Users[]>([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await axios.get(
          'https://randomuser.me/api/?results=10'
        );
        console.log(data);
        setUsers(data.results)
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {users.map(({ login, name, email }) => {
          return <User key={login.uuid} name={name} email={email} />;
        })}
      </ul>
    </div>);
};

export default App;
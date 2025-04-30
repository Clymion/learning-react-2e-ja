import React, { useState, useEffect } from 'react';

const API_URL = 'https://api.github.com/users';

const LoginUserForm = () => {
  const [login, setLogin] = useState('moonhighway');
  return (
    <>
      <h1>Login User Form</h1>
      <input
        type="text"
        // value={login}
        // onChange={(e) => setLogin(e.target.value)}
        // TIPS: `onBlur`でデフォルト値を設定するときは、`value`属性を指定せずに`defaultValue`属性を指定する
        defaultValue={login}
        onBlur={(e) => setLogin(e.target.value)}
      />
      <GitHubUser login={login} />
    </>
  );
};

const GitHubUser = ({ login }) => {
  const [data, setData] = useState();

  useEffect(() => {
    if (!login) return;
    const fetchData = async () => {
      try {
        const url = `${API_URL}/${login}`;
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [login]);

  if (data) return <pre>{JSON.stringify(data, null, 2)}</pre>;

  return null;
};

export default function App() {
  return (
    <>
      <LoginUserForm />
    </>
  );
}

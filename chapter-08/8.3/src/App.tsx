import React, { useState, useEffect } from 'react';

const loadJSON = (key: string) => key && JSON.parse(localStorage.getItem(key) || '{}');
const saveJSON = (key: string, data: any): void =>
  localStorage.setItem(key, JSON.stringify(data));

function GitHubUser({ login }) {
  const [data, setData] = useState(loadJSON(`user.${login}`));

  useEffect(() => {
    if (!data) return;
    const { name, avatar_url, location } = data;
    saveJSON(`user.${login}`, {
      name,
      login,
      avatar_url,
      location,
    });
  }, [data]);

  useEffect(() => {
    if (!login) return;
    if (data && data.login === login) return;
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .catch(console.error);
  }, [login]);

  if (data) return <pre>{JSON.stringify(data, null, 2)}</pre>;

  return null;
}

export default function App() {
  return <GitHubUser login="clymion" />;
}

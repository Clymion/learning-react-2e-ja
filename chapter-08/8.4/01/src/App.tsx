import React, { useState, useEffect } from "react";

type GitHubUserProps = {
  login: string;
  name: string;
  location: string;
  avatar_url: string;
};

const LoginUserForm = () => {
  const [login, setLogin] = useState('moonhighway');
  return (
    <>
      <h1>Login User Form</h1>
      <input
        type="text"
        defaultValue={login}
        onBlur={(e) => setLogin(e.target.value)}
      />
      <GitHubUser login={login} />
    </>
  );
};

function GitHubUser({ login }) {
  const [data, setData] = useState<GitHubUserProps>();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
      .then(data => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]);

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (loading) return <h1>loading...</h1>;
  if (!data) return null;

  return (
    <div className="githubUser">
      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>
  );
}

export default function App() {
  return <LoginUserForm />;
}

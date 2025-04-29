import { useState } from 'react';
import Fetch from './Fetch';

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
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}`}
      renderSuccess={UserDetails}
      renderError={error => {
        // handle error
        return <p>Something went wrong... {error.message}</p>;
      }}
    />
  );
}

function UserDetails({ data }) {
  return (
    <div className="githubUser">
      <img
        src={data.avatar_url}
        alt={data.login}
        style={{ width: 200 }}
      />
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

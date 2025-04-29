import React from 'react';
import { faker } from '@faker-js/faker';

const bigList = [...Array(5000)].map(() => ({
  name: faker.internet.username(),
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
}));

function List({
  data = [],
  renderItem,
  renderEmpty,
}: {
  data: any[];
  renderItem: (item: any) => React.ReactNode;
  renderEmpty?: React.ReactNode;
}) {
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

export default function App() {
  const renderItem = (item) => (
    <div style={{ display: 'flex' }}>
      <img
        src={item.avatar}
        alt={item.name}
        width={50}
      />
      <p>
        {item.name} - {item.email}
      </p>
    </div>
  );

  return (
    <List
      data={bigList}
      renderItem={renderItem}
    />
  );
}

import React from 'react';
import user from '../fakeData/user.json';

function UserComponent() {
  return (
    <section className="user-card">
      <div className="user-card__title">
        <div>name: {`${user.name} ${user.surname}`}</div>
        <div>age: {user.age}</div>
      </div>
      <p>technologies:</p>
      <ul>
        {user.technologies.map(tech => (
          <li>{tech}</li>
        ))}
      </ul>
      <p>contacts:</p>
      <ul>
        <li>telegram: {user.contacts.telegram}</li>
        <li>
          <p>phones:</p>
          <ul>
            {user.contacts.phones.map(phone => (
              <li>{phone}</li>
            ))}
          </ul>
        </li>
      </ul>
    </section>
  )
};

export default UserComponent;
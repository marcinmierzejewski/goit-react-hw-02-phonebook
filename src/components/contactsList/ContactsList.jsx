import { ContactItem } from 'components/contactItem/ContactItem';

export const ContactsList = ({ contacts, deleteItem }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          deleteItem={deleteItem}
        />
      ))}
    </ul>
  );
};

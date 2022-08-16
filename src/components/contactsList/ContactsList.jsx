import { ContactItem } from 'components/contactItem/ContactItem';
import PropTypes from 'prop-types';

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

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteItem: PropTypes.func.isRequired,
};
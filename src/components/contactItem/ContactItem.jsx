import PropTypes from 'prop-types';
import styles from './ContactItem.module.css'

export const ContactItem = ({ id, name, number, deleteItem }) => {
  const { contactItem, contactName } = styles
  return (
    <li className={contactItem}>
      <span className={contactName}>{name}: {number}</span>{' '}
      <a href={`tel:${number}`}><button>Call</button></a>
      <button type="button" onClick={() => {
        deleteItem(id)}}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
};
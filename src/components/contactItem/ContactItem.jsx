import PropTypes from 'prop-types';

export const ContactItem = ({ id, name, number, deleteItem }) => {
  return (
    <li>
      {name}: {number}{' '}
      <a href={`tel:${number}`}><button>Call</button></a>
      <button type="button" onClick={deleteItem(id)}>
        {' '}
        X{' '}
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
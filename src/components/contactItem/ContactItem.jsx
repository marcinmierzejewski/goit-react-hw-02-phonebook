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

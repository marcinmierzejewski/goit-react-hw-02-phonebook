import PropTypes from 'prop-types';

export const SearchFilter = ({ searchByName }) => {
  return (
    <div>
      <label>
        Find contacts by name
        <input type="text" onChange={searchByName} />
      </label>
    </div>
  );
};

SearchFilter.propTypes = {
  searchByName: PropTypes.func.isRequired,
};
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contactReducer';

export const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const filterChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  return (
    <label>
      Find contacts by name:
      <input onChange={filterChange} value={filter} type="text" name="filter" />
    </label>
  );
};

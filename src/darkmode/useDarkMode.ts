
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { toggleDarkMode } from '../redux/themeSlice';

const useDarkMode = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };

  return {
    darkMode,
    handleToggle,
  };
};

export default useDarkMode;

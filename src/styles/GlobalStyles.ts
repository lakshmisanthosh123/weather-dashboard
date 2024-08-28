
import { createGlobalStyle } from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

interface GlobalStylesProps {
  darkMode: boolean;
}

const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  body {
    background-color: ${(props) => (props.darkMode ? '#121212' : '#ffffff')};
    color: ${(props) => (props.darkMode ? '#ffffff' : '#000000')};
    transition: background-color 0.3s, color 0.3s;
  }
`;



export default GlobalStyles;

import { styled } from '@mui/system';
import { TextField, Table, TableCell } from '@mui/material';


export const Container = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  maxWidth: '600px',
  margin: 'auto',

 
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1),
    maxWidth: '100%',
  },
}));

// Top bar component for search and buttons
export const TopBar = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(2),

  // Responsive behavior for mobile devices
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(1),
  },
}));


export const SearchBar = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  width: '100%',

  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(1),
  },
}));


export const StyledTable = styled(Table)(({ theme }) => ({
  minWidth: 650,

  
  [theme.breakpoints.down('sm')]: {
    minWidth: '100%',
  },
}));


export const CityCell = styled(TableCell)(({ theme }) => ({
  textAlign: 'center',

  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
}));

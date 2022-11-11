import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  page: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    boxShadow: '0px 0px 15px rgba(5, 123, 233, 1.0)',
    borderRadius: '1.5rem',
  },
  avatar: {
    margin: '0.5rem',
    backgroundColor: 'red',
  },
  form: {
    width: '100%',
    marginTop: '1.5rem',
    display: 'flex',
    justifyContent: 'center',
  },
  submitBtn: {
    margin: "1.5rem 0 0.5rem",
    backgroundColor: 'var(--secondary-color)',
    color: "#FFF",
    '&:hover': {
      backgroundColor: '#FFF',
      color: 'var(--secondary-color)',
      border: '2px solid var(--secondary-color)',
      padding: '4px 14px',
      transition: 'all 0s ease-in-out'
    }
  },
  google: {
    marginBottom: '2rem',
    backgroundColor: 'var(--black-color)',
    color: '#FFF',
    '&:hover': {
      backgroundColor: '#FFF',
      color: 'var(--black-color)',
      border: '2px solid var(--black-color)',
      padding: '4px 14px',
      transition: 'all 0s ease-in-out'
    }
  },
});
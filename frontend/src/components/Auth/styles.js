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
    gap: '1rem',
  },
  submitBtn: {
    margin: "1.5rem 0 0.5rem",
    backgroundColor: 'var(--secondary-color)',
    color: "#FFF",
    '&:hover': {
      backgroundColor: '#FFF',
      color: 'var(--secondary-color)'
    }
  },
  google: {
    marginBottom: '1rem'
  },
});
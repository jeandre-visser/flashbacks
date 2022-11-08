import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  div: {
    padding: '1rem',
    boxShadow: '0px 0px 15px rgba(5, 123, 233, 1.0)',
    borderRadius: '1.5rem',
  },
  p: {
    marginBottom: '0.5rem',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '0.5rem'
  },
  fileInput: {
    width: '100%',
    margin: '12px 0',
  },
  btn: {
    marginBottom: "0.5rem",
    backgroundColor: 'var(--secondary-color)',
    color: "#FFF",
    fontWeight: '600',
    '&:hover': {
      backgroundColor: '#FFF',
      color: 'var(--secondary-color)'
    }
  },
  photo: {
    backgroundColor: "var(--yellow-color)",
    '&:hover': {
      backgroundColor: '#FFF',
      border: '2px solid var(--yellow-color)',
      padding: '4px 14px',
      color: 'var(--yellow-color)',
      transition: '0s all ease-in-out'
    }
  }
}));
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  btn: {
    color: 'var(--secondary-color)'
  },
  image: {
    height: 0,
    paddingTop: '65%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '1.5rem',
    height: '100%',
    position: 'relative',
  },
  heading: {
    position: 'absolute',
    top: '15px',
    left: '20px',
    color: '#FFF',
  },
  edit: {
    position: 'absolute',
    top: '15px',
    right: '0',
    color: '#FFF',
  },
  grid: {
    display: 'flex',
  },
  info: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
  },
  title: {
    padding: '10px 15px',
    marginTop: '0.5rem',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-start',
    padding: '10px 15px',
    margin: '5px 8px',
  },
});
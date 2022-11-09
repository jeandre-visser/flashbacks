import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  btn: {
    color: 'var(--secondary-color)'
  },
  image: {
    height: 0,
    paddingTop: '55%',
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
  overlay: {
    position: 'absolute',
    top: '15px',
    left: '20px',
    color: '#FFF',
  },
  overlay2: {
    position: 'absolute',
    top: '15px',
    right: '10px',
    color: '#FFF',
  },
  grid: {
    display: 'flex',
  },
  info: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 12px',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-start',
    padding: '10px 15px',

  },
});
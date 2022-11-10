import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 20,
    margin: '15px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '15px',
    backgroundColor: '#057be9',
    marginBottom: '4rem'
  },
  [theme.breakpoints.down('xs')]: {
    main: {
      flexDirection: 'column',
      
    }
  }
}));
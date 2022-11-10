import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
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
  image: {
    marginLeft: '15px',
    width: '200px'
  },
}));
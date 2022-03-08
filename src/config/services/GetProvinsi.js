import store from '../redux/Store';
import send from './Config'

const GetProvinsi = () => {
  const sender = send.get('prov.json')
  .then(res => {
    console.log(res.data)
    return res.data
    
  })
  .catch(err => {
    store.dispatch({type: 'SET_ISNOTIF',tipe:'error', value:'Komunikasi ke server bermasalah, coba lagi nanti' })
    store.dispatch({type: 'SET_ISLOADING', value:false })
  })
  return sender
}

export default GetProvinsi
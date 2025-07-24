import {useEffect, useState} from 'react'
import axiosInstance from '../../axiosInstance'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Dashboard = () => {
    // const [ticker, setTicker] = useState('')
    // const [error, setError] = useState()
    // const [loading, setLoading] = useState(false)
    // const [plot, setPlot] = useState()
    // const [ma100, setMA100] = useState()
    // const [ma200, setMA200] = useState()
    // const [prediction, setPrediction] = useState()
    // const [mse, setMSE] = useState()
    // const [rmse, setRMSE] = useState()
    // const [r2, setR2] = useState()

    const accessToken = localStorage.getItem('access_token')

    useEffect(()=>{
        const fetchProtectedData = async () =>{

            try{
                const response = await axiosInstance.get('/protected-view/');
                console.log('Success: ',response.data);
            }catch(error){
                console.error('Error fetching data:', error)
            }
        }
        fetchProtectedData();
    }, [])


  return (
    <div className='container'>
       Dashboard
    </div>
  )
}

export default Dashboard
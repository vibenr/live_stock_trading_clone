
import axios from 'axios'
import { useState, useEffect, useMemo } from 'react'
import NewsCard from "../Components/GridCard"
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';





function App()
{
  const styles = {
   
  }
  
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false)

  const url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=RELIANCE.BSE&outputsize=full&apikey=L563PCHF4XGY6BZE"

  // const location = useLocation();
  // console.log(location);

  useMemo(() =>
  {
    const fetchData = async () =>
    {
      setLoading(true);
      const response = await axios.get(url);
      setData(response.data)
      setLoading(false)

    }

    fetchData()
  }, [])

  if (data)
  {
    console.log(data);
  }


  return (
    <>
      <Typography variant = "h2" align = "center" color = "textPrimary" style = {styles.heading} gutterBottom >Live Stock Price</Typography>
    </>
  );
}

export default App;

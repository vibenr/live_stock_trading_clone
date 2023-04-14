
import axios from 'axios'
import { useState, useEffect, useMemo } from 'react'
import NewsCard from "../Components/GridCard"
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';





function App()
{
  const styles = {
    gridStyle: {
     justifyContent: 'center', 
     marginLeft: '2rem'
    }, 
    heading: {
      marginTop: '2rem'
    }
  }
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)

  const url = "https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=L563PCHF4XGY6BZE"

  // const location = useLocation();
  // console.log(location);

  useMemo(() =>
  {
    const fetchData = async () =>
    {
      setLoading(true);
      const response = await axios.get(url);
      setData(response.data.feed)
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

    
       
      <Typography variant = "h2" align = "center" color = "textPrimary" style = {styles.heading} gutterBottom >News Data</Typography>
      <Grid container spacing={2} justifyContent="center" style = {styles.gridStyle}> 
      {loading && <h2>Loading.....</h2>}
      {data && data.map((item) =>
          (
            <Grid item md = {4} sm = {6} xs = {12}   >
            <NewsCard title = {item.title} url = {item.banner_image} article_link = {item.url} />
            </Grid>
          ))}

      </Grid>
        

    </>
  );
}

export default App;

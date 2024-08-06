import "./InfoBox.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function InfoBox({info}){
    const INIT_URL = "https://media.istockphoto.com/id/94330303/photo/one-eighty-degree-big-sky.webp?b=1&s=170667a&w=0&k=20&c=ZHKa_JmWxcizvU4h-_yDi-akAc63hcMLuziTEMZdHaE=";

    const HOT_URL = "https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.webp?b=1&s=170667a&w=0&k=20&c=3pJ8IywW-9H-bcZ2XNGG0EaKwYiWD3XdMLC-mAC6dFI=";
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q09MRCUyMFdFQVRIRVJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://media.istockphoto.com/id/1225022383/photo/rain-on-umbrella-concept-for-bad-weather-winter-or-protection.webp?b=1&s=170667a&w=0&k=20&c=vTys5XlLZX198MCHD9tOW8hnrJ5U6RQz0NX8Fy0VASU=";

    return(
        <div className="InfoBox">
    <div className="cardContainer">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL:info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>  
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp. = {info.tempMin}&deg;C</p>      
          <p>Max Temp. = {info.tempMax}&deg;C</p>
          <p>The Weather can be described as <b>{info.weather}</b> and feels like = {info.feelsLike}&deg;C</p>      
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
    );
}
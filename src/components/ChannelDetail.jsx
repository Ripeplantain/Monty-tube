import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box} from '@mui/material';
import {Channel, Videos } from './';
import { fetchApiData } from '../utils/fetchData';
import { demoProfilePicture } from '../utils/constant';

const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState([]);
  const [channelVideos, setChannelVideos] = useState([]);
  
  const { id } = useParams();
  
  useEffect(()=>{
    fetchApiData(`channels?part=snippet,statistics&id=${id}`)
    .then((data)=>setChannelDetail(data?.items[0]))

    fetchApiData(`search?channelId=${id}&part=snippet`)
    .then((data)=>setChannelVideos(data?.items))
  },[id])

  return (
    <Box minHeight="91.2vh">
        <Box>
          <div 
            style={{
              background:`url(${channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture})`,
              backgroundSize:'cover',
              backgroundPosition:'center',
              // backgroundRepeat:'no-repeat',
              zIndex:10,
              height:'500px',
            }}
          />
          <Channel channelDetail={channelDetail} marginTop='-70px' />
        </Box>

        <Box display="flex" p="2" >
            <Box sx={{mr:{sm:'100px'}}}/>
            <Videos videos={channelVideos} />
        </Box>
    </Box>
  )
}

export default ChannelDetail


import { useState, useEffect} from 'react';
import { Box, Stack, Typography} from '@mui/material';
import { Sidebar, Videos } from '../components';
import { fetchApiData  } from '../utils/fetchData';



const Feed = () => {

  const [ selectCatergory, setSelectCatergory ] = useState('New');
  const [ videos, setVideos ] = useState([]);

  useEffect(() => {
    setVideos([]);

    fetchApiData(`search?part=snippet&q=${selectCatergory}`)
      .then((data) => setVideos(data.items))
    }, [selectCatergory]);
  

  return (
    <Stack
        sx={{ flexDirection: {sx:"column", md:"row" }}}
        >
        <Box sx={{ height: {sx: 'auto', md: '91.2vh'},
            borderRight:'1px solid #3d3d3d', px: {sx:0, md:2}
          }}>

          <Sidebar 
                selectCatergory={selectCatergory} 
                setSelectCatergory={setSelectCatergory}
            />
          
          <Typography 
              className='copyright'
              variant='body2'
              sx={{ mt:1.5,
                color:'#fff',
              }}
            >
              Copyright 2023 Ausweb
          </Typography>

        </Box>


        <Box p={2} 
            sx={{
              overflowY:"auto",
              height:'90vh', flex:2
            }}
        >
            <Typography 
              variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}}
            >
                {selectCatergory} <span style={{ color:'red' }}>Videos</span>
            </Typography>

            <Videos videos={videos} />
        </Box>
    </Stack>
  )
}

export default Feed

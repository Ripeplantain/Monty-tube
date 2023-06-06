import { Stack, Box } from '@mui/material';
import { Video, Channel } from '../components';

const Videos = ({ videos, direction }) => {

  if(!videos?.length) return 'loading...';

  return (
    <Stack
      direction={direction || 'row'}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <Video video={item} />}
          {item.id.channelId && <Channel channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;

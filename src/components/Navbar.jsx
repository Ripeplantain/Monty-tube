import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { logo } from '../utils/constant';
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <Stack direction="row" alignItems="center" p="4" sx={{ position: 'sticky',top:'0', background: '#000', justifyContent: 'space-between'}}>

        <Link to="/" style={{ display: 'flex', alignItems: 'center', margin: '20px 10px'}}>
            <img src={logo} alt="logo" height={45} />
            <Typography variant="h5" sx={{
              color: '#fff',
              fontWeight: 'bold',
              marginLeft: '10px',
            }}>
                Monty Tube
            </Typography>
        </Link>
        <SearchBar />

    </Stack>
  )
}

export default Navbar

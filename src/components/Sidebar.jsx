import { Stack } from '@mui/material';
import { categories } from '../utils/constant';


const Sidebar = ({selectCatergory, setSelectCatergory}) => {


  return (
    <Stack 
        direction="row"
        sx={{
            overflowY:"auto",
            height: {sx: 'auto', md: '95%'},
            flexDirection: { md:"column"},
        }}
     >

        {categories.map((category)=>{
            return (
                <button key={category.name}
                  className="category-btn"
                  style={{
                    background:category.name === selectCatergory && '#FC1503',
                    color:'#fff',
                  }}
                  onClick={()=>setSelectCatergory(category.name)}
                >
                    <span 
                      style={{ 
                        color:category.name === selectCatergory ? 'white':'red',
                        marginRight:'15px'
                      }}
                    >{category.icon}</span>
                    <span
                      style={{
                        opacity:category.name === selectCatergory ? 1:0.8
                      }}
                    >{category.name}</span>
                </button>
            )
        })}
      
    </Stack>
  )
}



export default Sidebar

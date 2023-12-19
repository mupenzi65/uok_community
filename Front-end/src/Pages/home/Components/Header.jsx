import React, { useContext } from 'react'
import { Paper, IconButton, Avatar,Switch,styled, useTheme , Divider } from "@mui/material";
import { Search } from "@mui/icons-material";
import Menu from './OptionMenu';
import { Theme } from '../../../App';

const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 40,
    height: 20,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(20px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor:theme === 'dark' ? '#177ddc' : '#1890ff',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 16,
      height: 16,
      borderRadius: 8,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 20 / 2,
      opacity: 1,
      backgroundColor:
        theme === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    },
  }));
  





const Header = () => {
    const {theme,setTheme}=useContext(Theme)
    const OnToggle=()=>{
        setTheme((prev)=>prev ==='light'?'dark':'light')

    }
  return (
    <div>
        <div className={`flex justify-between ${theme ==='light'? 'bg-[#350D36]':'bg-primary'} `}>
            <div className='mt-5 ml-[230px]'>
            <input
              type="text"
              className={`border text-white md:w-[600px] w-[250px] mb-3 h-[40px]  ${theme ==='light'? 'bg-[#350D36]':'bg-primary'} rounded-3xl border-slate-500 p-2 mx-1`}
              placeholder="What are you looking for..."
              name=""
              id=""
              
            />
            <IconButton
              type="submit"
              sx={{
                p: "-10px",
                color: "white",
                marginLeft: "-52px",
                position: "absolute",
              }}
            >
              <Search       />
            </IconButton>
            </div>
            <div className='mt-7'>
             <AntSwitch onChange={OnToggle} />
            </div>
           
            <div className='mt-5 mr-4'>
                <Menu />
            </div>

        </div>
     
    </div>
  )
}

export default Header
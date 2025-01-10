import { Button,TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

export default function Search({setSearchText,setSelectedType}) {
  const handleChange = (event) => {
    setSelectedType(prev=>prev=event.target.value)
  }
  const handleSearch=()=>{
    setSearchText(prev=>prev=document.getElementById("search").value)
  }
  return (
    <>
      <div className='searchp' style={{padding:"10px"}}>
          <TextField
              id="search"
              label="Search field"
              type="search"
              variant="filled"
          />
          <Button variant="outlined" onClick={handleSearch} sx={{color:"Aquamarine"}}><SearchIcon/></Button> 
      </div>
      <div className='searchp' style={{padding:"10px"}}>
        <Button onClick={handleChange} value="movie" sx={{color:"Aquamarine"}}>Movies</Button>
        <Button onClick={handleChange} value="tv" sx={{color:"Aquamarine"}}>TV Series</Button>
      </div>
    </>
  )
}

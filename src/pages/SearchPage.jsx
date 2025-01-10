import React from 'react'
import { Content } from '../components/Content';
import { useState } from 'react';
import Search from '../components/Search';

export const SearchPage = () => {
  const [searchText,setSearchText]=useState("")
  const [selectedType,setSelectedType]=useState("movie")
  const urlSearch =`https://api.themoviedb.org/3/search/${selectedType}?api_key=${import.meta.env.VITE_API_KEY}`;
  
  
  return (
    <div style={{minHeight:"100vw"}}>
      <Search setSearchText={setSearchText} setSelectedType={setSelectedType}/>
      <Content url={urlSearch+'&query='+searchText} type={selectedType}/>
    </div>
  )
}


"use client"
import Image from "next/image";
import Header from "@/components/Header";
import Dashboard from "@/components/Dashboard";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";


export default function Home() {
  const [assets, setAssets] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  console.log(searchTerm)
  const getData = async() => {
    try{
      const data = await fetch(`/api/assets?${searchTerm}`);
      const media = await data.json();
      console.log(media)
      setAssets(media)
    }catch(error){
      console.log(error)
    }
  }
  
  useEffect(() => {
    getData();
  },[searchTerm])
  
  const onHandleNewUpload = (asset) => {
    setAssets(prev => [asset, ...prev])
  }

  return (
    <div >
      <Header />
      <div className="main-container">
        <Sidebar onHandleNewUpload={onHandleNewUpload} />
        <Dashboard assets={assets} searchTerm={searchTerm} setSearchTerm={setSearchTerm}  />
      </div>
    </div>
  );
}

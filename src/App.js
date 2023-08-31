import { useEffect, useState } from 'react';
import { fetchTopAlbums } from './api/api';
import './App.css';
import Card from './components/Card/Card';
import NavBar from './components/NavBar/NavBar';
import Poster from './components/Poster/Poster';
import Section from './components/Section/Section';

function App() {

  const [topAlbumData, setTopAlbumData] = useState([])

  const generateTopAlbumData = async() => {
    try{
    const data = await fetchTopAlbums();
    setTopAlbumData(data);
    }catch(err){
      console.log(`Error`, err);
    }
  }

  useEffect(()=>{
    generateTopAlbumData();
  },[])

  return (
    <div className="App">
      <NavBar/>
      <Poster/>
      <div className='sectionWrapper'>
        <Section type="album" title="Top Album" data={topAlbumData}/>
        <Section type="album" title="Top Album" data={topAlbumData}/>
        <Section type="album" title="Top Album" data={topAlbumData}/>
      </div>
    </div>
  );
}

export default App;

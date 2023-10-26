import { useEffect, useState } from 'react';
import { fetchNewAlbums, fetchSongs, fetchTopAlbums } from './api/api';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Poster from './components/Poster/Poster';
import Section from './components/Section/Section';
import FAQAccordion from './components/FAQAccordion/FAQAccordion';
import Line from './components/Line/Line';

function App() {

  const [songsData, setSongsData] = useState([]);

  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);

  const generateTopAlbumData = async() => {
    try{
    const data = await fetchTopAlbums();
    setTopAlbumData(data);
    }catch(err){
      console.log(`Error`, err);
    }
  }

  const generateNewAlbumData = async() => {
    try{
    const data = await fetchNewAlbums();
    console.log('New Album Data', data);
    setNewAlbumData(data);
    }catch(err){
      console.log(`Error`, err);
    }
  }

  const generateAllSongsData = async()=>{
    try{
      const res = await fetchSongs();
      setSongsData(res);
    }catch(err){
      console.error(err);
    }
  }

  useEffect(()=>{
    generateTopAlbumData();
    generateNewAlbumData();
    generateAllSongsData();
    
  },[]);

  return (
    <div className="App">
      <NavBar/>
      <Poster/>
      <div className='sectionWrapper'>
        <Section type="album" title="Top Album" data={topAlbumData}  />
        <Section type="new" title="New Album" data={newAlbumData} />
        <Line/>
        <Section type="song" title="Songs" data={songsData} />
        <FAQAccordion/>
      </div>
    </div>
  );
}

export default App;

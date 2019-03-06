import React, { Component } from 'react';
import './App.css';
import Video from './components/Video';
import NavBar from './components/NavBar';
import FeelingQuestion from './components/FeelingQuestion';
import ListMusic from './components/ListMusic';
import WhyReact from './components/WhyReact';
import AboutUs from './components/AboutUs';
import Bottom from './components/Bottom';
import SearchScreen from './container/SearchScreen';
import PlayList from './container/PlayListScreen';
import TopTenScreen from './container/TopTenScreen';
import HomeScreen from './container/HomeScreen';
import Artist from './components/Artist';
import ArtistScreen from './container/ArtistScreen';
import PlayListScreen from './container/PlayListScreen';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PlayListScreen/>
      </div>
    );
  }
}

export default App;

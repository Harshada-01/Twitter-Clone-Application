import React from 'react'
import './Widgets.css'
import SearchIcon from '@mui/icons-material/Search';
import {TwitterTimelineEmbed, TwitterTweetEmbed} from 'react-twitter-embed'
import { Hidden } from '@mui/material';

const Widgets = () => {
  return (
    <div className='widgets'>
      <div className='widgets_input'>
        <SearchIcon className='widgets_searchIcon' />
        <input type='text' placeholder='SearchTwitter' />
      </div>
      <div className='widgets_wedgetContainer'>
        <h2>What's happening</h2>
      
      <TwitterTweetEmbed 
      tweetId={'1557187138352861186'} 
      />

      <TwitterTimelineEmbed 
      sourceType='profile'
      screenName='elonmusk'
      options={{height : 400}}
      />
      </div>
    </div>
  )
}

export default Widgets
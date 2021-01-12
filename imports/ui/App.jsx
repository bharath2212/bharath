import React from 'react';
import {DubbedList} from './DubbedList';
import {Foot} from './Foot'
import {Heading} from './Heading'
import {MenuItems} from './MenuItems'
import {ProduceItems  } from './ProduceItems'git

export const App = () => (
  <div>
    <div className="top">
      <MenuItems />
      <Heading /> 
    </div>
    <div className="middle">   
      <ProduceItems />
      <DubbedList />
    </div>
    <div className='bottom'>
      <Foot /> 
    </div>
  </div>
);  

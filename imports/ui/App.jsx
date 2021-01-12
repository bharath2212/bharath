import React from 'react';
import {DubbedList} from './DubbedList';
import {Foot} from './Foot'
import {Heading} from './Heading'
import {MenuItems} from './MenuItems'
import {ProduceItems  } from './ProduceItems'
import {Time} from './Time'

export const App = () => (
  <div>
    <div className="top">
      <MenuItems />
      <Heading /> 
    </div>
    <div className="middle">   
      <Time/>
      <ProduceItems />
      <DubbedList />
    </div>
    <div className='bottom'>
      <Foot /> 
    </div>
  </div>
);  

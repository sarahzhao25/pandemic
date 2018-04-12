import React from 'react';
import { Sidebar, Menu } from 'semantic-ui-react';
import PlayerMenu from './PlayerMenu';

const unusedCityCards = {
  Istanbul: {
    color: 'black',
    name: 'Istanbul'
  },
  Moscow: {
    color: 'black',
    name: 'Moscow'
  },
  Tokyo: {
    color: 'red',
    name: 'Tokyo'
  },
  SanFrancisco: {
    color: 'blue',
    name: 'San Francisco'
  },
  Madrid: {
    color: 'blue',
    name: 'Madrid'
  },
  StPetersburg: {
    color: 'black',
    name: 'St. Petersburg'
  },
  Khartoum: {
    color: 'yellow',
    name: 'Khartoum'
  },
  London: {
    color: 'blue',
    name: 'London'
  }
}

const players = {
  1: {
    active: true,
    currentCity: 'Atlanta',
    name: 'David',
    role: 'Contingency Planner',
    currentHand: [
      'ref to Istanbul',
      'ref to Moscow'
    ]
  },
  2: {
    active: false,
    currentCity: 'Atlanta',
    name: 'Sam',
    role: 'Dispatcher',
    currentHand: [
      'ref to Tokyo',
      'ref to SanFrancisco'
    ]
  },
  3: {
    active: false,
    currentCity: 'Atlanta',
    name: 'Sarah',
    role: 'Researcher',
    currentHand: [
      'ref to Madrid',
      'ref to StPetersburg'
    ]
  },
  4: {
    active: false,
    currentCity: 'Atlanta',
    name: 'Jon',
    role: 'Quarantine Specialist',
    currentHand: [
      'ref to Khartoum',
      'ref to London'
    ]
  }
}


const SidebarCards = (props) => {
  //const { players } = props;
  const playerKeys = Object.keys(players);
  return (
    <Sidebar
    as={Menu}
    direction="right"
    visible={true}
    icon="labeled"
    inverted
    vertical
    width="wide"
    > {
        playerKeys.map(playerKey => (
          <PlayerMenu
          key={playerKey}
          playerKey = {playerKey}
          players={players}
          unusedCityCards={unusedCityCards}
          />
        ))
      }
    </Sidebar>
)};

export default SidebarCards;

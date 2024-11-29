import React from 'react';
import { Segment, Header, List, Icon } from 'semantic-ui-react';
import './Station.css'; // Import the CSS for custom styling

// Define the type for the station
interface Station {
  name: string;
  description: string;
}

interface RoadmapProps {
  stations: Station[];
}

const Roadmap: React.FC<RoadmapProps> = ({ stations }) => {
  return (
    <Segment className="roadmap-segment">
      <Header as='h2' textAlign='center'>
        Metro Line-2 Route Map
      </Header>
      <div className="roadmap-container">
        <div className="line"></div>
        <List divided relaxed className="stations-list">
          {stations.map((station, index) => (
            <List.Item key={index} className={`station-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <Icon name='map marker alternate' color='teal' />
              <List.Content>
                <List.Header style={{color: "teal"}}>{station.name}</List.Header>
                <List.Description>{station.description}</List.Description>
              </List.Content>
            </List.Item>
          ))}
        </List>
      </div>
    </Segment>
  );
};

// Example usage
const stations: Station[] = [
  { name: 'MTR Chennai Central', description: 'Starting point of the metro and a key hub connecting rail and metro transit.' },
  { name: 'Egmore Metro', description: 'A vital interchange station offering seamless connectivity to suburban rail.' },
  { name: 'Nehru Park', description: 'Terminal station known for its proximity to cultural and recreational spots.' },
  { name: 'Kilpauk', description: 'A bustling stop connecting residential and commercial zones.' },
  { name: "Pachaiyappa's College", description: 'Final destination serving educational institutions and nearby areas.' },
  { name: 'Shenoy Nagar', description: 'A vibrant station near parks and prominent residential neighborhoods.' },
  { name: 'Anna Nagar East', description: 'A key stop providing access to the bustling Anna Nagar locality.' },
  { name: 'Anna Nagar Tower', description: 'A station surrounded by iconic landmarks and shopping avenues.' },
  { name: 'Thirumangalam', description: 'A major stop close to business hubs and residential complexes.' },
  { name: 'Koyambedu', description: 'An essential station near the largest bus terminal in Chennai.' },
  { name: 'CMBT Metro', description: 'Strategically located at the Chennai Mofussil Bus Terminus, a major transit hub.' },
  { name: 'Arumbakkam', description: 'A convenient stop catering to the needs of residents and local businesses.' },
  { name: 'Vadapalani', description: 'A prominent station near the film studios and vibrant shopping areas.' },
  { name: 'Ashok Nagar', description: 'Serving a bustling residential neighborhood with easy metro access.' },
  { name: 'Ekkattuthangal', description: 'Close to industrial estates and business parks, making it a key stop for professionals.' },
  { name: 'Arignar Anna Alandur Metro', description: 'A significant junction for passengers transferring between metro lines.' },
  { name: 'St. Thomas Mount Metro', description: 'A crucial terminal for commuters accessing suburban rail and metro systems.' }
];

const StationList2: React.FC = () => {
  return (
    <div>
      <Roadmap stations={stations} />
    </div>
  );
};

export default StationList2;
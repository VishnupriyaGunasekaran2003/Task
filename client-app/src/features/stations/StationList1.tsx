import React from 'react';
import { Segment, Header, List, Icon } from 'semantic-ui-react';
import './Station.css'; 

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
        Metro Line-1 Route Map
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
    { name: 'Wimco Nagar Depot Metro', description: 'This station serves as the operational hub and starting point of the metro line.' },
    { name: 'Wimco Nagar Metro', description: 'A key station for commuters traveling to the industrial zones nearby.' },
    { name: 'Thiruvotriyur Metro', description: 'Conveniently located near residential and commercial areas in Thiruvotriyur.' },
    { name: 'Thiruvotriyur Theradi Metro', description: 'This stop offers easy access to local markets and shopping zones.' },
    { name: 'Kaladipet Metro', description: 'Known for its proximity to historic temples and cultural landmarks.' },
    { name: 'Tollgate Metro', description: 'Strategically positioned near highway intersections for easy accessibility.' },
    { name: 'New Washermenpet Metro', description: 'A bustling station surrounded by schools and local businesses.' },
    { name: 'Tondiarpet Metro', description: 'An important stop connecting residential neighborhoods to the metro line.' },
    { name: 'Sir Thiyagaraya College Metro', description: 'Adjacent to the college, this station is a hub for students and faculty.' },
    { name: 'Washermenpet Metro', description: 'A busy station serving as a gateway to nearby residential areas.' },
    { name: 'Mannadi', description: 'Located near the commercial trading centers and bustling markets.' },
    { name: 'Highcourt', description: 'A prominent stop for accessing legal and administrative offices in Chennai.' },
    { name: 'MTR Chennai Central', description: 'Integrated with the main railway station for seamless intercity travel.' },
    { name: 'Government Estate', description: 'A vital stop for commuters visiting government offices and institutions.' },
    { name: 'LIC', description: 'Situated in the heart of the city, near key business districts.' },
    { name: 'Thousand Lights', description: 'A popular station near cultural and entertainment hubs.' },
    { name: 'AG-DMS', description: 'Close to prominent business centers and shopping destinations.' },
    { name: 'Teynampet', description: 'A convenient station near luxury hotels and office spaces.' },
    { name: 'Nandanam', description: 'This station connects to residential and business areas in Nandanam.' },
    { name: 'Saidapet Metro', description: 'A bustling stop near local markets and temples.' },
    { name: 'Little Mount', description: 'Known for its proximity to IT parks and commercial areas.' },
    { name: 'Guindy', description: 'A crucial station for accessing the industrial hub and Guindy National Park.' },
    { name: 'Arignar Anna Alandur Metro', description: 'The interchange point for multiple metro lines.' },
    { name: 'Nanganallur Road', description: 'Located near residential neighborhoods and community spaces.' },
    { name: 'Meenambakkam', description: 'A key station near the domestic airport terminal.' },
    { name: 'Chennai International Airport', description: 'The metro’s endpoint providing direct access to international terminals.' }
];

const StationList1: React.FC = () => {
  return (
    <div>
      <Roadmap stations={stations} />
    </div>
  );
};

export default StationList1;
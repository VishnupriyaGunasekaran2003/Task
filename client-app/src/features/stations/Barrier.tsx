import { Container, Header, Segment, Icon, List } from 'semantic-ui-react';

const Barrier = () => {
  return (
    <Container style={{ marginTop: '2rem' }}>
      {/* Header Section */}
      <Segment raised color="teal" textAlign="center">
        <Header as="h2" icon textAlign="center" color="teal">
          <Icon name="universal access" color='teal' />
          Facilities for Differently Abled People
          <Header.Subheader>
            Ensuring Universal Access for all at Metro Stations
          </Header.Subheader>
        </Header>
      </Segment>

      {/* Content Section */}
      <Segment padded>
        <Header as="h3" color="teal">
          Every metro station is designed for universal access from the street level to the platform level and within the trains. The details are as given below:
        </Header>
        <List bulleted size="large">
          <List.Item>
            Drop-off bays with kerb ramps at the street level and kerb ramps connecting from the road level to the footpath level, in proximity to the lift entries.
          </List.Item>
          <List.Item>
            Tactile signs from the drop-off bays to the station lift entry.
          </List.Item>
          <List.Item>
            Dedicated parking space close to one or more station entries.
          </List.Item>
          <List.Item>
            Entry ramps with a 1:12 slope, connecting from street level to the footpath level and to the podium level.
          </List.Item>
          <List.Item>
            Tactile paths for visually challenged individuals from station entry at street level to concourse and ultimately to platform level through the ticketing office.
          </List.Item>
          <List.Item>Dedicated low-height ticket counters at concourse level.</List.Item>
          <List.Item>Dedicated wide AFC gates for wheelchair access.</List.Item>
          <List.Item>
            Continuous handrails on both sides of the staircases and at a height of 900mm.
          </List.Item>
          <List.Item>
            Lifts from street to concourse and from concourse to platform level.
          </List.Item>
          <List.Item>
            Dedicated seating areas at platform level with grab rails.
          </List.Item>
          <List.Item>
            100mm wide warning strips at 600mm from the platform edge at platform level.
          </List.Item>
          <List.Item>Low-height drinking water facilities.</List.Item>
          <List.Item>
            Chime and audio indications during the arrival/departure of trains inside the Metro stations.
          </List.Item>
          <List.Item>
            Differently abled toilets at concourse/platform level.
          </List.Item>
          <List.Item>Tactile paths leading to differently abled toilets.</List.Item>
          <List.Item>
            Colour-contrasting strips at the beginning and end of staircases.
          </List.Item>
          <List.Item>
            Identification signage on the door for wheelchair-accessible coaches.
          </List.Item>
          <List.Item>Computer-based public announcement system.</List.Item>
          <List.Item>Long stop buttons inside trains.</List.Item>
          <List.Item>Dedicated space for wheelchairs inside trains.</List.Item>
          <List.Item>Braille system and provision of handrails inside lifts.</List.Item>
          <List.Item>Provision of grooving on staircases.</List.Item>
          <List.Item>Lower-height lift panels.</List.Item>
          <List.Item>
            Provision of wheelchairs and stretchers at the Station Control Room.
          </List.Item>
          <List.Item>Installation of loop induction units.</List.Item>
          <List.Item>Signage at appropriate locations.</List.Item>
        </List>
      </Segment>
    </Container>
  );
};

export default Barrier;
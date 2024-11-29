import { Container, Grid, Header, Segment, List, Icon, Divider } from 'semantic-ui-react';

const Women = () => {
  return (
    <Container style={{ marginTop: '2rem' }}>
      <Header as="h2" icon textAlign="center" color="teal">
        <Icon name="female" />
        Facilities for Women Passengers
        <Header.Subheader>
          Our metro stations are equipped with special facilities to ensure the safety and comfort of women passengers.
        </Header.Subheader>
      </Header>

      <Segment raised>
        <p>
          The following facilities have been specifically designed to ensure the safety, security, and comfort of women passengers at our metro stations:
        </p>

        <Grid columns={1} stackable>
          <Grid.Row>
            <Grid.Column>
              <List>
                <List.Item>
                  <Icon name="check" />
                  Women only Coach.
                </List.Item>
                <List.Item>
                  <Icon name="check" />
                  CCTV Cameras installed at all metro stations for enhanced security.
                </List.Item>
                <List.Item>
                  <Icon name="check" />
                  Customer Care Facility available at all stations.
                </List.Item>
                <List.Item>
                  <Icon name="check" />
                  Security Staff deployed at all metro stations to ensure safety.
                </List.Item>
                <List.Item>
                  <Icon name="check" />
                  Special Women Security personals (Pink Squad), trained in Martial arts, deployed for routine checks to ensure women’s safety and prevent male commuters from traveling in women-only coaches.
                </List.Item>
                <List.Item>
                  <Icon name="check" />
                  Women's Helpline: 155370, available for immediate assistance.
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Divider />

      <Header as="h3" textAlign="center" color="teal">
        Commitment to Women’s Safety and Comfort
      </Header>
      <Segment raised textAlign="center">
        <p>
          We are committed to providing a safe and secure travel experience for women passengers. With dedicated coaches, CCTV surveillance, security staff, and a specially trained Pink Squad, we ensure the highest levels of protection for women commuters. Our Women's Helpline is also available to assist in case of emergencies.
        </p>
      </Segment>
    </Container>
  );
};

export default Women;
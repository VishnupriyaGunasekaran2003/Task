import { Button, Container, Grid, Header, Icon, Segment } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

const Parking = () => {
  const navigate = useNavigate();

  const downloadPDF = (fileName: string) => {
    const link = document.createElement('a');
    link.href = `/pdfs/${fileName}`;
    link.download = fileName;
    link.click();
  };

  const navigateToPage = (path: string) => {
    navigate(path);
  };

  return (
    <Container textAlign="center" style={{ marginTop: '2rem' }}>
      <Segment raised>
        <Header as="h2" icon textAlign="center" color="teal">
          <Icon name="car" color='teal'/>
          Parking Information
          <Header.Subheader>
            Explore detailed information about parking facilities and guidelines.
          </Header.Subheader>
        </Header>
      </Segment>

      <Segment padded>
        <Grid stackable columns={2} textAlign="center">
          <Grid.Row>
            <Grid.Column>
              <Button
                color="teal"
                size="large"
                icon
                labelPosition="left"
                onClick={() => downloadPDF('/pdfs/Parking-Tariff.pdf')}
              >
                <Icon name="file pdf" />
                Parking Tariff
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button
                color="teal"
                size="large"
                icon
                labelPosition="left"
                onClick={() => downloadPDF('/pdfs/Parking-Facilities.pdf')}
              >
                <Icon name="file pdf" />
                Parking Facility at Stations
              </Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Button
                color="teal"
                size="large"
                icon
                labelPosition="left"
                onClick={() => navigateToPage('https://commuters-data.chennaimetrorail.org/parkingflow')}
              >
                <Icon name="road" />
                Parking Flow
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button
                color="teal"
                size="large"
                icon
                labelPosition="left"
                onClick={() => navigateToPage('https://commuters-data.chennaimetrorail.org/parkingavailability')}
              >
                <Icon name="warehouse" />
                Parking Capacity & Availability
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  );
};

export default Parking;
import { Container, Grid, Header, Segment, List, Icon, Divider } from 'semantic-ui-react';

const Security = () => {
  return (
    <Container style={{ marginTop: '2rem' }}>
      <Header as="h2" icon textAlign="center" color='teal'>
        <Icon name="shield" color='teal'/>
        Metro Security Measures
        <Header.Subheader>
          Ensuring your safety and security is our top priority. Here are the measures in place at every metro station.
        </Header.Subheader>
      </Header>

      {/* CCTV Surveillance Section */}
      <Segment raised>
        <Header as="h3" textAlign="center" color="teal">
          CCTV Surveillance
        </Header>
        <Grid columns={1} textAlign="center">
          <Grid.Row>
            <Grid.Column>
              <p>
                Our metro stations and trains are equipped with CCTV cameras for 24/7 surveillance. This ensures continuous monitoring of all areas, enhancing the safety of passengers and preventing any unlawful activity.
              </p>
              <p>
                CCTV footage is monitored by security personnel in real-time, and is recorded for later reference if needed.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Divider />

      {/* Baggage Scanning Section */}
      <Segment raised>
        <Header as="h3" textAlign="center" color="teal">
          Baggage Scanning
        </Header>
        <Grid columns={1} textAlign="center">
          <Grid.Row>
            <Grid.Column>
              <p>
                All baggage is subjected to scanning at the entry points of the metro stations. This includes bags, backpacks, and any items that might pose a security threat.
              </p>
              <p>
                The scanning process is quick and efficient, ensuring that passengers can proceed to their trains without any delays while keeping safety as a priority.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Divider />

      {/* Items Not to Carry Section */}
      <Segment raised>
        <Header as="h3" textAlign="center" color="teal">
          Items Not to Carry
        </Header>
        <Grid columns={1} textAlign="left">
          <Grid.Row>
            <Grid.Column style={{margin:"2rem"}}>
              <p>
                The following materials are prohibited from being carried on the metro railway for safety and security reasons:
              </p>
              <List>
                <List.Item>
                  <b>Dangerous Materials:</b>
                  <List.List>
                    <List.Item>- Explosive substances which pose risk of explosion or fire or both;</List.Item>
                    <List.Item>- Gases compressed, liquefied or dissolved under pressure;</List.Item>
                    <List.Item>- Petroleum and other inflammable liquids;</List.Item>
                    <List.Item>- Inflammable solids;</List.Item>
                    <List.Item>- Oxidizing substances;</List.Item>
                    <List.Item>- Poisonous (toxic) substances;</List.Item>
                    <List.Item>- Acids and other corrosives;</List.Item>
                    <List.Item>- Radioactive substances;</List.Item>
                    <List.Item>- Weapons, arms, and ammunition;</List.Item>
                    <List.Item>- Chemical, Biological, Radiological, Nuclear, and Enhanced Conventional Weapons.</List.Item>
                  </List.List>
                </List.Item>

                <List.Item>
                  <b>Offensive Materials:</b>
                  <List.List>
                    <List.Item>- Blood (dried, coagulated, or decomposed, whether human or animal);</List.Item>
                    <List.Item>- Corpses;</List.Item>
                    <List.Item>- Carcasses of dead animals or birds;</List.Item>
                    <List.Item>- Bones (excluding bleached and cleaned bones);</List.Item>
                    <List.Item>- Human skeletons;</List.Item>
                    <List.Item>- Parts of human bodies;</List.Item>
                    <List.Item>- Portable radio devices that could interfere with radio communication networks;</List.Item>
                    <List.Item>- Live animals or birds, with the exception of sniffer dogs used by security personnel.</List.Item>
                  </List.List>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  );
};

export default Security;
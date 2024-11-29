import { Segment, Grid, Header, Button } from "semantic-ui-react";

export default function Download() {
    return (
        <Segment style={{ padding: "3px 4rem 2rem", marginTop: "2rem" }} raised>
      <Grid stackable columns={2}>
        {/* Left Side Content */}
        <Grid.Column width={10} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Header as="h2" color="teal">
            Mobile Applications
          </Header>
          <Header as="h3" style={{ marginTop: "0" }}>
            Effortless City Roaming Begins Now:
          </Header>
          <p style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
            Welcome to Our Metro App. Keep your trip on track with departure times, platform info, and tickets in the palm of your hand.
          </p>
        </Grid.Column>

        {/* Right Side Content */}
        <Grid.Column width={6} textAlign="center">
        <div style={{ marginTop: "2rem" }}>
            <Button as="a" href="https://apps.apple.com/in/app/chennai-metro-rail/id1204693283" target="_blank" style={{ marginRight: "1rem" }}>
              <img src={"/assets/apple.png"} alt="App Store" style={{ height: "50px"}} />
            </Button>
            <hr />
            <Button as="a" href="https://play.google.com/store/apps/details?id=org.chennaimetrorail.appv1" target="_blank">
              <img src="/assets/play.png" alt="Play Store" style={{ height: "50px" }} />
            </Button>
          </div>
        </Grid.Column>
      </Grid>
    </Segment>
    )
}
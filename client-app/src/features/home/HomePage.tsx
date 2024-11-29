import { Link } from "react-router-dom";
import { Button, Container, Header, Image, Segment } from "semantic-ui-react";
import Download from "./Download";

export default function HomePage() {
    return(
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container text>
                <Header as='h1' inverted>
                    <Image size='massive' src='/assets/logo.png' alt='logo' style={{marginBottom: 12}} />
                    Metroease
                </Header>
                <Header as='h2' inverted content='Welcome to MetroEase' />
                <Button as={Link} to='/tickets' size='huge' inverted>
                    Go to MetroEase!
                </Button>
                <Download />
            </Container>
        </Segment>
    )
}
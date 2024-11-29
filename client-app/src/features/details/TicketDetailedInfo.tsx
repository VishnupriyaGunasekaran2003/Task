import { Button, Grid, Icon, Segment } from "semantic-ui-react";
import { Ticket } from "../../app/models/Ticket"
import { Link } from "react-router-dom";

interface Props {
    ticket: Ticket;
}

export default function TicketDetailedInfo({ticket}: Props) {
    return (
        <>
            <Segment.Group style={{padding: '8px'}}>
                <Segment attached='top'>
                    <Grid>
                        <Grid.Column width={1}>
                            <Icon size="large" color="teal" name="info" />
                        </Grid.Column>
                        <Grid.Column width={15}>
                            <p style={{color:"teal"}}>Your transaction is successfully completed</p>
                            <p>From : {ticket.startStation}</p>
                            <p>To : {ticket.destination}</p>
                            <p>Fare :  {ticket.fare}</p>
                            <p>Payment mode : UPI</p>
                            <p>Payment Status : {ticket.paymentStatus}</p>
                        </Grid.Column>
                    </Grid>
                </Segment>
                <Segment attached>
                    <Grid verticalAlign='middle'>
                        <Grid.Column width={1}>
                            <Icon name='calendar' size='large' color='teal'/>
                        </Grid.Column>
                        <Grid.Column width={15}>
                            <span>
                                Booked on : {ticket.date}
                            </span>
                        </Grid.Column>
                    </Grid>
                </Segment>
                <Segment attached>
                    <Grid verticalAlign='middle'>
                        <Grid.Column width={1}>
                            <Icon name='user' size='large' color='teal'/>
                        </Grid.Column>
                        <Grid.Column width={11}>
                            <span>No of Passengers : {ticket.numberOfPassengers}</span>
                        </Grid.Column>
                    </Grid>
                </Segment>
                <Segment attached>
                    <Button.Group widths={2}>
                        <Button basic as={Link} to={`/manage/${ticket.id}`} color="blue"  content="Edit" />
                        <Button basic as={Link} to={'/tickets'} color="grey" content="Cancel" />
                    </Button.Group>
                </Segment>
            </Segment.Group>
        </>
    )
}
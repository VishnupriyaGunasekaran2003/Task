import { Button, Card, Image } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";

export default observer(function TicketDetails() {
    const {ticketStore} = useStore();
    const {selectedTicket: ticket, loadTicket, loadingInitial} = ticketStore;
    const {id} = useParams();

    useEffect(() => {
        if (id) loadTicket(id);
    },[id,loadTicket]);

    if(loadingInitial || !ticket) return <LoadingComponent content="Loading Ticket..." />

    return (
        <Card fluid>
            <Image src="/assets/sqr.png" alt="qr" />
            <Card.Content>
                <p style={{color:"teal"}}>Your transaction is successfully completed</p>
                <Card.Header>
                    <p>From : {ticket.startStation}</p>
                    <p>To : {ticket.destination}</p>
                </Card.Header>
                <Card.Description>
                    <p>Fare :  {ticket.fare}</p>
                    <p>Payment mode : UPI</p>
                    <p>Payment Status : {ticket.paymentStatus}</p>
                    <p>Date : {ticket.date}</p>
                    <p>Number Of Passengers : {ticket.numberOfPassengers}</p>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths={2}>
                    <Button basic as={Link} to={`/manage/${ticket.id}`} color="blue"  content="Edit" />
                    <Button basic as={Link} to={'/tickets'} color="grey" content="Cancel" />
                </Button.Group>
            </Card.Content>
        </Card>
    )
})
import { Button, Card, Image } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
import LoadingComponent from "../../app/layout/LoadingComponent";

export default function TicketDetails() {
    const {ticketStore} = useStore();
    const {selectedTicket: ticket, openForm, cancelSelectTicket} = ticketStore;

    if(!ticket) return <LoadingComponent />

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
                    <Button basic color="blue" onClick={() => openForm(ticket.id)} content="Edit" />
                    <Button basic color="grey" onClick={cancelSelectTicket} content="Cancel" />
                </Button.Group>
            </Card.Content>
        </Card>
    )
}
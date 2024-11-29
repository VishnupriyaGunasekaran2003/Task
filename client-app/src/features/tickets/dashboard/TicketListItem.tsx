import { Button, Icon, Item, Segment } from "semantic-ui-react";
import { Ticket } from "../../../app/models/Ticket"
import { Link } from "react-router-dom";
import { useStore } from "../../../app/stores/store";
import { SyntheticEvent, useState } from "react";

interface Props {
    ticket: Ticket;
}

export default function TicketListItem({ticket}: Props) {
    const {ticketStore} = useStore();
    const {loading, deleteTicket} = ticketStore;
    const [target, setTarget] = useState('');

    function handleDeleteTicket(e: SyntheticEvent<HTMLButtonElement>,id: string) {
        setTarget(e.currentTarget.name);
        deleteTicket(id);
    }

    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item.Header as='h4'>
                        {ticket.startStation} <Icon name="long arrow alternate right" /> {ticket.destination}
                    </Item.Header>
                </Item.Group>
            </Segment>
            <Segment>
                <Item.Group>
                    <Item.Header as='h6'>
                        <Icon name='cart' color="teal" />
                        QR Ticket Amount: {ticket.fare}
                    </Item.Header>
                    <Item.Description>
                        <p>Quantity: {ticket.numberOfPassengers}</p>
                        <p>ORDER#{ticket.id.split('-').pop()}</p>
                    </Item.Description>
                </Item.Group>
            </Segment>
            <Segment clearing>
                
                    <Button 
                        as={Link} 
                        to={`/tickets/${ticket.id}`}
                        color="teal"
                        floated="right"
                        content='View Details'
                    />
                    <Button
                        loading = {loading && target === ticket.id} 
                        name={ticket.id}
                        color="red"
                        floated="right"
                        content='Delete'
                        onClick={(e) => handleDeleteTicket(e, ticket.id)}
                    />
                
            </Segment>
        </Segment.Group>
    )
}
import { Button, Header, Icon, Item, Segment } from "semantic-ui-react";
import { Ticket } from "../../app/models/Ticket";
import { SyntheticEvent, useState } from "react";

interface Props {
    tickets: Ticket[];
    selectTicket: (id: string) => void;
    deleteTicket: (id: string) => void;
    submitting: boolean;
}

export default function TicketList({tickets, selectTicket, deleteTicket, submitting}: Props) {
    const [target, setTarget] = useState('');

    function handleDeleteTicket(e: SyntheticEvent<HTMLButtonElement>,id: string) {
        setTarget(e.currentTarget.name);
        deleteTicket(id);
    }

    return (
        <Segment>
            <Item.Group divided>
                    {tickets.map(ticket => (
                        <Item key={ticket.id}>
                            <Item.Content>
                                <Item.Header as='a' style={{ textDecoration: "none" }} >
                                    <Header as='h3'>{ticket.startStation} <Icon name="long arrow alternate right" /> {ticket.destination}</Header>
                                </Item.Header>
                                <Item.Description>
                                    <Header as='h4'><Icon name='cart' color="teal" /> QR Ticket Amount :  {ticket.fare}</Header>
                                    <Header as='h5'> Quantity : {ticket.numberOfPassengers}</Header>
                                    <span>ORDER#{ticket.id.split('-').pop()}</span>
                                </Item.Description>
                                <Item.Extra>
                                    <Button 
                                        color="teal"
                                        floated="right"
                                        content='View Details'
                                        onClick={() => selectTicket(ticket.id)}
                                    />
                                     <Button
                                        loading = {submitting && target === ticket.id} 
                                        name={ticket.id}
                                        color="red"
                                        floated="right"
                                        content='Delete'
                                        onClick={(e) => handleDeleteTicket(e, ticket.id)}
                                    />
                                </Item.Extra>
                            </Item.Content>
                        </Item>
                    ))}
            </Item.Group>
        </Segment>
    )
}
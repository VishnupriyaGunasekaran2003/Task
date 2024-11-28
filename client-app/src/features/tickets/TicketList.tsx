import { Button, Header, Icon, Item, Segment } from "semantic-ui-react";
import { SyntheticEvent, useState } from "react";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

export default observer(function TicketList() {
    const {ticketStore} = useStore();
    const {deleteTicket, ticketsByDate, loading } = ticketStore;
    const [target, setTarget] = useState('');

    function handleDeleteTicket(e: SyntheticEvent<HTMLButtonElement>,id: string) {
        setTarget(e.currentTarget.name);
        deleteTicket(id);
    }

    return (
        <Segment>
            <Item.Group divided>
                    {ticketsByDate.map(ticket => (
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
                                        as={Link}
                                        to={`/tickets/${ticket.id}`}
                                    />
                                     <Button
                                        loading = {loading && target === ticket.id} 
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
})
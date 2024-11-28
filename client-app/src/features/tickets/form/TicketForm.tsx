import { ChangeEvent, useEffect, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link, useNavigate, useParams } from "react-router-dom";
import {v4 as uuid} from 'uuid';
import LoadingComponent from "../../../app/layout/LoadingComponent";

export default observer(function TickekForm() {
    const {ticketStore} = useStore();
    const { selectedTicket, loading, createTicket, updateTicket, 
        loadTicket, loadingInitial} = ticketStore;
    const {id} = useParams();
    const navigate = useNavigate();

    const [ticket, setTicket] = useState({
        id: '',
        startStation: '',
        destination: '',
        numberOfPassengers: 0,
        date: '',
        fare: 0.0,
        paymentStatus: '',
        ticketQr: ''
    });

    useEffect(() => {
        if(id) loadTicket(id).then(ticket => setTicket(ticket!));
    },[id, loadTicket]);

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) 
    {
        const {name, value} = event.target;
        setTicket({...ticket, [name]: value})
    }

    function handleSubmit() {
        if (!ticket.id) {
            ticket.id = uuid();
            createTicket(ticket).then(() => navigate(`/tickets/${ticket.id}`))
        } else {
            updateTicket(ticket).then(() => navigate(`/tickets/${ticket.id}`))
        }
    }

    if (loadingInitial) return <LoadingComponent content="Loading Ticket..." />

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autocomplete="off">
                <Form.Input placeholder="Start Station" name="startStation" value={ticket.startStation} onChange={handleInputChange} />
                <Form.Input placeholder="Destination" name="destination" value={ticket.destination} onChange={handleInputChange} />
                <Form.Input placeholder="Number Of Passengers" name="numberOfPassengers" value={ticket.numberOfPassengers} onChange={handleInputChange} />
                <Form.Input placeholder="Date" type="date" name="date" value={ticket.date} onChange={handleInputChange} />
                <Form.Input placeholder="Fare" name="fare" value={ticket.fare} onChange={handleInputChange} />
                <Form.Input placeholder="Payment Status" name="paymentStatus" value={ticket.paymentStatus} onChange={handleInputChange} />
                <Form.Input placeholder="Ticket QR" name="ticketQr" value={ticket.ticketQr} onChange={handleInputChange} />
                <Button floated="right" loading={loading} positive type="submit" content="Submit" />
                <Button floated="right"  as={Link} to='/tickets' type="button" content="Canel" />
            </Form>
        </Segment>
    )
})
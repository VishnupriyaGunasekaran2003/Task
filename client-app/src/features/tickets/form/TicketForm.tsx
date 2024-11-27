import { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";

export default observer(function TickekForm() {
    const {ticketStore} = useStore();
    const {closeForm, selectedTicket, loading, createTicket, updateTicket} = ticketStore;

    const initialState = selectedTicket ?? {
        id: '',
        startStation: '',
        destination: '',
        numberOfPassengers: 0,
        date: '',
        fare: 0.0,
        paymentStatus: '',
        ticketQr: ''
    }

    const[ticket, setTicket] = useState(initialState);

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) 
    {
        const {name, value} = event.target;
        setTicket({...ticket, [name]: value})
    }

    function handleSubmit() {
        ticket.id ? updateTicket(ticket) : createTicket(ticket);
    }


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
                <Button floated="right" onClick={closeForm} type="button" content="Canel" />
            </Form>
        </Segment>
    )
})
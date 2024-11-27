import { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Ticket } from "../../../app/models/Ticket";

interface Props {
    ticket: Ticket | undefined;
    closeForm: () => void;
    createOrEdit: (ticket: Ticket) => void;
    submitting: boolean;
}

export default function TickekForm({ticket: selectedTicket, closeForm, createOrEdit, submitting}: Props) {
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
        createOrEdit(ticket);
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
                <Button floated="right" loading={submitting} positive type="submit" content="Submit" />
                <Button floated="right" onClick={closeForm} type="button" content="Canel" />
            </Form>
        </Segment>
    )
}
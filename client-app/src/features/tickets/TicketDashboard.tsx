import { Grid } from "semantic-ui-react";
import { Ticket } from "../../app/models/Ticket";
import TicketList from "./TicketList";
import TicketDetails from "../details/TicketDetails";
import TickekForm from "./form/TicketForm";

interface Props {
    tickets: Ticket[];
    selectedTicket: Ticket | undefined;
    selectTicket: (id : string) => void;
    cancelSelectTicket: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (tickket: Ticket) => void;
    deleteTicket: (id: string) => void;
}

export default function TicketDashboard({tickets, selectedTicket, 
    selectTicket, cancelSelectTicket, editMode, openForm, closeForm, createOrEdit, deleteTicket}: Props) {
    return (
        <Grid>
            <Grid.Column width={10}>
                <TicketList 
                    tickets={tickets} 
                    selectTicket={selectTicket}
                    deleteTicket={deleteTicket}
                />
            </Grid.Column>
            <Grid.Column width={6}>
                {selectedTicket && !editMode &&
                    <TicketDetails 
                        ticket={selectedTicket}
                        cancelSelectTicket={cancelSelectTicket}
                        openForm={openForm}
                />}
                {editMode &&
                    <TickekForm 
                        ticket={selectedTicket} closeForm={closeForm} createOrEdit={createOrEdit}/>}
            </Grid.Column>
        </Grid>
    )
}
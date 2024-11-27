import { Grid } from "semantic-ui-react";
import TicketList from "./TicketList";
import TicketDetails from "../details/TicketDetails";
import TickekForm from "./form/TicketForm";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";

export default observer(function TicketDashboard() {
    const {ticketStore} = useStore();
    const {selectedTicket, editMode} = ticketStore;
   
    return (
        <Grid>
            <Grid.Column width={10}>
                <TicketList />
            </Grid.Column>
            <Grid.Column width={6}>
                {selectedTicket && !editMode &&
                    <TicketDetails />}
                {editMode &&
                    <TickekForm />}
            </Grid.Column>
        </Grid>
    )
})
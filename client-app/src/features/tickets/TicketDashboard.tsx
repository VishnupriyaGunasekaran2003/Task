import { Grid } from "semantic-ui-react";
import TicketList from "./TicketList";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import LoadingComponent from "../../app/layout/LoadingComponent";

export default observer(function TicketDashboard() {
    const {ticketStore} = useStore();


    useEffect(() => {
        ticketStore.loadTickets();
    }, [ticketStore])

    if (ticketStore.loadingInitial) return <LoadingComponent content='Loading app...' />
   
    return (
        <Grid>
            <Grid.Column width={10}>
                <TicketList />
            </Grid.Column>
            <Grid.Column width={6}>
                <h3>Ticket Info</h3>
            </Grid.Column>
        </Grid>
    )
})
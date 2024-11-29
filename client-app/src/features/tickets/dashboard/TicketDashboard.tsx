import { Grid } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import TicketList from "./TicketList";
import TicketSidebar from "./TicketSidebar";

export default observer(function TicketDashboard() {
    const {ticketStore} = useStore();
    const {ticketRegistry, loadTickets} = ticketStore;


    useEffect(() => {
        if (ticketRegistry.size <= 1) loadTickets();
    }, [loadTickets, ticketRegistry.size])

    if (ticketStore.loadingInitial) return <LoadingComponent content='Loading app...' />
   
    return (
        <Grid>
            <Grid.Column width={12}>
                <TicketList />
            </Grid.Column>
            <Grid.Column width={4}>
                <TicketSidebar />
            </Grid.Column>
        </Grid>
    )
})
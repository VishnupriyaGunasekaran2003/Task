import { Button, Card, Grid, Image, Segment } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import TicketDetailedInfo from "./TicketDetailedInfo";
import TicketQr from "./TicketQr";

export default observer(function TicketDetails() {
    const {ticketStore} = useStore();
    const {selectedTicket: ticket, loadTicket, loadingInitial} = ticketStore;
    const {id} = useParams();

    useEffect(() => {
        if (id) loadTicket(id);
    },[id,loadTicket]);

    if(loadingInitial || !ticket) return <LoadingComponent content="Loading Ticket..." />

    return (
        <>
            <Grid>
                <Grid.Column width={10}>
                    <TicketDetailedInfo ticket={ticket} />
                </Grid.Column>
                <Grid.Column width={6}>
                    <TicketQr />
                </Grid.Column>
            </Grid>
        </>
    )
})
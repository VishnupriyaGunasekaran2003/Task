import { Header, Item, Segment } from "semantic-ui-react";
import { Fragment, SyntheticEvent, useState } from "react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import TicketListItem from "./TicketListItem";

export default observer(function TicketList() {
    const {ticketStore} = useStore();
    const {groupedTickets } = ticketStore;
    

    return (
        <>
            {groupedTickets.map(([group, tickets]) => (
                <Fragment key={group}>
                    <Header sub color="teal">
                        {group}
                    </Header>
                    {tickets && tickets.map(ticket => (
                        <TicketListItem key={ticket.id} ticket={ticket} />
                    ))}
                </Fragment>
            ))}
        </>
    )
})
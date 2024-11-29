import { Image, Segment } from "semantic-ui-react";

export default function TicketQr() {
    return (
        <Segment.Group>
            <Segment basic attached='top' style={{padding: '0'}}>
                {/* <Image src={`/assets/categoryImages/${ticket.destination}.jpg`} fluid style={ticketImageStyle}/> */}
                <Image src={`/assets/sqr.png`} fluid />
            </Segment>
        </Segment.Group>
    )
}
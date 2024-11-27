import { Button, Container, Menu } from "semantic-ui-react";
import { useStore } from "../stores/store";

export default function NavBar() {
    const {ticketStore} = useStore();

    return (
        <Menu inverted fixed="top">
        <Container>
            <Menu.Item header>
                <img src='/assets/logo.png' alt='logo' style={{marginRight: '10px'}} />
                MetroEase
            </Menu.Item>
            <Menu.Item name="Tickets" />
            <Menu.Item>
                <Button positive onClick={() => ticketStore.openForm()} content="+ New Ticket" />
            </Menu.Item>
        </Container>
    </Menu>
    )
}
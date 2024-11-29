import { Button, Container, Menu } from "semantic-ui-react";
import { useStore } from "../stores/store";
import { NavLink } from "react-router-dom";

export default function NavBar() {

    return (
        <Menu inverted fixed="top">
        <Container>
            <Menu.Item as={NavLink} to='/' header>
                <img src='/assets/logo.png' alt='logo' style={{marginRight: '10px'}} />
                MetroEase
            </Menu.Item>
            <Menu.Item as={NavLink} to='/station' name="Station Information" />
            <Menu.Item as={NavLink} to='/tickets' name="Tickets" />
            <Menu.Item>
                <Button positive as={NavLink} to='/createTicket' content="+ New Ticket" />
            </Menu.Item>
        </Container>
    </Menu>
    )
}
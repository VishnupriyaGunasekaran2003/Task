import { Button, Container, Menu } from "semantic-ui-react";

interface Props {
    openForm: () => void;
}

export default function NavBar({openForm}: Props) {
    return (
        <Menu inverted fixed="top">
        <Container>
            <Menu.Item Header>
                <img src='/assets/logo.png' alt='logo' style={{marginRight: '10px'}} />
                MetroEase
            </Menu.Item>
            <Menu.Item name="Tickets" />
            <Menu.Item>
                <Button positive onClick={openForm} content="+ New Ticket" />
            </Menu.Item>
        </Container>
    </Menu>
    )
}
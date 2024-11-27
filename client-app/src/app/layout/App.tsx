import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { Ticket } from '../models/Ticket';
import NavBar from './NavBar';
import TicketDashboard from '../../features/tickets/TicketDashboard';
import {v4 as uuid} from 'uuid';

function App() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios.get<Ticket[]>('http://localhost:5000/api/tickets')
      .then(response => {
        setTickets(response.data)
      })
  }, [])

  function handleSelectTicket(id : string) {
    setSelectedTicket(tickets.find(x => x.id === id));
  }

  function handleSelectCancel() {
    setSelectedTicket(undefined);
  }

  function handleOpenForm(id?: string) {
    id ? handleSelectTicket(id) : handleSelectCancel();
    setEditMode(true);
  }

  function handleCloseForm() {
    setEditMode(false);
  }

  function handleCreateOrEditTicket(ticket: Ticket) {
    ticket.id ?
      setTickets([...tickets.filter(x => x.id !== ticket.id), ticket]) :
      setTickets([...tickets, {...ticket, id: uuid()}]);
      setEditMode(false);
      setSelectedTicket(ticket);
  }

  function handleDeleteTicket(id: string) {
    setTickets([...tickets.filter(x => x.id !==id)]);
  }

  return (
    <>
      <NavBar openForm={handleOpenForm} />
      <Container style={{marginTop: '7em'}}>
          <TicketDashboard 
            tickets={tickets} 
            selectedTicket={selectedTicket}
            selectTicket={handleSelectTicket}
            cancelSelectTicket = {handleSelectCancel}
            editMode={editMode}
            openForm={handleOpenForm}
            closeForm={handleCloseForm}
            createOrEdit={handleCreateOrEditTicket}
            deleteTicket={handleDeleteTicket}
          />
      </Container>
    </>
  )
}

export default App

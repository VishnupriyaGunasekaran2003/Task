import { useEffect, useState } from 'react'
import './App.css'
import { Container } from 'semantic-ui-react';
import { Ticket } from '../models/Ticket';
import NavBar from './NavBar';
import TicketDashboard from '../../features/tickets/TicketDashboard';
import {v4 as uuid} from 'uuid';
import agent from '../api/agent';
import LoadingComponent from './LoadingComponent';

function App() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    agent.Tickets.list()
      .then(response => {
        let tickets : Ticket[] = [];
        response.forEach(ticket => {
          ticket.date = ticket.date.split('T')[0];
          tickets.push(ticket);
        })
        setTickets(tickets);
        setLoading(false);
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
    setSubmitting(true);
    if(ticket.id) {
      agent.Tickets.update(ticket).then(() => {
        setTickets([...tickets.filter(x => x.id !== ticket.id), ticket]);
        setSelectedTicket(ticket);
        setEditMode(false);
        setSubmitting(false);
      })
    } else {
      ticket.id = uuid();
      agent.Tickets.create(ticket).then(() => {
        setTickets([...tickets,ticket]);
        setSelectedTicket(ticket);
        setEditMode(false);
        setSubmitting(false);
      })
    }
  }

  function handleDeleteTicket(id: string) {
    setSubmitting(true);
    agent.Tickets.delete(id).then(() => {
      setTickets([...tickets.filter(x => x.id !==id)]);
      setSubmitting(false);
    })
  }

  if (loading) return <LoadingComponent content='Loading app...' />

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
            submitting={submitting}
          />
      </Container>
    </>
  )
}

export default App

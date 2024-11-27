import { makeAutoObservable, runInAction } from "mobx";
import { Ticket } from "../models/Ticket";
import agent from "../api/agent";
import {v4 as uuid} from 'uuid';

export default class TicketStore {
    ticketRegistry = new Map<string, Ticket>();
    selectedTicket?: Ticket | undefined;
    editMode = false;
    loading = false;
    loadingInitial = false;

    constructor () {
        makeAutoObservable(this);
    }

    get ticketsByDate() {
        return Array.from(this.ticketRegistry.values()).sort((a,b) => 
            Date.parse(a.date) - Date.parse(b.date));
    }

    loadTickets = async () => {
        this.loadingInitial = true;
        try {
            const tickets = await agent.Tickets.list();
            tickets.forEach(ticket => {
                ticket.date = ticket.date.split('T')[0];
                this.ticketRegistry.set(ticket.id,ticket);
            })
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
        }
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    selectTicket = (id: string) => {
        this.selectedTicket = this.ticketRegistry.get(id);
    }

    cancelSelectTicket = () => {
        this.selectedTicket = undefined;
    }

    openForm = (id?: string) => {
        id? this.selectTicket(id) : this.cancelSelectTicket();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createTicket = async (ticket: Ticket) => {
        this.loading = true;
        ticket.id = uuid();
        try{
            await agent.Tickets.create(ticket);
            runInAction(() => {
                this.ticketRegistry.set(ticket.id,ticket);
                this.selectedTicket = ticket;
                this.editMode = false;
                this.loading = false;
            })
        } catch(error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }

    updateTicket = async (ticket: Ticket) => {
        this.loading = true;
        try {
            await agent.Tickets.update(ticket);
            runInAction(() => {
                this.ticketRegistry.set(ticket.id,ticket);
                this.selectedTicket = ticket;
                this.editMode = false;
                this.loading = false;
            })
        } catch(error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }

    deleteTicket = async (id: string) => {
        await agent.Tickets.delete(id);
        try {
            this.ticketRegistry.delete(id);
            if ( this.selectedTicket?.id === id) this.cancelSelectTicket;
            this.loading = false;
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }
}
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
        makeAutoObservable(this)
    }

    get groupedTickets(): [string, Ticket[]][] {
        const sortedTickets = Array.from(this.ticketRegistry.values()).sort((a, b) => 
            Date.parse(a.date) - Date.parse(b.date));

        return Object.entries(
            sortedTickets.reduce((tickets, ticket) => {
                const date = ticket.date.split('T')[0];
                tickets[date] = tickets[date] ? [...tickets[date],ticket] : [ticket];
                return tickets;
            }, {} as {[key: string]: Ticket[]})
        )
    }

    get ticketsByDate() {
        return Array.from(this.ticketRegistry.values()).sort((a,b) => 
            Date.parse(a.date) - Date.parse(b.date));
    }

    loadTickets = async () => {
        try {
            this.setLoadingInitial(true);
            const tickets = await agent.Tickets.list();
            tickets.forEach(ticket => {
                this.setTicket(ticket);
            })
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
        }
    }

    loadTicket = async (id: string) => {
        let ticket = this.getTicket(id);
        if(ticket) {
            this.selectedTicket = ticket;
            return ticket;
        } else {
            this.setLoadingInitial(true);
            try {
                ticket = await agent.Tickets.details(id);
                this.setTicket(ticket);
                runInAction(() => this.selectedTicket = ticket);
                this.setLoadingInitial(false);
                return ticket;
            } catch(error) {
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }

    private setTicket = (ticket: Ticket) => {
                ticket.date = ticket.date.split('T')[0];
                this.ticketRegistry.set(ticket.id,ticket);
    }

    private getTicket = (id: string) => {
        return this.ticketRegistry.get(id);
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    createTicket = async (ticket: Ticket) => {
        this.setLoadingInitial(true);
        ticket.id = uuid();
        try{
            await agent.Tickets.create(ticket);
            runInAction(() => {
                this.ticketRegistry.set(ticket.id,ticket);
                this.selectedTicket = ticket;
                this.editMode = false;
                this.setLoadingInitial(false);
            })
        } catch(error) {
            console.log(error);
            runInAction(() => {
                this.setLoadingInitial(false);
            })
        }
    }

    updateTicket = async (ticket: Ticket) => {
        this.setLoadingInitial(true);
        try {
            await agent.Tickets.update(ticket);
            runInAction(() => {
                this.ticketRegistry.set(ticket.id,ticket);
                this.selectedTicket = ticket;
                this.editMode = false;
                this.setLoadingInitial(false);
            })
        } catch(error) {
            console.log(error);
            runInAction(() => {
                this.setLoadingInitial(false);
            })
        }
    }

    deleteTicket = async (id: string) => {
        this.setLoadingInitial(true);
        await agent.Tickets.delete(id);
        try {
            this.ticketRegistry.delete(id);
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.setLoadingInitial(false);
            })
        }
    }
}
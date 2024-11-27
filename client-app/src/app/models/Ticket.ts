export interface Ticket {
    id: string
    startStation: string
    destination: string
    numberOfPassengers: number
    date: string
    fare: number
    paymentStatus: string
    ticketQr: any
  }
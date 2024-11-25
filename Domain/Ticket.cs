using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Ticket
    {
        public Guid Id { get; set; }
        public string StartStation { get; set; }
        public string Destination { get; set; }
        public int NumberOfPassengers { get; set; }
        public DateTime Date { get; set; }
        public decimal Fare { get; set; }
        public string PaymentStatus { get; set; }
        public string TicketQr { get; set; }
    }
}
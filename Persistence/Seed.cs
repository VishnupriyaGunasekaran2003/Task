using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if(context.Tickets.Any()) return;

            var tickets = new List<Ticket>
            {
                new Ticket
                {
                    StartStation = "Egmore Metro",
                    Destination = "Koyambedu",
                    NumberOfPassengers = 1,
                    Fare = 50, // Example fare in decimal
                    PaymentStatus = "Pending" // Use "Paid" or "Pending"
                    
                },
                new Ticket
                {
                    StartStation = "Thirumangalam",
                    Destination = "Arumbakkam",
                    NumberOfPassengers = 2,
                    Fare = 40,
                    PaymentStatus = "Paid"
                },
                new Ticket
                {
                    StartStation = "Egmore Metro",
                    Destination = "Arumbakkam",
                    NumberOfPassengers = 3,
                    Fare = 90,
                    PaymentStatus = "Paid"
                },
                new Ticket
                {
                    StartStation = "Vadapalani",
                    Destination = "Koyambedu",
                    NumberOfPassengers = 1,
                    Fare = 30,
                    PaymentStatus = "Pending"
                },
            };
            await context.Tickets.AddRangeAsync(tickets);
            await context.SaveChangesAsync();
        }
    }
}
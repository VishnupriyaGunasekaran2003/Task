import { createBrowserRouter, RouteObject } from "react-router-dom";
import TicketDashboard from "../../features/tickets/TicketDashboard";
import App from "../layout/App";
import TicketDetails from "../../features/details/TicketDetails";
import TicketForm from "../../features/tickets/form/TicketForm";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {path: '/tickets', element: <TicketDashboard />},
            {path: '/tickets/:id', element: <TicketDetails />},
            {path: '/createTicket', element: <TicketForm key='create' /> },
            {path: '/manage/:id', element: <TicketForm key='manage' />}
        ]
    }
]

export const router = createBrowserRouter(routes);
import { createBrowserRouter, RouteObject } from "react-router-dom";
import TicketDashboard from "../../features/tickets/dashboard/TicketDashboard";
import App from "../layout/App";
import TicketDetails from "../../features/details/TicketDetails";
import TicketForm from "../../features/tickets/form/TicketForm";
import StationInformation from "../../features/stations/StationInformation";
import Parking from "../../features/stations/Parking";
import Barrier from "../../features/stations/Barrier";
import Security from "../../features/stations/Security";
import Women from "../../features/stations/Women";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {path: '/station', element: <StationInformation />},
            {path: '/tickets', element: <TicketDashboard />},
            {path: '/tickets/:id', element: <TicketDetails />},
            {path: '/createTicket', element: <TicketForm key='create' /> },
            {path: '/manage/:id', element: <TicketForm key='manage' />},
            {path: '/parking', element: <Parking />},
            {path: '/barrier', element: <Barrier />},
            {path: '/security', element: <Security />},
            {path: '/women', element: <Women />}
        ]
    }
]

export const router = createBrowserRouter(routes);
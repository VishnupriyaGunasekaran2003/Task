import { Link } from "react-router-dom";
import { Header } from "semantic-ui-react";
import './Styles2.css'

export default function TicketSidebar() {
    return(
        <>
    <Header>Ticket Facilities</Header>
    <br />
    <div className="sidebar">
      {/* Sidebar item for Parking */}
      <div className="sidebar-item">
        <Link to={"https://api.whatsapp.com/send/?phone=918300086000&text=Hi&type=phone_number&app_absent=0"}>
            <img 
                src="/assets/whatsapp.webp" 
                alt="Whatsapp" 
            />
        </Link>
        <div className="label">Whatsapp</div>
      </div>
      
      {/* Sidebar item for Bike Stand */}
      <div className="sidebar-item">
        <Link to={"https://transit.sbi/swift/customerportal?pagename=cmrl"}>
            <img 
              src="/assets/sbi.jpg" 
              alt="SBI" 
            />
        </Link>
        <div className="label">SBI</div>
      </div>

      {/* Sidebar item for Emergency Services */}
      <div className="sidebar-item">
          <Link to={"https://paytm.com/metro-card-recharge/chennai-metro"}>
            <img 
              src="/assets/paytm.webp" 
              alt="PAYTM" 
            />
          </Link>
        <div className="label">Paytm</div>
      </div>
      <div className="sidebar-item">
        <Link to={"https://chennaimetrorail.org/phonepe/"}>
            <img 
              src="/assets/phonepe.jpg" 
              alt="PhonePe" 
            />
        </Link>
        <div className="label">PhonePe</div>
      </div>
    </div>
    </>
    )
}
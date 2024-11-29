import { Grid } from "semantic-ui-react";
import StationDetails from "./StationDetails";
import StationSidebar from "./StationSidebar";

export default function StationInformation() {
    return (
        <Grid>
            <Grid.Column width={12}>
                <StationDetails />
            </Grid.Column>
            <Grid.Column width={4}>
                <StationSidebar />
            </Grid.Column>
        </Grid>
    )
}
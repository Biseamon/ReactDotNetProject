
import { useActivities } from "../../../lib/hooks/useActivities";

import ActivityDetailHeader from "./ActivityDetailsHeader";
import ActivityDetailInfo from "./ActivityDetailsInfo";
import ActivityDetailChat from "./ActivityDetailChat";
import { Grid2, Typography } from "@mui/material";
import ActivityDetailSidebar from "./ActivityDetailsSidebar";
import { useParams } from "react-router";


export default function ActivityDetailPage() {

  //const navigate = useNavigate();
  const {id} = useParams();
  const {activity, isLoadingActivity} = useActivities(id);

  if(isLoadingActivity) return <Typography>Loading...</Typography>
  if(!activity) return <Typography>Activity not found</Typography>

  return (
    <Grid2 container spacing={3}>
      <Grid2 size={8}>
        <ActivityDetailHeader activity={activity}></ActivityDetailHeader>
        <ActivityDetailInfo activity={activity}></ActivityDetailInfo>
        <ActivityDetailChat></ActivityDetailChat>
      </Grid2>
      <Grid2 size={4}>
          <ActivityDetailSidebar activity={activity}></ActivityDetailSidebar>
      </Grid2>
    </Grid2>
  )
}

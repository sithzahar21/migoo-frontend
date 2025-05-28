// import React from 'react'
// import BaseCard from '../../../components/BaseCard/BaseCard'
// import { Stack, Box, Card, Button, Typography } from '@mui/material'
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import CancelPlanModal from '../../../components/modals/cancelplan/CancelPlan';

// const SubscriptionPlan = () => {
//   return (
//     <Stack
//      maxWidth={"500px"} width="100%"
//      >
//         <Box style={{display:"flex"}} mb={2}>

// <div style={{display:"flex", justifyContent:"space-between", padding:"10px", width:"100%", border:"1px solid grey", margin:"10px 0px", borderRadius:"10px"}}>
//             <Button size="small" variant="outlined" color="primary" style={{borderRadius:"999px"}}>Current&nbsp;Plan</Button>
// </div>
//            <div style={{padding:"10px", width:"100%", margin:"10px 0px", borderRadius:"10px"}}>
//             {/* <Button size="small" variant="outlined" color="primary">Cancel&nbsp;Plan</Button> */}
//             <CancelPlanModal />
//             </div>
//         </Box>
//            <Button size="small" variant="contained">Upgrade</Button>
//            </div>
//            <hr />
//            <Box m={1}>
//            <div style={{display:"flex", marginBottom:"5px"}}><CheckCircleIcon color='primary' /><Typography ml={1}>Unlimited</Typography></div>
//            <div style={{display:"flex", marginBottom:"5px"}}><CheckCircleIcon color='primary' /><Typography ml={1}>Unlimited</Typography></div>
//            <div style={{display:"flex", marginBottom:"5px"}}><CheckCircleIcon color='primary' /><Typography ml={1}>Unlimited</Typography></div>
//            <div style={{display:"flex", marginBottom:"5px"}}><CheckCircleIcon color='primary' /><Typography ml={1}>Unlimited</Typography></div>

//            </Box>
//            </div>
//         </Box>
//     </Stack>
//   )
// }

// export default SubscriptionPlan

import React from 'react';
import { Stack, Box, Button, Typography, Paper } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelPlanModal from '../../../components/modals/cancelplan/CancelPlan';
import UpgradeButton from '../../../components/upgradebutton/UpgradeButton';
import { useThemeContext } from '../../../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const SubscriptionPlan = () => {
    const {isDarkMode} = useThemeContext()
    const {t} = useTranslation()
  return (
    <>
    <Stack maxWidth={"500px"} width="100%" spacing={2}>
      <Paper elevation={1} sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" color={isDarkMode? "#1cff27" :'#5d015b'}>
          {t("settings.subscriptionPlan.basic")}
        </Typography>
        <div>
          <Button size="small" variant="outlined" color="primary" sx={{ borderRadius: '999px', mr: 1 }}>
            {t("settings.subscriptionPlan.currentPlan")}
          </Button>
        </div>
      </Paper>

      <Paper elevation={1} sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Typography variant="h6" color={isDarkMode? "#1cff27" :'#5d015b'}>
              {t("settings.subscriptionPlan.expert")}
          </Typography>
          <UpgradeButton />
        </Box>
        <hr style={{ borderColor: 'grey' }} />
        <Box mt={1}>
          {[...Array(4)].map((_, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
              <CheckCircleIcon color="primary" sx={{ mr: 1 }} />
              <Typography>
            {t("settings.subscriptionPlan.unlimited")}
              </Typography>
            </Box>
          ))}
        </Box>
      </Paper>
    </Stack>
    <Box mt={2}>
    <CancelPlanModal />
    </Box>
    </>
  );
};

export default SubscriptionPlan;
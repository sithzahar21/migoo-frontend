import React, { useState } from 'react';
import { Button, Dialog, DialogContent, Card, Typography, Box } from '@mui/material';
import {Grid2} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function MessageSentModal() {
  const { t } = useTranslation();              // i18n hook
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose     = () => setOpen(false);

  return (
    <>
      {/* open modal button */}
      <Button
        onClick={handleClickOpen}
        sx={{ display: 'flex', mx: 'auto' }}
        color="primary"
        variant="contained"
      >
        {t('contact.submitForm')}
      </Button>

      {/* modal */}
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="body"
        slotProps={{
          paper: {
            component: 'form',
            onSubmit: (event) => {
              event.preventDefault();
              // handleClose();  // already closes via onClose
            },
          },
        }}
      >
        <DialogContent>
          <Grid2 container justifyContent="center">
            <Grid2
              xs={12}
              sm={12}
              lg={4}
              xl={3}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Card sx={{ p: 4, width: '100%', maxWidth: 500 }}>
                <Box textAlign="center">
                  <Typography variant="h2">
                    {t('contact.messageSent.title')}
                  </Typography>

                  <Typography mt={2}>
                    {t('contact.messageSent.body')}
                  </Typography>

                  <NavLink to="/">
                    <Button sx={{ mt: 4 }} variant="contained">
                      {t('contact.messageSent.goHome')}
                    </Button>
                  </NavLink>
                </Box>
              </Card>
            </Grid2>
          </Grid2>
        </DialogContent>
      </Dialog>
    </>
  );
}


// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogContent from '@mui/material/DialogContent';
// import { Box, Card, Stack, Typography, Grid2 } from '@mui/material';
// import { NavLink } from 'react-router';

// export default function MessageSentModal() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
//       <Button
//             onClick={handleClickOpen}
//            style={{display:"flex", marginLeft:"auto", marginRight:"auto"}} 
//            color="primary" variant="contained">  
//         Submit Form
//       </Button>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         scroll="body"
//         slotProps={{
//           paper: {
//             component: 'form',
//             onSubmit: (event) => {
//               event.preventDefault();
//               const formData = new FormData(event.currentTarget);
//               const formJson = Object.fromEntries(formData.entries());
//               const email = formJson.email;
//               console.log(email);
//               handleClose();
//             },
//           },
//         }}
//       >
//         <DialogContent>
         
//         <Grid2 container spacing={0} justifyContent="center">
//           <Grid2
//             item
//             xs={12}
//             sm={12}
//             lg={4}
//             xl={3}
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//           >
//             <Card sx={{ p: 4, zIndex: 1, width: '100%', maxWidth: '500px' }}>
//               <Box alignItems="center" textAlign="center" justifyContent="center">
//                 <Typography variant='h2'>Message sent successfully</Typography>
//               <Typography mt={2}>Thank you for reaching out to us. We’ve received your message and will get back to you shortly.</Typography>
//               <NavLink to="/"><Button style={{marginTop:"30px"}} variant="contained">Go to home</Button></NavLink>
//               </Box>
             
//             </Card>
//           </Grid2>
//         </Grid2>
//         </DialogContent>
//       </Dialog>
//     </React.Fragment>
//   );
// }


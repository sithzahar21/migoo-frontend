import React, { useState, useEffect } from 'react';
import { Typography, Button, Grid2, Dialog, DialogActions, DialogContent, DialogTitle, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const TestTitle = ({ title, subtitle}) => {
  const [openModal, setOpenModal] = useState(false); // Controls modal visibility
  const [countdown, setCountdown] = useState(3); // Countdown before timer starts
  const [timeLeft, setTimeLeft] = useState(0); // Time left for the 20-minute countdown
  const [isTimerRunning, setIsTimerRunning] = useState(false); // Controls if timer is running
  const [isCountdownComplete, setIsCountdownComplete] = useState(false); // Tracks if countdown is finished
  const [testIsGoingOn, setTestIsGoingOn] = useState(false); // Tracks if the test is ongoing
  const [openStopModal, setOpenStopModal] = useState(false); // Controls stop test confirmation modal visibility
  const {t} = useTranslation()

  // Countdown logic (3, 2, 1)
  useEffect(() => {
    if (countdown > 0 && openModal) {
      const countdownTimeout = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      return () => clearTimeout(countdownTimeout); // Cleanup on countdown change
    }

    // When countdown finishes, start the timer
    if (countdown === 0 && !isCountdownComplete) {
      setIsCountdownComplete(true); // Mark countdown as complete
      setIsTimerRunning(true);
      setTimeLeft(20 * 60); // 20 minutes in seconds
      setTestIsGoingOn(true); // Test starts, so set this to true
    }
  }, [openModal, countdown, isCountdownComplete]);

  // Timer logic for 20 minutes
  useEffect(() => {
    if (isTimerRunning && timeLeft > 0) {
      const timerInterval = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(timerInterval); // Clear interval when time is up
            setIsTimerRunning(false);
            setTestIsGoingOn(false); // Test ends, so set this to false
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timerInterval); // Cleanup on timer update
    }
  }, [isTimerRunning, timeLeft]);

  const handleNewTestButtonClick = () => {
    if (testIsGoingOn) {
      // Open the confirmation modal when "Stop Test" is clicked
      setOpenStopModal(true);
    } else {
      // Start the countdown for a new test
      setOpenModal(true); // Open the modal when the "New Test" button is clicked
      setCountdown(3); // Start countdown from 3
      setIsCountdownComplete(false); // Reset countdown state
      setTimeLeft(0); // Reset the time left
      setTestIsGoingOn(false); // Ensure test is not ongoing initially
    }
  };

  const handleStartTestButtonClick = () => {
    setOpenModal(false); // Close the modal when countdown is complete
    setIsTimerRunning(true); // Start the timer immediately
    setCountdown(0); // Reset countdown to start the timer
    setTimeLeft(20 * 60); // Start 20-minute countdown (in seconds)
    setTestIsGoingOn(true); // Mark test as ongoing
  };

  const handleCloseModal = () => {
    setOpenModal(false); // Close modal without starting the test
  };

  const handleStopTest = () => {
    // Stop the test when the user confirms
    setIsTimerRunning(false);
    setTestIsGoingOn(false);
    setTimeLeft(0); // Optional: Reset time left
    setOpenStopModal(false); // Close confirmation modal
  };

  const handleCancelStopTest = () => {
    // Close the confirmation modal without stopping the test
    setOpenStopModal(false);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

 

  return (
    <>
      <Grid2 container spacing={2} mt={5} justifyContent={"space-between"}>
        <div>
          <Typography variant='h4'>{title}</Typography>
          <Typography variant='h6' mt={2}>{subtitle}</Typography>
        </div>
        <div>
          {/* Timer Button (shows time remaining) */}
          <Button 
            variant="outlined" 
            color="primary" 
            sx={{ m: 2 }} 
            disabled={isTimerRunning} // Disable button when timer is running
          >
            {isTimerRunning ? formatTime(timeLeft) : t("testtitle.timer")}
          </Button>
          
          {/* New Test Button (acts as Stop Test button when test is ongoing) */}
          <Button 
            variant="contained" 
            color={testIsGoingOn ? "error" : "primary"} 
            onClick={handleNewTestButtonClick}
          >
            {testIsGoingOn ? t("testtitle.stopTest") : t("testtitle.newTest")}
          </Button>

        </div>
      </Grid2>

      <hr style={{ border: '1px solid #DEDEDF' }} />

      {/* Timer Modal */}
      <Dialog open={openModal} onClose={handleCloseModal}>
        {/* <DialogTitle>Starting your test</DialogTitle> */}
        <DialogContent>
  <Typography variant="h5" pl={3} pr={3}>{t("testtitle.yourTestWillStartIn")}</Typography>
  
  <Box sx={{ color: "#157DF8", backgroundColor: "#157DF840", textAlign: 'center', borderRadius: '999px', m: 5 }}>
    <Typography style={{ padding: '20px' }} variant="h2">{countdown}</Typography>
  </Box>

  <Box sx={{ textAlign: 'center' }}>
    <Button color="primary" variant="contained">{t("testtitle.goBack")}</Button>
  </Box>
</DialogContent>
        <DialogActions>
          {/* <Button onClick={handleCloseModal} color="primary">Okay</Button> */}
          {/* <Button onClick={handleStartTestButtonClick} color="primary">Start Test</Button> */}
        </DialogActions>
      </Dialog>

      {/* Stop Test Confirmation Modal */}
      <Dialog open={openStopModal} onClose={handleCancelStopTest}>
        <DialogTitle>{t("testtitle.areYouSure")}</DialogTitle>
        <DialogActions>
          <Button onClick={handleCancelStopTest} color="primary">{t("testtitle.resumeTest")}</Button>
          <Button onClick={handleStopTest} color="error">{t("testtitle.stopTest")}</Button>
        </DialogActions>
      </Dialog>

      {/* Timer Display */}
      {testIsGoingOn && (
        <Typography variant="h6" color="primary" mt={2}>
          {t("testtitle.timeLeft")}: {formatTime(timeLeft)}
        </Typography>
      )}
    </>
  );
};

export default TestTitle;

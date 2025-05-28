import React from 'react';
import {
    Box,
    Typography,
    Button,
    Stack,
} from '@mui/material';
import "./style.css"
import { Link } from 'react-router';
const WeeklyChallengeModal = ({ title, subtitle, subtext }) => {
    return (
    <>
        {title ? (
            <Typography fontWeight="700" variant="h2" mb={1}>
                {title}
            </Typography>
        ) : null}

        {subtext}

        <Stack>
        </Stack>
        {subtitle}
        <Box display={"flex"} alignItems={"center"}>
            <Button
                color="primary"
                variant="contained"
                size="large"
                component={Link}
                to="/reading"
                type="submit"
            >
                Start Challenge
            </Button>
        </Box>
    </>
)};

export default WeeklyChallengeModal;

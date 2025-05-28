import React from 'react';
import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip
} from '@mui/material';
import DashboardCard from '../shared/DashboardCard';
// import CrossImage from "../../../assets/images/general/cross.svg"
// import TickImage from "../../../assets/images/general/tick.svg"


const products = [
    {
        id:1,
        words:"Term",
        english:"Length of Time",
        hebrew:"מקבל : תודה"
    },
    {
        id:2,
        words:"Term",
        english:"Length of Time",
        hebrew:"מקבל : תודה"
    }, 
    {
        id:3,
        words:"Term",
        english:"Length of Time",
        hebrew:"מקבל : תודה"
    }, 
    {
        id:4,
        words:"Term",
        english:"Length of Time",
        hebrew:"מקבל : תודה"
    },
    {
        id:5,
        words:"Term",
        english:"Length of Time",
        hebrew:"מקבל : תודה"
    },
   ];


const VocabularyWordGameTable = () => {
    return (

        <DashboardCard
         title={`Vocabulary`}
         subtitle={`10 words add this week`}
         >
            <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                <Table
                    aria-label="simple table"
                    sx={{
                        whiteSpace: "nowrap",
                        mt: 2
                    }}
                >
                    <TableHead>
                        <TableRow>
                        <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Words
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    English
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Hewbrew
                                </Typography>
                            </TableCell>
                           
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.id}>
                                {/* <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {product.id}
                                    </Typography>
                                </TableCell> */}
                                <TableCell>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Box>
                                            
                                            <Typography variant="subtitle2" fontWeight={600}>
                                                {product.words}
                                            </Typography>
                                      
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Box>
                                            
                                            <Typography variant="subtitle2" fontWeight={600}>
                                                {product.english}
                                            </Typography>
                                            <Typography
                                                color="textSecondary"
                                                sx={{
                                                    fontSize: "13px",
                                                }}
                                            >
                                                {/* {product.studypoints} */}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell>
  {/*  */}
  <Typography display="flex" alignItems="center">
  {/* {product.status ? (
    <img src={TickImage} alt="tick" style={{ marginRight: 8, width: 20, height: 20 }} />
  ) : (
    <img src={CrossImage} alt="cross" style={{ marginRight: 8, width: 20, height: 20 }} />
  )} */}
  {product.hebrew}
</Typography>

</TableCell>
                                
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </DashboardCard>
    );
};

export default VocabularyWordGameTable;

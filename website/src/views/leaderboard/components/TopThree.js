import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid2, Card, Typography } from '@mui/material';
import rank1User from "../../../assets/images/profile/rank1-user.svg"
import rank2User from "../../../assets/images/profile/rank2-user.svg"
import rank3User from "../../../assets/images/profile/rank3-user.svg"
import goldMedal from "../../../assets/images/general/gold-medal.svg"
import silverMedal from "../../../assets/images/general/silver-medal.svg"
import bronzeMedal from "../../../assets/images/general/bronze-medal.svg"
import "./style.css"
import { useThemeContext } from '../../../context/ThemeContext';
import { useTranslation } from 'react-i18next';




const TopThree = () => {
  const {isDarkMode} = useThemeContext()
  const cardData = [{
    medal : goldMedal,
    person: rank1User, 
    name: "Kathryn Murphy",
    points: 26498
  }, {
    medal : silverMedal,
    person: rank2User, 
    name: "Jacob Jones",
    points: 20045
  }, {
    medal : bronzeMedal,
    person: rank3User, 
    name: "Annette Black",
    points: 19548
  }]

  const {t} = useTranslation()
  return (
    <Box sx={{ flexGrow: 1, margin:"30px 0px" }}>
      <Grid2 container justifyContent="space-between" m={5} spacing={10} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(3)).map((_, index) => (
          <Grid2 key={index} size={{ xs: 12, sm: 12, md: 4 }}>
            <Card
            square={false}
            style={{boxShadow:"0px 0px 4px 0px", maxWidth:"300px", justifyContent:'center', alignItems:'center'}}
            >
              {/* {index + 1} */}
              <img 
            src={cardData[index].medal} 
            style={{width:"70px", marginLeft:"10px"}}
            />
            <img 
            src={cardData[index].person} 
            style={{borderRadius:"999px", width:"100px", display:"flex", justifyContent:"center", margin:"-40px auto 20px auto"}}

            />
            <Typography variant='h5' textAlign="center">{cardData[index].name}</Typography>
            <div style={{color:isDarkMode? "#1cff27" :'#5d015b', margin:"30px 0px"}}>
            <Typography variant='h5' textAlign="center">{cardData[index].points}</Typography>
            <Typography variant='h5' textAlign="center">{t("topRank.studentPoints")}</Typography> 
            </div>  
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  )
}

export default TopThree
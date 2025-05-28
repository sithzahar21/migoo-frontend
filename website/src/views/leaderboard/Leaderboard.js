import React from 'react'
import TopRank from './components/TopRank'
import TopThree from './components/TopThree'
import { Typography } from '@mui/material'
import RankCard from './components/RankCard'
import YourRank from './components/YourRank'
import { useTranslation } from 'react-i18next'

const Leaderboard = () => {
  const { t } = useTranslation()
  const competitionCount = 6;

  return (
    <>
      <TopRank />
      <hr style={{ border: '1px solid #DEDEDF' }} />
      <TopThree />
      <YourRank text={t('leaderboard.yourRank')} />
      <RankCard />
      <YourRank text={t('leaderboard.yourCompetitions')} />
      {Array.from({ length: competitionCount }).map((_, index) => (
        <RankCard key={index} />
      ))}
    </>
  )
}

export default Leaderboard

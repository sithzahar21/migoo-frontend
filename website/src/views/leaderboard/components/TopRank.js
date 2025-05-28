import React, { useState } from 'react';
import {
  Typography,
  Box,
  MenuItem,
  FormControl,
  Select,
} from '@mui/material';
import {Grid2} from '@mui/material';
import { useTranslation } from 'react-i18next';
import WeeklyChallenge from '../../../components/modals/weeklychallenge/WeeklyChallenge';

const TopRank = () => {
  const { t } = useTranslation();
  const [category, setCategory] = useState('');

  return (
    <>
      <Grid2
        container
        direction="row"
        sx={{ justifyContent: 'space-between', alignItems: 'center' }}
      >
        <div>
          <Typography variant="h4">{t('topRank.title')}</Typography>
          <Typography mt={2} variant="h6">{t('topRank.refreshNote')}</Typography>
        </div>

        {/* weekly‑challenge button / modal trigger */}
        <WeeklyChallenge />

        {/* category filter */}
        <Box>
          <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
            <Select
              value={category}
              displayEmpty
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value="">
                {t('topRank.filter.allTime')}
              </MenuItem>
              <MenuItem value="challenge">
                {t('topRank.filter.challenge')}
              </MenuItem>
              <MenuItem value="hearing">
                {t('topRank.filter.hearing')}
              </MenuItem>
              <MenuItem value="reading">
                {t('topRank.filter.reading')}
              </MenuItem>
              <MenuItem value="restatement">
                {t('topRank.filter.restatement')}
              </MenuItem>
              <MenuItem value="wordCompletion">
                {t('topRank.filter.wordCompletion')}
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Grid2>
    </>
  );
};

export default TopRank;

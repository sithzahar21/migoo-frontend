import React, { useEffect, useState } from "react";
import TopRank from "./components/TopRank";
import TopThree from "./components/TopThree";
import { Typography } from "@mui/material";
import RankCard from "./components/RankCard";
import YourRank from "./components/YourRank";
import { useDispatch, useSelector } from "react-redux";
import {
  getBestPerQuiz,
  getLeaderboard,
  getTopicLeaderboard,
  getAllTopicsSummary,
} from "../../redux/features/leaderboardSlice";
import { getXp } from "../../redux/features/dashboardSlice";
import { useTranslation } from "react-i18next";

const Leaderboard = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const {
    leaderboard,
    totalStudents,
    topicLeaderboard,
    topic,
    totalTopicParticipants,
    topicsSummary,
    bestPerQuiz,
    loading,
    error,
  } = useSelector((state) => state.leaderboard);
  const { xp } = useSelector((state) => state.dashboard);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    dispatch(getLeaderboard());
    dispatch(getBestPerQuiz());
    dispatch(getAllTopicsSummary({ limit: 5 }));
    dispatch(getXp());
    if (selectedCategory) {
      dispatch(getTopicLeaderboard({ topicName: selectedCategory, limit: 10 }));
    }
  }, [dispatch, selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Use topicLeaderboard if a topic is selected, otherwise use overall leaderboard
  const currentLeaderboard = selectedCategory ? topicLeaderboard : leaderboard;
  const topThree = currentLeaderboard.slice(0, 3);
  const restOfLeaderboard = currentLeaderboard.slice(3); // Changed to slice(3) to account for 0-based indexing

  const calculateUserRank = (leaderboard, userPoints) => {
  if (!leaderboard || !userPoints) return null;

  const sortedLeaderboard = [...leaderboard].sort((a, b) => b.xp_points - a.xp_points);

  let rank = 1;
  let previousPoints = null;
  for (let i = 0; i < sortedLeaderboard.length; i++) {
    const currentPoints = sortedLeaderboard[i].xp_points;
    if (currentPoints !== previousPoints) {
      rank = i + 1;
      previousPoints = currentPoints;
    }
    if (currentPoints === userPoints) {
      return rank;
    }
    if (currentPoints < userPoints) {
      return rank;
    }
  }
  return sortedLeaderboard.length + 1;
};

const userRank = calculateUserRank(currentLeaderboard, xp?.points);

  return (
    <>
      <TopRank onCategoryChange={handleCategoryChange} />
      <hr style={{ border: "1px solid #DEDEDF" }} />
      <TopThree topThree={topThree} />

      <YourRank text={t("leaderboard.yourRank")} />
      <RankCard points={xp?.points} rank={userRank || "NA"} /> {/* Assuming user's rank is calculated elsewhere */}
      <YourRank text={t("leaderboard.yourCompetitions")} />

      {restOfLeaderboard?.map((rest, index) => (
        <RankCard
          key={rest.student_id}
          points={rest.xp_points}
          rank={index + 4} // Ranks start from 4 for the rest of the leaderboard
          name={rest.name || "Anonymous"}
        />
      ))}
    </>
  );
};

export default Leaderboard;
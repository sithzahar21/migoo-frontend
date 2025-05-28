import React, {useState} from 'react'
import TestTitle from './TestTitle'
import TestHeader from './TestHeader'
import { Box, Grid, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'
import MCQ from "../../../components/mcq/MCQ"
import Chart from 'react-apexcharts';
import TestResults from '../../../components/modals/testresults/TestResults';

import { useTranslation } from 'react-i18next';

const Reading = ({showSubmitButton}) => {
  const [openPopup, setOpenPopup] = useState(false);
   const questions_data = [
     {
       question: "A person who is deficient in a particular nutrient may crave certain foods.",
       options: [
         { text: "A strong desire for certain foods can be caused by the lack of a specific nutrient.", isCorrect: true, explanation:"This is an explanation of the answer in a tooltip." },
         { text: "Consuming an adequate amount of nutrients can promote good health.", isCorrect: false },
         { text: "Cravings can lead to the excessive consumption of food.", isCorrect: false },
         { text: "People tend to consume foods that have little nutritional value.", isCorrect: false }
       ]
     },
     {
       question: "Which sentence is grammatically correct?",
       options: [
         { text: "She don't like ice cream.", isCorrect: false },
         { text: "She doesn't likes ice cream.", isCorrect: false },
         { text: "She doesn't like ice cream.", isCorrect: true, explanation:"This is an explanation of the answer in a tooltip." },
         { text: "She not like ice cream.", isCorrect: false }
       ]
     },
     {
       question: "Choose the correct form of the verb: 'They ___ to the party last night.'",
       options: [
         { text: "go", isCorrect: false },
         { text: "gone", isCorrect: false },
         { text: "went", isCorrect: true, explanation:"This is an explanation of the answer in a tooltip." },
         { text: "going", isCorrect: false }
       ]
     },
     {
       question: "Fill in the blank: 'If I ___ you, I would apologize.'",
       options: [
         { text: "was", isCorrect: false },
         { text: "am", isCorrect: false },
         { text: "were", isCorrect: true, explanation:"This is an explanation of the answer in a tooltip." },
         { text: "be", isCorrect: false }
       ]
     },
     {
       question: "Choose the correct sentence:",
       options: [
         { text: "Its a beautiful day.", isCorrect: false },
         { text: "It’s a beautiful day.", isCorrect: true, explanation:"This is an explanation of the answer in a tooltip." },
         { text: "Its’ a beautiful day.", isCorrect: false },
         { text: "Its’s a beautiful day.", isCorrect: false }
       ]
     }
   ];
   const [answers, setAnswers] = useState(Array(questions_data.length).fill(null));
   const [showResult, setShowResult] = useState(false);
   const [openResultModal, setOpenResultModal] = useState(false);
 
   const handleOptionChange = (questionIndex, selectedOption) => {
     const newAnswers = [...answers];
     newAnswers[questionIndex] = selectedOption;
     setAnswers(newAnswers);
   };
 
   const calculateResults = () => {
     setShowResult(true);
     setOpenResultModal(true);
   };
 
   const handleCloseModal = () => {
     setOpenResultModal(false);
   };
 
   const correctCount = questions_data.reduce((acc, q, idx) => {
     const correctOption = q.options.find((o) => o.isCorrect);
     return acc + (correctOption.text === answers[idx] ? 1 : 0);
   }, 0);
 
   const incorrectCount = answers.filter((ans, idx) => ans && questions_data[idx].options.find(o => o.isCorrect).text !== ans).length;
 
   const donutChartOptions = {
     chart: { type: 'donut' },
     labels: ['Correct', 'Incorrect'],
     colors: ['#4caf50', '#f44336'],
     legend: { position: 'bottom' }
   };
 
   const donutChartSeries = [correctCount, incorrectCount];

   const {t} = useTranslation()
  
  return (
    <>
    <TestHeader
    title={t('reading.heading')}
    subtitle={t('reading.subHeading')}
    />

<Box dir="ltr">
    <Grid container spacing={5} mt={1}>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <Box style={{border:"1px solid #2a8efe", borderRadius:"10px"}}>
        <Typography p={1}>
            On the streets of Mumbai, India, on any business day, some 5,000 men weave their way on foot or on bicycle through the city's dense traffic, each carrying 30 or more metal lunch boxes. These lunch boxes are called dabbas and the men who transport them are known as dabbawalas. A dabba has two, three, or four tiers, each of which contains one element of a meal: rice, curried vegetables, naan bread, etc. Every day, dabbawalas deliver almost 200,000 home-cooked lunches from people's homes to their places of employment in the city.
       <p>The dabbawala network started in 1890, when a Mumbai banker decided he wanted a meal cooked in his own kitchen to be delivered to his office at lunchtime. He hired the first ever dabbawala, Mahadeo Havaji Bachche, to bring the meal to him. The banker's co-workers, envious of his freshly cooked, promptly delivered lunches, soon requested Bachche's services as well. Unable to keep up with demand, Bachche enlisted his friends and relatives to assist in deliveries. The idea caught on from there.
        </p><p>Today the dabbawalas have a well-oiled system. In mid-morning, they pick up dabbas from their customers' homes. The dabbas are labeled using hand-painted symbols and colors to denote the address to which each dabba is to be delivered and to which it should be returned. Each dabbawala takes his boxes to the nearest train station, where they are sorted and loaded onto trains according to their destination. When they arrive, the dabbas are unloaded, sorted again, and assigned to another dabbawala, who delivers them to the customers in time for lunch. After lunchtime, the dabbawalas reverse the process, picking up the empty dabbas and bringing them back to customers' homes.
        </p><p>Despite their old-fashioned methods, the dabbawalas can teach high-tech delivery services a thing or two. They seldom fail to deliver a meal on time. According to a 2010 study by Harvard Business School, the dabbawalas make fewer than 3.4 errors per million transactions. It is no wonder, then, that executives from industry giants such as Amazon and FedEx have spent time studying the secrets of the dabbawalas' success.
        </p>
        </Typography>
        </Box>
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12}>
          <Typography mb={3} variant="body1">
            This part consists of two passages, each followed by several related questions. For each question,
            <Typography variant="h6" mt={1}>choose the most appropriate answer based on the passage.</Typography>
          </Typography>

          <Typography variant="h2" style={{marginBottom:"30px"}}>Questions 1 to 5</Typography>
          {questions_data.map((item, index) => (
            <MCQ
              key={index}
              question={item.question}
              options={item.options}
              index={index}
              selectedOption={answers[index]}
              handleOptionChange={handleOptionChange}
              showResult={showResult}
            />
          ))}

         {showSubmitButton && 
          <Button variant="contained" color="primary" sx={{ m: 1 }} onClick={calculateResults}>
          Submit Test
        </Button>
         }
         
        </Grid>
    </Grid>
</Box>

      <TestResults 
      testname="Reading Test"
      openResultModal={openResultModal}
      handleCloseModal={handleCloseModal}
      donutChartOptions={donutChartOptions}
      donutChartSeries={donutChartSeries}
      correctCount={correctCount}
      incorrectCount={incorrectCount}
      />
  
    </>
  )
}

export default Reading
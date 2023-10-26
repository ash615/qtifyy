import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { fetchFaq } from '../../api/api';

const FAQAccordion = () => {
  const dataBackUp = [
    {
      question: 'Is QTify free to use?',
      answer: 'Yes! It is 100% free, and has 0% ads!',
    },
  ];

  const [dataFaq, setDataFaq] = useState([]);
  const getData = async () => {
    try {
      const { data } = await fetchFaq();
      // console.log(data);
      setDataFaq(data);
    } catch (error) {
      console.error(error);
    }
  };

  const faqData = dataFaq.length > 0 ? dataFaq : dataBackUp;

  useEffect(() => {
    getData();
  }, []);

  const styles = {
    header: {
      textAlign: 'center',
      fontWeight: 600,
      fontSize: '34px',
      lineHeight: ' 75px',
    },

    outerContainer: {
      width: '80%',
      margin: '1rem auto',
      border: '1px solid white',
      borderRadius: '10px',
    },
    accordion: {
      width: '100%',
      borderRadius: '10px',
      background: 'black',
      color: 'white',
    },
    accordionSummary: {
      color: 'white',
      background: 'black',
      borderRadius: '10px',
    },
    accordionDetails: {
      color: 'black',
      background: 'white',
      borderRadius: '0 0 10px 10px',
    },
    expandIcon: {
      color: 'green',
      fontSize: '32px',
    },
    questions: {
      fontSize: '17px',
      fontWeight: '500',
      lineHeight: '30px',
    },
    answers: {
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '27px',
    },
  };

  const {
    header,
    outerContainer,
    accordion,
    accordionSummary,
    accordionDetails,
    expandIcon,
    questions,
    answers,
  } = styles;

  return (
    <section>
      <header>
        <Typography style={header}>FAQs</Typography>
      </header>
      {faqData.map(({ question, answer }, i) => (
        <div style={outerContainer}>
          <Accordion key={i} style={accordion}>
            <AccordionSummary
              style={accordionSummary}
              expandIcon={<ExpandMoreIcon style={expandIcon} />}
              aria-controls={`panel${i + 1}-content`}
              id={`panel${i + 1}-header`}
            >
              <Typography style={questions}>{question}</Typography>
            </AccordionSummary>
            <AccordionDetails style={accordionDetails}>
              <Typography style={answers}>{answer}</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </section>
  );
};

export default FAQAccordion;

import React, { useEffect, useState } from "react";
import { getQuizzes } from "./QuizzApi"; // Adjust the path as necessary
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CircularProgress,
  Box,
} from "@mui/material";

const QuizzScreen = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const resp = await getQuizzes();
        setQuizzes(resp);
      } catch (error) {
        setError("Failed to fetch quizzes.");
      } finally {
        setLoading(false);
      }
    };

    fetchQuizzes();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  const handleClick = (quiz) => {
    localStorage.setItem("quizzToPlay", JSON.stringify(quiz));
    navigate("/quizzPlay");
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        All Quizzes
      </Typography>
      <Grid container spacing={4}>
        {quizzes.map((quiz, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                justifyContent: "space-between",
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={quiz.banner_url}
                alt={quiz.title}
              />
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {quiz.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {quiz.description}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  Category: {quiz.category}
                </Typography>
              </CardContent>
              <Box sx={{ p: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => handleClick(quiz)}
                >
                  Start Quiz
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default QuizzScreen;

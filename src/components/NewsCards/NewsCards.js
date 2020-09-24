import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import { Grid, Grow, Typography } from "@material-ui/core";
import useStyles from "./styles.js";
import Categories from "../Categories";

const infoCards = [
  {
    color: "#ffffff",
    title: "Give me the",
    info: "Give me the latest news",
    text: "Give me the latest news",
  },
  {
    color: "#ffffff",
    title: "Search terms",
    info:
      "Entertainment, General, Health, Science, Business, Sports, Technology...",
    text: "Show me entertainment news",
  },
  {
    color: "#ffffff",
    title: "What's up with?",
    info:
      "Bitcoin, PlayStation 5, Smartphones, Airlines, San Francisco 49ers...",
    text: "What's up with Elon Musk?",
  },
  {
    color: "#ffffff",
    title: "Search by source",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from Wired",
  },
];

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid
          container
          className={classes.container}
          alignItems="stretch"
          spacing={3}
        >
          {infoCards.map((infoCard) => (
            <Grid item xs={12} sm={6} md={4} lg={3} className={classes.info}>
              <div
                className={classes.card}
                style={{ backgroundColor: infoCard.color }}
              >
                <div className=" rounded-lg py-3">
                  <div className="text-xl font-semibold text-gray-900">
                    {infoCard.title}
                  </div>
                </div>
                {infoCard.info ? (
                  <Typography>
                    <div className="bg-orange-100 rounded-t-lg rounded-bl-lg px-3 py-3">
                      {infoCard.info}
                    </div>
                    <br />
                  </Typography>
                ) : null}
                <Typography variant="h6">
                  <div className="text-sm">
                    Try saying: <br />
                    <i>{infoCard.text}</i>
                  </div>
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid
        container
        className={classes.container}
        alignItems="stretch"
        spacing={3}
      >
        {articles.map((article, i) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
              <NewsCard activeArticle={activeArticle} article={article} i={i} />
            </Grid>
          );
        })}
      </Grid>
    </Grow>
  );
};

export default NewsCards;

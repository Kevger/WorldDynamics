import { Container, createStyles, Grid } from "@mantine/core";
import Controls from "./Components/Controls";
import Explanation from "./Components/Explaination";
import Graph from "./Components/Graph";
import Hero from "./Components/Hero";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 1024,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },
}));

export default function App() {
  const { classes } = useStyles();
  return (
    <Container className={classes.content}>
      <Hero />
      <Grid>
        <Grid.Col span={12} md={4} lg={4}>
          <Controls />
        </Grid.Col>
        <Grid.Col span={12} md={8} lg={8}>
          <Graph />
        </Grid.Col>
      </Grid>
      <Explanation/>
    </Container>
  );
}

import { createStyles, Container, Title, Text, Image } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,
    width: "300px",
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: "4px 12px",
  },
}));

export default function Hero() {
  const { classes } = useStyles();

  return (
    <Container>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            Jay Forresters, World Dynamics 1971
          </Title>
          <Text color="dimmed" mt="md">
            The cybernetic world model of Jay Wright Forrester, the founder of
            system dynamics, published in 1971, attempts to predict the future
            growth of humanity. <br />
            Population, natural resources, environmental pollution, agricultural
            and capital investment represent the five levels that interact
            through complex feedback loops in order to fully describe global
            human growth and quality of life. <br />
            The model served as the basis for the more complex world model
            world3, which was the object of the book The Limits of Growth (Club
            of Rome) published one year later..
          </Text>
        </div>
        <Image
        mt="lg"
          className={classes.image}
          src="assets/worldDynamics2.png"
          title="Image from World Dynamics (1971)"
          caption="Population dynamics – World Dynamics (1971) p.28"
        />
      </div>
    </Container>
  );
}

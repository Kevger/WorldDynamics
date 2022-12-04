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

export default function Explaination() {
  const { classes } = useStyles();

  return (
    <Container>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Text color="dimmed" mt="md">
            Nested feedback loops are the core of this simulation. For example,
            the population is regulated by both birth and death rates, and both
            rates in turn interact directly as well as indirectly with all other
            system parameters, including themselves, through feedback loops that
            are interleaved with each other.
            <br />
            <br />
            The model can be simulated completely by computer and shows that our
            exponential growth cannot be sustained in this way and that in all
            scenarios a collapse of humanity in the 21st century can only be
            prevented by immediate action (1971). All constants were chosen so
            that the simulation from 1900 to 1970 corresponds to reality.
            <br />
            <br />
            Just like the original from 1971, it is possible to run through
            potential scenarios and future predictions with the help of the
            modifiers. The modifiers only take effect from 1971 onwards; between
            1900 and 1970, the progressions correspond to the history.
          </Text>
        </div>
        <Image
          mt="xl"
          className={classes.image}
          src="assets/worldDynamics.png"
          title="Image from World Dynamics (1971) p.20-21"
          caption="The world modell – World Dynamics (1971) p.20-21"
        />
      </div>
      <a href="https://kevingerman.de/" target="_blank">
        <Text>Impressum</Text>
      </a>

      <a href="https://github.com/Kevger/WorldDynamics" target="_blank">
        <Text>Github</Text>
      </a>
    </Container>
  );
}

import { useViewportSize } from "@mantine/hooks";
import {
  Tooltip,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis
} from "recharts";
import { useControlsStore } from "../../store";
import WorldDynamics from "../../worldDynamics/worldDynamics";

const colorScheme = {
  p: "red",
  ql: "orange",
  ci: "blue",
  nr: "green",
  polr: "purple",
};

const SIM_START_DATE = 1900;
const SIM_END_DATE = 2100;
const SIM_STEP_YEAR = 0.25;
const GRAPH_STEP_YEAR = 1;

export default function Graph() {
  const modifiers = useControlsStore();
  const { width } = useViewportSize();
  const simulator = new WorldDynamics();
  simulator.BRN1 = modifiers.birthRate;
  simulator.DRN1 = modifiers.deathRate;
  simulator.CIGN1 = modifiers.capitalInvestmentGeneration;
  simulator.POLN1 = modifiers.polution;
  simulator.NRUN1 = modifiers.naturalResourceUsage;
  simulator.FC1 = modifiers.foodProduction;
  simulator.CIDN1 = modifiers.capitalInvestmentDiscard;
  const data = [];

  for (let i = SIM_START_DATE; i <= SIM_END_DATE; ++i) {
    simulator.run(GRAPH_STEP_YEAR, SIM_STEP_YEAR);
    data.push({
      year: i,
      p: simulator.P / 1e9,
      ci: simulator.CI / 1e9,
      nr: Math.max(simulator.NR / 1e9, 0),
      polr: simulator.POLR,
      ql: simulator.QL,
    });
  }

  return (
    <ResponsiveContainer>
      <LineChart data={data}>
        <XAxis dataKey="year" />
        <Tooltip
          formatter={(value, name, item) => [
            (value as number).toFixed(2),
            name,
          ]}
          wrapperStyle={{ opacity: "0.9" }}
        />
        <Legend />
        <Line
          name="Population"
          yAxisId="p"
          type="monotone"
          dataKey="p"
          stroke={colorScheme.p}
          strokeWidth={2}
          dot={false}
        />
        <Line
          name="Capital Investment"
          yAxisId="ci"
          type="monotone"
          dataKey="ci"
          stroke={colorScheme.ci}
          strokeWidth={2}
          dot={false}
        />
        <Line
          name="Natural Resources"
          yAxisId="nr"
          type="monotone"
          dataKey="nr"
          stroke={colorScheme.nr}
          strokeWidth={2}
          dot={false}
        />
        <Line
          name="Polution"
          yAxisId="polr"
          type="monotone"
          dataKey="polr"
          stroke={colorScheme.polr}
          strokeWidth={2}
          dot={false}
        />
        <Line
          name="Quality of life"
          yAxisId="ql"
          type="monotone"
          dataKey="ql"
          stroke={colorScheme.ql}
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

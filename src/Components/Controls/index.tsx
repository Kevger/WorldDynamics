import { Card, Divider, Slider, Stack, Text } from "@mantine/core";
import {
  IconBabyCarriage,
  IconSkull,
  IconTractor,
  IconCashBanknote,
  IconCampfire,
  IconTrash,
  IconPlant2,
} from "@tabler/icons";
import { useControlsStore } from "../../store";

const ICON_SIZE = 20;

function LabeledSlider({
  text,
  min,
  max,
  step,
  icon,
  value,
  onChange,
}: {
  text: string;
  min: number;
  max: number;
  step: number;
  icon: React.ReactNode;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <div>
      <Text>{text}</Text>
      <Slider
        mt={5}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
        label={(v) => v.toFixed(2)}
        thumbSize={32}
        styles={{ thumb: { borderWidth: 2, padding: 3 } }}
        thumbChildren={icon}
      />
    </div>
  );
}

export default function Controls() {
  const store = useControlsStore();

  return (
    <Card
      radius="md"
      shadow="lg"
      my="xl"
      withBorder
      style={{ maxWidth: "420px" }}
    >
      <Stack spacing="sm">
        <LabeledSlider
          text="Birth rate"
          min={0}
          max={1}
          step={0.001}
          value={store.birthRate}
          onChange={store.setBirthRate}
          icon={<IconBabyCarriage size={ICON_SIZE} />}
        />
        <LabeledSlider
          text="Death rate"
          min={0}
          max={1}
          step={0.001}
          value={store.deathRate}
          onChange={store.setDeathRate}
          icon={<IconSkull size={ICON_SIZE} />}
        />
        <LabeledSlider
          text="Natural resource usage"
          min={0}
          max={4}
          step={0.1}
          value={store.naturalResourceUsage}
          onChange={store.setNaturalResourceUsage}
          icon={<IconPlant2 size={ICON_SIZE} />}
        />
        <LabeledSlider
          text="Capital investment generation"
          min={0}
          max={0.5}
          step={0.005}
          value={store.capitalInvestmentGeneration}
          onChange={store.setCapitalInvestmentGeneration}
          icon={<IconCashBanknote size={ICON_SIZE} />}
        />
        <LabeledSlider
          text="Capital investment discard"
          min={0}
          max={0.5}
          step={0.005}
          value={store.capitalInvestmentDiscard}
          onChange={store.setCapitalInvestmentDiscard}
          icon={<IconCampfire size={ICON_SIZE} />}
        />
        <LabeledSlider
          text="Polution"
          min={0}
          max={5}
          step={0.05}
          value={store.polution}
          onChange={store.setPolution}
          icon={<IconTrash size={ICON_SIZE} />}
        />
        <LabeledSlider
          text="Food production"
          min={0}
          max={10}
          step={0.1}
          value={store.foodProduction}
          onChange={store.setFoodProduction}
          icon={<IconTractor size={ICON_SIZE} />}
        />
      </Stack>
    </Card>
  );
}

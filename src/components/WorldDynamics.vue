<template>
  <v-row>
    <v-col cols="10">
      <canvas id="myChart" ref="myChart"></canvas>
    </v-col>
    <v-col cols="2">
      <v-row dense>
        <v-col cols="12">
          <v-subheader class="pl-0"> Birth rate</v-subheader>
          <v-slider min="0" max="4" step="0.05" v-model="BRN1Modifier" thumb-label track-color="#616161" thumb-color="#9E9E9E" color="#FFFF"></v-slider>
        </v-col>
        <v-col cols="12">
          <v-subheader class="pl-0">Death rate</v-subheader>
          <v-slider min="0" max="4" step="0.05" v-model="DRN1Modifier" thumb-label track-color="#616161" thumb-color="#9E9E9E" color="#FFFF"></v-slider>
        </v-col>
        <v-col cols="12">
          <v-subheader class="pl-0">Natural ressource usage</v-subheader>
          <v-slider min="0" max="2" step="0.05" v-model="NRUN1Modifier" thumb-label track-color="#616161" thumb-color="#9E9E9E" color="#FFFF"></v-slider>
        </v-col>
        <v-col cols="12">
          <v-subheader class="pl-0">Capital investment generation</v-subheader>
          <v-slider min="0" max="5" step="0.05" v-model="CIGN1Modifier" thumb-label track-color="#616161" thumb-color="#9E9E9E" color="#FFFF"></v-slider>
        </v-col>
        <v-col cols="12">
          <v-subheader class="pl-0">Capital investment discard</v-subheader>
          <v-slider min="0" max="5" step="0.05" v-model="CIDN1Modifier" thumb-label track-color="#616161" thumb-color="#9E9E9E" color="#FFFF"></v-slider>
        </v-col>
        <v-col cols="12">
          <v-subheader class="pl-0">Polution</v-subheader>
          <v-slider min="0" max="5" step="0.05" v-model="POLN1Modifier" thumb-label track-color="#616161" thumb-color="#9E9E9E" color="#FFFF"></v-slider>
        </v-col>
        <v-col cols="12">
          <v-subheader class="pl-0">Food production</v-subheader>
          <v-slider min="0" max="10" step="0.05" v-model="FC1Modifier" thumb-label track-color="#616161" thumb-color="#9E9E9E" color="#FFFF"></v-slider>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import WorldDynamics from "../plugins/WorldDynamics";
const Chart = require("chart.js");
export default {
  name: "WorldDynamics",
  data() {
    return {
      BRN1Modifier: 1.0,
      DRN1Modifier: 1.0,
      NRUN1Modifier: 1.0,
      CIGN1Modifier: 1.0,
      CIDN1Modifier: 1.0,
      POLN1Modifier: 1.0,
      FC1Modifier: 1.0,
      worldDynamics: new WorldDynamics(),
      lastTime: 0,
      myChart: null
    };
  },
  methods: {
    setSimDefaultParams() {
      this.defaultBRN1 = this.worldDynamics.BRN1;
      this.defaultDRN1 = this.worldDynamics.DRN1;
      this.defaultNRUN1 = this.worldDynamics.NRUN1;
      this.defaultCIGN1 = this.worldDynamics.CIGN1;
      this.defaultCIDN1 = this.worldDynamics.CIDN1;
      this.defaultPOLN1 = this.worldDynamics.POLN1;
      this.defaultFC1 = this.worldDynamics.FC1;
    },
    initChartData() {
      window.chartColors = {
        red: "rgb(255, 99, 132)",
        orange: "rgb(255, 159, 64)",
        yellow: "rgb(255, 205, 86)",
        green: "rgb(75, 192, 192)",
        blue: "rgb(54, 162, 235)",
        purple: "rgb(153, 102, 255)",
        grey: "rgb(201, 203, 207)",
        black: "rgb(0,0,0)",
        P: "#FF3333",
        CI: "#F0F0F0",
        NR: "#0092CC",
        POLR: "#779933",
        QL: "#DCD427",
        GRID: "#969696",
        GRIDFont: "#F0F0F0",
        TITLE: "#F0F0F0"
      };
      const ctx = this.$refs.myChart;
      const fill = false;
      this.myChart = new Chart(ctx, {
        type: "line",
        data: {
          datasets: [
            {
              label: "Population in b",
              backgroundColor: window.chartColors.P,
              borderColor: window.chartColors.P,
              pointRadius: 0,
              data: [],
              fill: fill,
              yAxisID: "yP"
            },
            {
              label: "Capital Investment in b",
              fill: fill,
              pointRadius: 0,
              backgroundColor: window.chartColors.CI,
              borderColor: window.chartColors.CI,
              data: [],
              yAxisID: "yCI"
            },
            {
              label: "Natural Resources in b",
              fill: fill,
              pointRadius: 0,
              backgroundColor: window.chartColors.NR,
              borderColor: window.chartColors.NR,
              data: [],
              yAxisID: "yNR"
            },
            {
              label: "Polutionratio",
              fill: fill,
              pointRadius: 0,
              backgroundColor: window.chartColors.POLR,
              borderColor: window.chartColors.POLR,
              data: [],
              yAxisID: "yPOLR"
            },
            {
              label: "Quality of life",
              fill: fill,
              pointRadius: 0,
              backgroundColor: window.chartColors.QL,
              borderColor: window.chartColors.QL,
              data: [],
              yAxisID: "yQL"
            }
          ]
        },

        options: {
          annotation: {
            events: ["click"],
            annotations: [
              {
                drawTime: "afterDatasetsDraw",
                id: "vline",
                type: "line",
                mode: "vertical",
                scaleID: "x-axis-0",
                value: 1971,
                borderColor: "red",
                borderWidth: 2
              }
            ]
          },
          responsive: true,
          title: {
            display: true,
            text: "Jay Forrester, World Dynamics 1971",
            fontSize: 21,
            fontColor: window.chartColors.TITLE
          },
          tooltips: {
            enabled: false
          },
          legend: {
            position: "bottom",
            labels: {
              fontColor: window.chartColors.GRIDFont
            }
          },
          responsiveAnimationDuration: 0,
          scales: {
            xAxes: [
              {
                type: "linear",
                distribution: "series",
                offset: true,

                display: true,
                scaleLabel: {
                  display: true,
                  labelString: "year",
                  fontColor: window.chartColors.GRIDFont
                },
                gridLines: {
                  color: window.chartColors.GRID
                },
                ticks: {
                  major: {
                    enabled: true,
                    fontStyle: "bold"
                  },
                  fontColor: window.chartColors.GRIDFont,
                  source: "data",
                  autoSkip: true,
                  autoSkipPadding: 35,
                  sampleSize: 200,
                  suggestedMin: 1900,
                  suggestedMax: 2100,
                  minRotation: 0,
                  maxRotation: 0
                }
              }
            ],
            yAxes: [
              {
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: "P in b",
                  fontColor: window.chartColors.P
                },
                gridLines: {
                  display: true,
                  color: window.chartColors.GRID
                },
                ticks: {
                  suggestedMin: 0,
                  suggestedMax: 10,
                  fontColor: window.chartColors.P
                },
                id: "yP"
              },
              {
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: "CI in b",
                  fontColor: window.chartColors.CI
                },
                gridLines: {
                  display: false,
                  color: window.chartColors.CI
                },
                ticks: {
                  suggestedMin: 0,
                  suggestedMax: 30,
                  fontColor: window.chartColors.CI
                },
                id: "yCI"
              },
              {
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: "NR in b",
                  fontColor: window.chartColors.NR
                },
                gridLines: {
                  display: false,
                  color: window.chartColors.NR
                },
                ticks: {
                  fontColor: window.chartColors.NR,
                  suggestedMin: 0,
                  suggestedMax: 100
                },
                id: "yNR"
              },
              {
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: "POLR",
                  fontColor: window.chartColors.POLR
                },
                gridLines: {
                  display: false,
                  color: window.chartColors.POLR
                },
                ticks: {
                  fontColor: window.chartColors.POLR,
                  suggestedMin: 0,
                  suggestedMax: 60,
                  min: 0,
                  max: 60
                },
                id: "yPOLR"
              },
              {
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: "QL",
                  fontColor: window.chartColors.QL
                },
                gridLines: {
                  color: window.chartColors.QL,
                  display: false
                },
                ticks: {
                  fontColor: window.chartColors.QL,
                  suggestedMin: 0,
                  suggestedMax: 4,
                  min: 0,
                  max: 4
                },
                id: "yQL"
              }
            ]
          }
        }
      });
    },
    simStep() {
      const MAX_YEAR = 2100;
      if (this.worldDynamics.TIME < MAX_YEAR) {
        const stepSize = 0.25;
        this.worldDynamics.nextStep(stepSize);
        if (this.worldDynamics.TIME >= this.lastTime + 1) {
          this.lastTime = this.worldDynamics.TIME;
          this.updateChartData(Math.floor(this.worldDynamics.TIME));
          this.myChart.update();
        }
      } else {
        this.resetSimulation();
      }
    },
    updateChartData(x) {
      this.myChart.data.datasets[0].data.push({
        x: x,
        y: this.worldDynamics.P / 1e9
      });
      this.myChart.data.datasets[1].data.push({
        x: x,
        y: this.worldDynamics.CI / 1e9
      });
      this.myChart.data.datasets[2].data.push({
        x: x,
        y: Math.max(this.worldDynamics.NR / 1e9, 0)
      });
      this.myChart.data.datasets[3].data.push({
        x: x,
        y: this.worldDynamics.POLR
      });
      this.myChart.data.datasets[4].data.push({
        x: x,
        y: this.worldDynamics.QL
      });
    },
    resetSimulation() {
      for (let i = 0; i < this.myChart.data.datasets.length; ++i)
        this.myChart.data.datasets[i].data = [];
      this.worldDynamics.softReset();
      this.lastTime = 0;
    }
  },
  watch: {
    BRN1Modifier() {
      this.worldDynamics.BRN1 = this.defaultBRN1 * this.BRN1Modifier;
    },
    DRN1Modifier() {
      this.worldDynamics.DRN1 = this.defaultDRN1 * this.DRN1Modifier;
    },
    NRUN1Modifier() {
      this.worldDynamics.NRUN1 = this.defaultNRUN1 * this.NRUN1Modifier;
    },
    CIGN1Modifier() {
      this.worldDynamics.CIGN1 = this.defaultCIGN1 * this.CIGN1Modifier;
    },
    CIDN1Modifier() {
      this.worldDynamics.CIDN1 = this.defaultCIDN1 * this.CIDN1Modifier;
    },
    POLN1Modifier() {
      this.worldDynamics.POLN1 = this.defaultPOLN1 * this.POLN1Modifier;
    },
    FC1Modifier() {
      this.worldDynamics.FC1 = this.defaultFC1 * this.FC1Modifier;
    }
  },
  props: {},
  mounted() {
    const FRAMERATE = 60;
    this.setSimDefaultParams();
    this.initChartData();
    this.loop = setInterval(() => this.simStep(), 1000 / FRAMERATE);
  }
};
</script>

<style scoped>
.pl-0 {
  color: white!important;
}
</style>

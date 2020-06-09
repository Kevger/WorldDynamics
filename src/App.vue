<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <div>
      <v-content>
        <v-container>
          <WorldDynamics />
          <v-card color="black">
            <div>
              <p class="font1">
                Das kybernetische Weltmodell von Jay Wright Forrester, dem
                Begründer der Systemdynamik, aus dem Jahr 1971, versucht das
                zukünftige Wachstum der Menschheit zu prognostizieren.
                <span style="color: #FF3333">Population</span>,
                <span style="color: #0092CC">natürliche Ressourcen</span>,
                <span style="color: #779933">Umweltverschmutzung</span>,
                <span style="color: rgba(240, 240, 240, 0.746)"
                  >Agrar- und Kapitalinvestment</span
                >
                stellen hierbei die fünf Pegel dar, die durch komplexe
                Rückkopplungsschleifen miteinander wechselwirken und damit das
                globale Menschheitswachstum mitsamt der
                <span style="color: #DCD427">Lebensqualität</span>
                vollständig beschreiben sollen. So wird beispielsweise die
                Population sowohl durch die Geburten- als auch Sterberate
                geregelt, wobei beide Raten wiederrum sowohl direkt, als auch
                indirekt, durch mitunter verschachtelten Rückkopplungsschleifen
                mit allen anderen Systemparametern, einschließlich sich selber,
                wechselwirken.
              </p>
              <p class="font1">
                Das Modell ist vollständig computergestützt simulierbar und
                zeigt, dass unser exponentielles Wachstum nicht so weitergehen
                darf und in allen Szenarien ein Kollaps der Menschheit im 21.
                Jahrhundert nur mit sofortigem Handeln (Stand 1971) verhindert
                werden kann. Alle Konstanten wurden so gewählt, dass die
                Simulation von 1900 bis 1970 mit der Realität übereinstimmt. Das
                Modell diente als Grundlage für das komplexere Weltmodell
                world3, welches Erkenntnisobjekt für das ein Jahr später
                veröffentlichte Buch
                <i>Die Grenzen des Wachstums</i> (Club of Rome) war.
              </p>
            </div>

            <div>
              <p class="font1">
                Gleich dem Original aus 1971, können mithilfe von den oben
                aufgelisteten Modifikatoren (in %) mögliche Szenarien und
                Zukunftsprognosen durchgespielt werden. Die Modifikatoren wirken
                erst ab dem Jahr 1971, zwischen 1900 und 1970 stimmen die
                Verläufe mit der Historie überein.
              </p>
            </div>
          </v-card>
        </v-container>
      </v-content>
    </div>

    <v-footer absolute dark color="primary">
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>Future of Making</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import WorldDynamics from "./components/WorldDynamics";

export default {
  name: "App",

  components: {
    WorldDynamics
  },

  data: () => ({})
};
</script>

<style>
p.font1 {
  text-align: left;
  font-size: 20px;
  color: #f0f0f0;
  background-color: black;
}
</style>

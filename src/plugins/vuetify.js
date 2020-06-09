import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
            customProperties: true,
        },
        themes: {
            light: {
                primary: "#000",
                secondary: "#FFF",
                accent: "#555",
                error: colors.red.accent3,
                background: "#000" // Not automatically applied
            },
            dark: {
                primary: "#fff",
                background: "#000", // If not using lighten/darken, use base to return hex

            },
        }
    }
});
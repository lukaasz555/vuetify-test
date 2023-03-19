/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          gray: "#F6F1F1",
          dark: "#000000",
          blue: "#146C94",
          lightBlue: "#19A7CE",
          error: "#B0413E",
          success: "#7EA16B",
        },
      },
    },
  },
});

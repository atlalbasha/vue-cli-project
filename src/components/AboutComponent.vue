<template>
  <div>
    <h1>
      <b-icon icon="hexagon" rotate="90" style="width: 45; height: 45;"></b-icon
      >About Page
    </h1>
    <hr />
    <hr />
    <b-form-checkbox-group
      stacked
      v-model="selected"
      :options="options"
      class="mb-3"
      value-field="item"
      text-field="name"
      disabled-field="notEnabled"
    ></b-form-checkbox-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
      ],
      options: [
        {
          item: "1",
          name:
            "Information (minst tio värden) från en eller flera webbtjänster visas upp i webbapplikationen ",
        },
        { item: "2", name: "Textinterpolering ({{ och }}) används" },
        {
          item: "3",
          name:
            "Attributinterpolering (v-bind eller dess kortform) används (key-props (relaterade till v-for) räknas inte)",
        },
        { item: "4", name: "Villkorlig rendering (v-if) används" },
        { item: "5", name: "Listrendering (v-for) används" },
        {
          item: "6",
          name: "Minst en händelse hanteras (v-on eller dess kortform)",
        },
        { item: "7", name: "v-model (och värdet som matas in) används" },
        {
          item: "8",
          name:
            "Webbapplikationen ska vara en Single Page Application bestående av minst två sidor (Använd både router-link och router-view)",
        },
        {
          item: "9",
          name:
            "Minst en .vue-komponent, som inte är App.vue och som inte är en Vue Router-sida/destination, skapas",
        },
        {
          item: "10",
          name:
            "Minst en komponent tar emot, och använder, minst en prop (via props-nyckeln)",
        },
        { item: "11", name: "Minst en Bootstrap-Vue-komponent används" },
        {
          item: "12",
          name:
            "Webbapplikationen ska nyttja ett Web App Manifest, som ska vara genererad via Vue CLI:s PWA-plugin (Webbapplikationen ska, via detta manifest, ha ett eget appnamn, en egen temafärg, och egna ikoner)",
        },
        {
          item: "13",
          name:
            "Webbapplikationen ska fungera offline, och all information, inklusive informationen som hämtats med GET-anropen, måste gå att se även när användaren är offline – använd en Service Worker för detta, som är genererad via Vue CLI:s PWA-plugin",
        },
        {
          item: "14",
          name:
            "Källkoden för projektet publiceras på GitHub (eller liknande) (Om din repository är privat, bjud då in användaren  på GitHub/GitLab)",
        },
        {
          item: "15",
          name:
            "Webbapplikationen ska publiceras på GitHub Pages (eller liknande)",
        },
        {
          item: "16",
          name:
            "Inlämningen ska endast bestå av ett dokument med 1) projektets Clone URL (till ett repository där till exempel vue.config.js, main.js och .vue-filerna finns) och 2) det publicerade projektets webbadress (Använd inte Apple Pages-formatet)",
        },
        {
          item: "17",
          name:
            "Använd någonting annat än fetch (till exempel Axios) för att göra webbanropen",
        },
        { item: "18", name: "Minst en beräknad egenskap (computed) används" },
        { item: "19", name: "Minst en bevakare (watch) används" },
        { item: "20", name: "Datatyper ska vara specificerade för alla props" },
        { item: "21", name: "Minst ett custom event används" },
        {
          item: "22",
          name:
            "Minst ett datavärde sparas i, uppdateras (via en mutation), och hämtas från, Vuex (Ändra inget state på något annat sätt än via mutations)",
        },
        {
          item: "23",
          name: "Använd minst ett Vue Router-adressparametervärde",
        },
        {
          item: "24",
          name: "Bootstrap ska anpassas via minst en Sass-variabel",
        },
        {
          item: "25",
          name:
            "Minst en komponent använder Sass, via style-elementet, i sin .vue-fil",
        },
        {
          item: "26",
          name:
            "Webbapplikationen ska (visuellt) indikera för användaren att användaren är offline, om användaren är (eller går) offline (vue-offline kan användas för detta)",
        },
      ],
    };
  },
};
</script>

<style>
.mb-3 {
  text-align: left;
}
</style>

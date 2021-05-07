<template>
  <div>
    <h1>
      <b-icon
        icon="hexagon"
        animation="spin"
        style="width: 45; height: 45;"
      ></b-icon
      >Contact Page
    </h1>

    <b-form inline class="d-flex justify-content-center">
      <b-form-input
        v-model="newText"
        class="mb-2 mr-sm-2 mb-sm-0 "
        placeholder="Add New Value"
      ></b-form-input>

      <b-button @click="addCity(newText)" variant="primary">Save</b-button>
    </b-form>
    <p>{{ newText }}</p>

    <dl v-if="cities">
      <li v-for="(item, index) in cities" :key="index">
        <dt>{{ item.name }}</dt>
        <dd>{{ item.population }}</dd>
        <br />
      </li>
    </dl>
    <p v-else>Laddar...</p>
  </div>
</template>

<script>
export default {
  created() {
    this.fetchCities();
  },
  data() {
    return {
      cities: null,
      id: null,
      name: null,
      population: null,
      newText: this.text,
    };
  },

  methods: {
    addCity() {
      fetch("https://avancera.app/cities/", {
        body: JSON.stringify({
          name: this.newText,
          population: this.population,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          this.fetchCities();
        });
    },
    fetchCities() {
      fetch("https://avancera.app/cities/")
        .then((response) => response.json())
        .then((result) => {
          this.cities = result;
        });
    },
  },
  props: {
    text: {
      type: String,
      default: "Atlal Basha",
    },
  },
};
</script>

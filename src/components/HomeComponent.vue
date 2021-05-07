<template>
  <div>
    <h1>
      <b-icon icon="hexagon" style="width: 45; height: 45;"></b-icon>Home Page
    </h1>

    <b-form inline class="d-flex justify-content-center">
      <b-form-input
        v-model="newText"
        class="mb-2 mr-sm-2 mb-sm-0 "
        placeholder="Add New Value"
      ></b-form-input>

      <b-button @click="addNewApiValue(newText)" variant="primary"
        >Save</b-button
      >
    </b-form>
    <p>{{ newText }}</p>
    <p>computed function: "{{ initials }}"</p>
    <p>watch function: "{{ newText }}"</p>
    <dl v-if="listApi">
      <li v-for="(item, index) in listApi" :key="index">
        <dt>{{ item.title }}</dt>
        <dd>{{ item.body }}</dd>
        <br />
      </li>
    </dl>
    <p v-else>Laddar...</p>
  </div>
</template>

<script>
export default {
  watch: {
    newText() {
      console.log(` ${this.newText} `);
    },
  },
  computed: {
    initials() {
      return this.newText
        .split(" ") // ['Atlal', 'Basha']
        .map((name) => name.charAt(0)) // ['A', 'B']
        .join("."); // 'A.B'
    },
  },
  created() {
    this.$root.$refs.HomeComponent = this;
    this.getApi();
  },
  data() {
    return {
      listApi: [],
      title: String,
      body: String,
      newText: this.text,
    };
  },

  methods: {
    addNewApiValue(v) {
      console.log(v);
      fetch("https://jsonplaceholder.typicode.com/posts", {
        body: JSON.stringify({ title: this.newText, body: "test" }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          this.getApi();
        });
      this.getApi();
    },

    getApi() {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((result) => {
          this.listApi = result;
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

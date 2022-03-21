<template>
  <v-app>
    <v-main>
      <v-row class="pa-2">
        <v-col cols="1">
          <v-select solo v-model="selectionOne" :items="selectData"></v-select>
        </v-col>
        <v-col cols="1">
          <v-select solo v-model="selectionTwo" :items="selectData"></v-select>
        </v-col>
        <v-col cols="1">
          <v-select solo v-model="selectionThree" :items="selectData"></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
            <v-btn block @click="submitData">
              submit
            </v-btn>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  computed: {
    selectedData() {
      return this.$store.state.selectedData;
    }
  },
  mounted() {
    const data = this.selectedData ?? {};
    if (Object.keys(data)) {
      this.selectionOne = data.one
      this.selectionTwo = data.two
      this.selectionThree = data.three
    }
  },
  data: () => ({
    selectData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    selectionOne: null,
    selectionTwo: null,
    selectionThree: null,
  }),
  methods: {
    setData() {
      this.$store.commit("setData", ) 
    },
    submitData() {
      this.$store.dispatch("submitData")
    }
  }
};
</script>

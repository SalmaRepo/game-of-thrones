<template>
<!-- using bootstrap for styling -->
  <div class="card text-center m-auto w-50 mt-5 p-4">
    <h2>Persons</h2>
    <input
      type="search"
      class="form-control w-75 m-auto shadow-lg p-3 mb-5 bg-body rounded mt-5"
      v-model="search"
      placeholder="Search Persons"
    />
    <ul
      class="d-flex flex-row justify-content-between align-items-center flex-wrap p-4 gap-3 h-50 overflow-auto"
    >
      <li
        v-for="person in filteredPersons"
        :key="person?.name"
        class="card w-25 p-5 shadow-lg p-3 mb-5 bg-body rounded"
      >
        <router-link
          :to="{ path: `/person/${person?.slug}-${person?.house?.slug}` }"
          v-if="person"
          class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
        >
          {{ person?.name }} from {{ person?.house?.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      persons: [],
      search: "",
    };
  },
  computed: {
    filteredPersons() {
      return this.persons.filter((person) =>
        person.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  mounted() {
    // Fetch persons data from API and populate persons array
    fetch("https://api.gameofthronesquotes.xyz/v1/characters")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        return (this.persons = result);
      })
      .catch((err) => console.log(err));
  },
};
</script>

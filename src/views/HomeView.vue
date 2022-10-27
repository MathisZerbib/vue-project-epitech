<script setup>
import UserTable from "../components/user/UserTable.vue";
import BarChart from "../components/charts/BarChart.vue";
// import FormUser from "../components/form/Formuser.vue";
import ChartClock from "../components/charts/ChartClock.vue";
</script>

<template>
  <main>
    <h1>Accueil</h1>
    <ChartClock />
    <UserTable />
    <BarChart />
  </main>
</template>

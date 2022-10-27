<script setup>
import UserTable from "../components/user/UserTable.vue";
import BarChart from "../components/charts/BarChart.vue";
import ChartClock from "../components/charts/ChartClock.vue";
import WorkingTime from "../components/form_working_time/FormWorkingTime.vue";
</script>

<template>
  <main>
    <h1>Time Management Home</h1>
    <ChartClock />
    <UserTable />
    <BarChart />
    <WorkingTime />
  </main>
</template>

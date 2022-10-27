<template>
  {{ countDown.toString() }}
</template>

<script>
export default {
  name: "TimerCount",
  data() {
    return {
      countDown: 10,
    };
  },
  methods: {
    countDownTimer() {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1;
          this.countDownTimer();
        }, 1000);
      }
    },
  },
  created() {
    this.countDownTimer();
  },
};
</script>

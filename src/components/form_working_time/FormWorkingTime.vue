<template>
  <form
    style="height: 100px"
    class="d-flex flex-row justify-content-around align-items-center"
  >
    <div class="form-group">
      <label for="inputStartTime">Start Time</label>
      <input
        v-model="startTime"
        type="time"
        class="w-100"
        id="inputStartTime"
        placeholder="Enter a start time"
      />
      <!-- <small id="startTimeHelp" class="form-text text-muted"
        >We'll never share your email with anyone else.</small
      > -->
    </div>
    <div class="form-group">
      <label for="inputEndTime">End Time</label>
      <input
        v-model="endTime"
        type="time"
        class="w-100"
        id="inputEndTime"
        placeholder="Enter the End time"
      />
    </div>
    <br />
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        startTime: "",
        endTime: "",
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.startTime = "";
      this.form.endTime = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

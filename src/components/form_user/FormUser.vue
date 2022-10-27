<template>
  <form
    style="height: 100px"
    class="d-flex flex-row justify-content-around align-items-center"
  >
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        placeholder="Enter email"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputName">Name</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputName"
        placeholder="Enter name"
      />
    </div>
    <button
      type="submit"
      class="btn btn-primary btn btn-primary mt-3"
      v-on:submit.prevent="onSubmit"
    >
      Submit
    </button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "FormUser",
  data() {
    return {
      form: {
        email: "",
        name: "",
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.createUser(this.form.email, this.form.name);
    },
    createUser: async function (email, name) {
      await axios
        .post('"https://localhost:4000/api/users', {
          user: {
            username: name,
            email: email,
          },
        })
        .then((response) => console.log("works", response))
        .catch(function (error) {
          // error
          console.log(error);
        });
    },
    // onReset(event) {
    //   event.preventDefault();
    //   // Reset our form values
    //   this.form.email = "";
    //   this.form.name = "";
    //   // Trick to reset/clear native browser form validation state
    //   this.show = false;
    //   this.$nextTick(() => {
    //     this.show = true;
    //   });
    // },
  },
};
</script>

<template>
  <div>
    <FormUser />
  </div>
  <div v-if="!users">
    <p>Loading ...</p>
  </div>

  <div v-else>
    <table id="tableComponent" class="table table-bordered table-striped">
      <thead>
        <tr>
          <!-- <th v-for="col in columns" v-bind:key="col">{{ col }}</th> -->
          <th>ID</th>
          <th>Username</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" v-bind:key="user">
          <td>{{ user.id }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td class="d-flex justify-content-center">
            <button
              class="btn btn-primary m-2"
              data-bs-target="#myModal"
              data-bs-toggle="modal"
            >
              <BIconPencilSquare />
            </button>
            <button class="btn btn-danger m-2" @click="deleteUser(user.id)">
              <BIconTrash />
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="modal" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <li class="nav-bar">
            <RouterLink class="nav-link" to="/newUser">Add New User</RouterLink>
          </li> -->
</template>
<script>
import axios from "axios";
import FormUser from "../form_user/FormUser.vue";
export default {
  name: "UserTable",
  data() {
    return {
      users: [],
    };
  },
  // computed: {
  //   columns: function columns() {
  //     if (this.users.length == 0) {
  //       return [];
  //     }
  //     return Object.keys(this.users[0]);
  //   },
  // },

  // async updateUser(id) {
  //   const { data } = await axios.post("https://api/users/" + id);
  //   console.log(data);
  // },
  methods: {
    async deleteUser(id) {
      await axios.delete("http://localhost:4000/api/users/" + id);
    },
  },

  async mounted() {
    const { data } = await axios.get("http://localhost:4000/api/users");
    for (let i = 0; i < data.data.length; i++) {
      this.users.push(data.data[i]);
    }
  },
  components: {
    FormUser,
  },
};
</script>

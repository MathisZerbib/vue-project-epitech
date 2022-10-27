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
          <th v-for="col in columns" v-bind:key="col">{{ col }}</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" v-bind:key="user">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td class="d-flex justify-content-center">
            <button
              class="btn btn-primary m-2"
              data-bs-target="#myModal"
              data-bs-toggle="modal"
            >
              <BIconPencilSquare />
            </button>
            <button class="btn btn-danger m-2" @click="deleteUser">
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
      users: [
        {
          id: 1,
          name: "Abiola Esther",
          email: "Abiola@Abiola.com",
        },
        {
          id: 2,
          name: "Robert V. Kratz",
          email: "Philosophy@phil.com",
        },
        {
          id: 3,
          name: "Kristen Anderson",
          email: "Economics@eco.com",
        },
      ],
    };
  },
  computed: {
    columns: function columns() {
      if (this.users.length == 0) {
        return [];
      }
      return Object.keys(this.users[0]);
    },
  },
  methods: {
    async fetchUsers() {
      const { data } = await axios.get("https://api/users");
      this.users = data;
    },
    async mounted() {
      await this.fetchUsers();
    },
    async updateUser(id) {
      const { data } = await axios.post("https://api/users/" + id);
      console.log(data);
    },
    async deleteUser(id) {
      const { data } = await axios.delete("https://api/users/" + id);
      console.log(data);
    },
  },
  components: {
    FormUser,
  },
};
</script>

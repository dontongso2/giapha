<template>
  <div class="login">
    <div class="login-container">
      <h1>Welcome</h1>
      <img src="/images/logo.svg" alt="" />

      <form @submit.prevent="handleSubmit">
        <div :class="`inp-cus ${email.length > 0 ? 'focused' : ''}`">
          <input
            name="email"
            v-validate="'required|email'"
            v-model="email"
            type="email"
          />
          <span data-placeholder="Email"></span>
        </div>
        <span class="text-error">{{
          errors.first("email") ? errors.first("email") + "." : ""
        }}</span>

        <div :class="`inp-cus ${password.length > 0 ? 'focused' : ''}`">
          <input
            name="password"
            v-validate="'required'"
            v-model="password"
            type="password"
          />
          <span data-placeholder="Password"></span>
        </div>
        <span class="text-error">{{
          errors.first("password") ? errors.first("password") + "." : ""
        }}</span>

        <button type="submit" class="btn-gradient">Login</button>

        <p class="link-signup">
          Don’t have an account? <nuxt-link to="/signup">Sign up</nuxt-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: "blank",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  mounted() {
        this.makeToast("info", "Hint!", "You can create new account or use this email: giapha2905@gmail.com password: Hahuygiap95", true);
  },
  methods: {
    async handleSubmit() {
      const isValid = await this.$validator.validate();
      if (isValid) {
        for (let i = 0; i < this.users.length; i++) {
          if (
            this.email === this.users[i].email &&
            this.password === this.users[i].password
          ) {
            this.$store.commit('login', this.users[i]);
            this.makeToast("success", "Success!", `Welcome ${this.users[i].name}!`);
            setTimeout(() => {
              this.$router.push("/");
            }, 2000);
            return ;
          }
        }
        this.makeToast("danger", "Error!", "Email or password was wrong!");
        this.makeToast("info", "Hint!", "You can create new account or use email: giapha2905@gmail.com password: Hahuygiap95", true);
      }
      else
        this.makeToast("info", "Hint!", "You can create new account or use this email: giapha2905@gmail.com password: Hahuygiap95", true);

    },
    makeToast(variant = "danger", title = "", content = "", noClose = false) {
      this.$bvToast.toast(content, {
        title: title,
        variant: variant,
        solid: true,
        noAutoHide: noClose
      });
    },
  },
};
</script>
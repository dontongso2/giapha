<template>
  <div class="signup login">
    <div class="login-container">
      <h1>Sign Up</h1>
      <img src="/images/logo.svg" alt="" />

      <form @submit.prevent="handleSubmit">
        <div class="row">
          <div class="col-md-6 px-2">
            <div :class="`inp-cus ${name.length > 0 ? 'focused' : ''}`">
              <input
                name="name"
                v-validate="'required'"
                v-model="name"
                type="text"
              />
              <span data-placeholder="Name"></span>
            </div>
            <span class="text-error">{{
              errors.first("name") ? errors.first("name") + "." : ""
            }}</span>
          </div>

          <div class="col-md-6 px-2">
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
          </div>

          <div class="col-md-6 px-2">
            <div :class="`inp-cus ${password.length > 0 ? 'focused' : ''}`">
              <input
                name="password"
                v-validate="'required|min:5'"
                v-model="password"
                type="password"
              />
              <span data-placeholder="Password"></span>
            </div>
            <span class="text-error">{{
              errors.first("password") ? errors.first("password") + "." : ""
            }}</span>
          </div>

          <div class="col-md-6 px-2">
            <div
              :class="`inp-cus ${passwordConfirm.length > 0 ? 'focused' : ''}`"
            >
              <input
                name="passwordConfirm"
                v-validate="'required|min:5'"
                v-model="passwordConfirm"
                type="password"
              />
              <span data-placeholder="Password confirm"></span>
            </div>
            <span class="text-error">{{
              errors.first("passwordConfirm")
                ? errors.first("passwordConfirm") + "."
                : passwordConfirm.length >= 5 && password !== passwordConfirm
                ? "Password comfirm does not match!"
                : ""
            }}</span>
          </div>

          <div class="col-md-6 px-2">
            <div :class="`inp-cus ${address.length > 0 ? 'focused' : ''}`">
              <input name="address" v-model="address" type="text" />
              <span data-placeholder="Address"></span>
            </div>
          </div>

          <div class="col-md-6 px-2">
            <div :class="`inp-cus ${phone.length > 0 ? 'focused' : ''}`">
              <input
                name="phone"
                v-validate="'regex:^[\+]?[0-9]*$'"
                v-model="phone"
              />
              <span data-placeholder="Phone"></span>
            </div>
            <span class="text-error">{{
              errors.first("phone") ? errors.first("phone") + "." : ""
            }}</span>
          </div>
        </div>

        <button type="submit" class="btn-gradient">Sign up</button>

        <p class="link-signup">
          Already have an account? <nuxt-link to="/login">Sign in</nuxt-link>
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
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
      address: "",
      phone: "",
    };
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  methods: {
    async handleSubmit() {
      const isValid = await this.$validator.validate();
      if (isValid) {
        for (let i = 0; i < this.users.length; i++) {
          if (this.email === this.users[i].email) {
            this.makeToast("danger", "Error!", "Email have already exsist!");
            return;
          }
        }
        this.makeToast("success", "Success!", `Welcome ${this.name}!`);
        let data = {name: this.name, email: this.email, password: this.password, address: this.address, phone: this.phone}
        this.$store.commit('addUser', data);
        setTimeout(() => {
          this.$router.push("/login");
        }, 2000);
      }
    },
    makeToast(variant = "danger", title = "", content = "") {
      this.$bvToast.toast(content, {
        title: title,
        variant: variant,
        solid: true,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.signup {
  .login-container {
    max-width: 50% !important;
    button[type="submit"] {
      max-width: 50%;
      margin-left: auto;
      margin-right: auto;
    }
  }
}
</style>
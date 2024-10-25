<template>
  <div class="limiter">
    <div class="container-login100" style="background-image: url('images/bg-01.jpg');">
      <div class="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
        <form class="login100-form validate-form flex-sb flex-w">
          <span class="login100-form-title p-b-53">
            Đăng Nhập Với
          </span>

          <div class="social-buttons">
            <a href="#" class="btn-face">
              <i class="fab fa-facebook-f"></i> <!-- Use Facebook icon -->
              Facebook
            </a>

            <a href="#" class="btn-google">
              <i class="fab fa-google"></i> <!-- Use Google icon -->
              Google
            </a>
          </div>

          <div class="p-t-31 p-b-9">
            <span class="txt1">Tên tài khoản</span>
          </div>
          <div class="wrap-input100 validate-input" data-validate="Username is required">
            <input class="input100" type="text" name="username" aria-label="Username">
            <span class="focus-input100"></span>
          </div>

          <div class="p-t-13 p-b-9">
            <span class="txt1">Mật khẩu</span>
          </div>
          <div class="wrap-input100 validate-input" data-validate="Password is required">
            <input class="input100" type="password" name="pass" ref="passwordField" aria-label="Password">
            <span class="focus-input100"></span>
            <button type="button" @click="togglePassword">{{ showText }}</button>
          </div>
          
          <div class="container-login100-form-btn m-t-17">
            <button class="login100-form-btn">Đăng nhập</button>
          </div>
          
          <div class="w-full text-center p-t-55">
            <span class="txt2">Bạn chưa có tài khoản?</span>
            <a href="/register" class="txt2 bo1">Đăng ký ngay</a>
            <br><a href="#" class="txt2 bo1 m-l-5">Quên mật khẩu?</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css'; // Import Font Awesome

export default {
  name: "LoginForm",
  data() {
    return {
      showPassword: false,
      // showText: "SHOW",
    };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
      this.showText = this.showPassword ? "HIDE" : "SHOW";
      const passField = this.$refs.passwordField;
      passField.type = this.showPassword ? "text" : "password";
    },
  },
};
</script>

<style scoped>
@import "../assets/css/Login.css";

.social-buttons {
  display: flex;
  /* Use flexbox */
  justify-content: space-between;
  /* Space items evenly */
  width: 100%;
  /* Full width */
  margin-bottom: 20px;
  /* Add some space below the buttons */
}

.btn-face,
.btn-google {
  width: 48%;
  /* Each button takes 48% of the width */
  padding: 10px;
  /* Padding inside the button */
  text-align: center;
  /* Center the text */
  border: none;
  /* No border */
  cursor: pointer;
  /* Pointer cursor on hover */
  display: flex;
  /* Use flexbox for icons and text */
  align-items: center;
  /* Center items vertically */
  justify-content: center;
  /* Center items horizontally */
  background-color: #f0f0f0;
  /* Optional: background color for buttons */
  text-decoration: none;
  /* Remove underline from links */
  font-size: 16px;
  /* Set font size */
}

.btn-face {
  color: black;
  /* Facebook text color */
}

.btn-google {
  color: black;
  /* Google text color */
}

.btn-face:hover,
.btn-google:hover {
  opacity: 0.8;
  /* Optional: change opacity on hover */
}

.btn-face i,
.btn-google i {
  font-size: 16px;
  /* Ensure icon size matches font size */
  margin-right: 5px;
  /* Margin between icon and text */
}
</style>

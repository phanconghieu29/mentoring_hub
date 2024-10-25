<template>
  <div class="centered-container">
    <section class="container">
      <header>Biểu Mẫu Đăng Ký</header>
      <form @submit.prevent="handleSubmit" class="form">
        <div class="input-box">
          <label>Họ và tên</label>
          <input type="text" v-model="fullName" placeholder="Nhập họ và tên" required />
        </div>
        <div class="input-box">
          <label>Email</label>
          <input type="text" v-model="email" placeholder="Nhập địa chỉ email" required @input="validateEmail" />
          <span v-if="errorMessage" class="error-message">{{
            errorMessage
          }}</span>
        </div>
        <div class="input-box">
          <label>Mật khẩu</label>
          <input type="password" v-model="password" placeholder="Nhập mật khẩu tại đây" required />
        </div>
        <div class="input-box">
          <label>Xác minh mật khẩu</label>
          <input type="password" v-model="confirmPassword" placeholder="Xác minh mật khẩu" required />
        </div>
        <div class="column">
          <div class="input-box">
            <label>Số điện thoại</label>
            <input type="text" v-model="phoneNumber" placeholder="Nhập số điện thoại" required
              @input="validatePhoneNumber" />
            <span v-if="errorMessage" class="error-message">{{
              errorMessage
            }}</span>
          </div>
          <div class="input-box">
            <label>Ngày sinh</label>
            <input type="date" v-model="birthDate" required />
          </div>
        </div>
        <div class="gender-box">
          <h3>Giới tính</h3>
          <div class="gender-option">
            <div class="gender">
              <input type="radio" id="check-male" name="gender" value="male" v-model="gender" />
              <label for="check-male">Nam</label>
            </div>
            <div class="gender">
              <input type="radio" id="check-female" name="gender" value="female" v-model="gender" />
              <label for="check-female">Nữ</label>
            </div>
            <div class="gender">
              <input type="radio" id="check-other" name="gender" value="other" v-model="gender" />
              <label for="check-other">Khác</label>
            </div>
          </div>
        </div>

        <div class="input-box address">
          <label>Địa chỉ</label>
          <!-- Select Tỉnh/Thành Phố -->
          <div class="select-box">
            <label for="city">Chọn Tỉnh/Thành Phố</label>
            <select v-model="selectedCity" id="city" @change="onCityChange">
              <option hidden>Chọn Tỉnh/Thành Phố</option>
              <option v-for="(city, index) in locations" :key="index" :value="city.FullName">
                {{ city.FullName }}
              </option>
            </select>
          </div>
          <!-- Select Quận/Huyện -->
          <div class="select-box" v-if="selectedCity">
            <label for="district">Chọn Quận/Huyện</label>
            <select v-model="selectedDistrict" id="district" @change="onDistrictChange">
              <option hidden>Chọn Quận/Huyện</option>
              <option v-for="(district, index) in districts" :key="index" :value="district.FullName">
                {{ district.FullName }}
              </option>
            </select>
          </div>
          <!-- Select Phường/Xã -->
          <div class="select-box" v-if="selectedDistrict">
            <label for="ward">Chọn Phường/Xã</label>
            <select v-model="selectedWard" id="ward">
              <option hidden>Chọn Phường/Xã</option>
              <option v-for="(ward, index) in wards" :key="index" :value="ward.FullName">
                {{ ward.FullName }}
              </option>
            </select>
          </div>
        </div>
        <button type="submit">Đăng ký</button>
      </form>

      <div v-if="successMessage" class="success-message">
        {{ successMessage }}
      </div>
    </section>
  </div>
</template>

<script>
import locations from "../data/locationData.json";
export default {
  name: "RegisterForm",
  data() {
    return {
      locations: locations,
      selectedCity: null,
      selectedDistrict: null,
      selectedWard: null,
      districts: [],
      wards: [],
      phoneNumber: "",
      errorMessage: "",
      gender: null,
      email: "",
      fakeEmailDomains: [
        "mailinator.com",
        "temp-mail.org",
        "10minutemail.com",
        // Thêm vào các miền giả mạo khác nếu cần
      ],
      // errorMessage: "",
    };
  },
  methods: {
    handleSubmit() {
      // Kiểm tra xem tất cả các trường đã được điền chưa
      if (
        !this.fullName ||
        !this.email ||
        !this.password ||
        !this.confirmPassword ||
        !this.phoneNumber ||
        !this.birthDate ||
        !this.selectedCity ||
        !this.selectedDistrict ||
        !this.selectedWard
      ) {
        alert("Vui lòng điền đầy đủ thông tin trước khi đăng ký.");
        return;
      }

      // Kiểm tra xem mật khẩu có khớp không
      if (this.password !== this.confirmPassword) {
        alert("Mật khẩu và xác minh mật khẩu không khớp!");
        return;
      }

      // Hiển thị thông báo thành công
      this.successMessage = `Chúc mừng ${this.fullName}, bạn đã đăng ký thành công!`;

      // Reset thông tin sau khi đăng ký thành công (nếu cần)
      this.resetForm();
    },
    resetForm() {
      this.fullName = "";
      this.email = "";
      this.password = "";
      this.confirmPassword = "";
      this.phoneNumber = "";
      this.birthDate = "";
      this.gender = "";
      this.selectedCity = "";
      this.selectedDistrict = "";
      this.selectedWard = "";
      this.errorMessage = "";
      this.successMessage = "";
    },
    // Khi người dùng chọn tỉnh/thành phố
    onCityChange() {
      const city = this.locations.find(
        (location) => location.FullName === this.selectedCity
      );
      this.districts = city ? city.District : [];
      this.selectedDistrict = null;
      this.selectedWard = null;
      this.wards = [];
    },
    // Khi người dùng chọn quận/huyện
    onDistrictChange() {
      const district = this.districts.find(
        (d) => d.FullName === this.selectedDistrict
      );
      this.wards = district ? district.Ward : [];
      this.selectedWard = null;
    },
    validatePhoneNumber() {
      const phonePattern = /^(09|08|07|03|05|06)\d{8}$/; // Định nghĩa quy tắc cho số điện thoại Việt Nam
      if (this.phoneNumber.length === 0) {
        this.errorMessage = ""; // Nếu không có số điện thoại, không có lỗi
      } else if (!phonePattern.test(this.phoneNumber)) {
        this.errorMessage = "Số điện thoại không hợp lệ!"; // Nếu không hợp lệ
      } else {
        this.errorMessage = ""; // Nếu hợp lệ
      }
    },
    validateEmail() {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (this.email.length === 0) {
        this.errorMessage = "";
      } else if (!emailPattern.test(this.email)) {
        this.errorMessage = "Địa chỉ email không hợp lệ!";
      } else if (this.isFakeEmail(this.email)) {
        this.errorMessage = "Địa chỉ email này có vẻ là email giả!";
      } else {
        this.errorMessage = "";
      }
    },
    isFakeEmail(email) {
      const domain = email.split("@")[1]; // Lấy miền từ địa chỉ email
      return this.fakeEmailDomains.includes(domain);
    },
  },
};
</script>

<style scoped>
/* @import "../assets/css/Register.css"; */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgb(130, 106, 251);
}

.centered-container {
  width: 99vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  position: relative;
  max-width: 700px;
  width: 100%;
  background: #fff;
  padding: 25px;
  margin: 25px;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

.container header {
  font-size: 1.5rem;
  color: #333;
  font-weight: 500;
  text-align: center;
}

.container .form {
  margin-top: 30px;
}

.form .input-box {
  width: 100%;
  margin-top: 20px;
}

.input-box label {
  color: #333;
}

.form :where(.input-box input, .select-box) {
  position: relative;
  height: 50px;
  width: 100%;
  outline: none;
  font-size: 1rem;
  color: #707070;
  margin-top: 8px;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 0 15px;
}

.input-box input:focus {
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
}

.form .column {
  display: flex;
  column-gap: 15px;
}

.form .gender-box {
  margin-top: 20px;
}

.gender-box h3 {
  color: #333;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 8px;
}

.form :where(.gender-option, .gender) {
  display: flex;
  align-items: center;
  column-gap: 50px;
  flex-wrap: wrap;
}

.form .gender {
  column-gap: 5px;
}

.gender input {
  accent-color: rgb(130, 106, 251);
}

.form :where(.gender input, .gender label) {
  cursor: pointer;
}

.gender label {
  color: #707070;
}

.address :where(input, .select-box) {
  margin-top: 15px;
}

.select-box select {
  height: 24px;
  width: 100%;
  outline: none;
  border: none;
  color: #707070;
  font-size: 1rem;
}

.form button {
  height: 55px;
  width: 100%;
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  margin-top: 30px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  background: rgb(130, 106, 251);
}

.form button:hover {
  background: rgb(88, 56, 250);
}

/*Responsive*/
@media screen and (max-width: 500px) {
  .form .column {
    flex-wrap: wrap;
  }

  .form :where(.gender-option, .gender) {
    row-gap: 15px;
  }
}
</style>

<template>
    <div id="app">
      <form @submit.prevent="submitForm" ref="form">
        <label>Email :</label>
        <input type="email" v-model="email" />
        <div class="error" v-if="errors.email">{{ errors.email }}</div>
    
        <label>Password :</label>
        <input type="password" v-model="password" />
        <div class="error" v-if="errors.password">{{ errors.password }}</div>
    
        <label>Role :</label>
        <select v-model="role">
          <option disabled value="">Please select a role</option>
          <option value="developer">Web Developer</option>
          <option value="designer">Web Designer</option>
        </select>
        <div class="error" v-if="errors.role">{{ errors.role }}</div>
    
        <label>Skills (press Enter or comma to add):</label>
        <input type="text" v-model="tempSkills" @keydown="addSkills" />
        <div v-show="skills.length > 0" class="pill-container">
          <div v-for="(skill, index) in skills" :key="index" class="pill">
            {{ skill }} 
            <span @click="removeSkill(index)" class="pill-close">&times;</span>
          </div>
        </div>
    
        <div class="terms">
          <input type="checkbox" v-model="terms" @change="checkForm" />
          <label>Accept terms and conditions</label>
          <div class="error" v-if="errors.terms">{{ errors.terms }}</div>
        </div>
    
        <button :disabled="!formValid" type="submit">Submit</button>
      </form>
      <p>Email: {{ email }}</p>
      <p>Password: {{ password }}</p>
      <p>Role: {{ role }}</p>
      <p>Terms Accepted: {{ terms }}</p>
    </div>
  </template>
    
  <script>
  export default {
    data() {
      return {
        email: "",
        password: "",
        role: "",
        terms: false,
        tempSkills: "",
        skills: [],
        formValid: false,
        errors: {
          email: null,
          password: null,
          role: null,
          terms: null
        }
      };
    },
    methods: {
      submitForm() {
        if (this.validateForm()) {
          alert(
            `Email: ${this.email}\nPassword: ${this.password}\nRole: ${this.role}\nSkills: ${this.skills.join(", ")}`
          );
          this.resetForm();
        }
      },
      addSkills(e) {
        if ((e.key === "Enter" || e.key === ",") && this.tempSkills) {
          e.preventDefault();
          const skill = this.tempSkills.trim();
          if (skill && !this.skills.includes(skill)) {
            this.skills.push(skill);
            this.tempSkills = "";
          }
        }
      },
      removeSkill(index) {
        this.skills.splice(index, 1);
      },
      checkForm() {
        this.formValid = this.$refs.form.checkValidity() && this.terms;
      },
      validateForm() {
        this.errors = {
          email: null,
          password: null,
          role: null,
          terms: null
        };
        let valid = true;
        if (!this.email) {
          this.errors.email = "Email is required";
          valid = false;
        }
        if (!this.password) {
          this.errors.password = "Password is required";
          valid = false;
        } else if (this.password.length < 6 || !/[a-zA-Z]/.test(this.password)) {
          this.errors.password = "Password must be at least 6 characters long and contain letters";
          valid = false;
        }
        if (!this.role) {
          this.errors.role = "Role is required";
          valid = false;
        }
        if (!this.terms) {
          this.errors.terms = "You must accept the terms and conditions";
          valid = false;
        }
        this.formValid = valid;
        return valid;
      },
      resetForm() {
        this.email = "";
        this.password = "";
        this.role = "";
        this.terms = false;
        this.tempSkills = "";
        this.skills = [];
        this.errors = {
          email: null,
          password: null,
          role: null,
          terms: null
        };
        this.formValid = false;
      }
    }
  };
  </script>
    
  <style scoped>
  form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input,
  select,
  button {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
    margin-bottom: 15px;
  }
  button {
    background-color: #5cb85c;
    color: white;
    font-size: 1em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
  }
  input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
  }
  .pill-container {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
  .pill {
    display: inline-flex;
    align-items: center;
    padding: 8px 12px;
    background: #6dbb73;
    border-radius: 20px;
    font-size: 14px;
    font-weight: bold;
    color: white;
    cursor: default;
  }
  .pill-close {
    display: inline-block;
    margin-left: 10px;
    font-size: 16px;
    cursor: pointer;
    color: #fff;
  }
  .pill-close:hover {
    color: #ff5c5c;
  }
  button:disabled {
    background-color: #ccc; /* Disable olduğunda arka plan rengini değiştir */
    color: #999; /* Disable olduğunda metin rengini değiştir */
    cursor: not-allowed; /* Disable olduğunda imleci değiştir */
  }
  .error {
    color: red;
    font-size: 0.8em;
  }
  </style>
  
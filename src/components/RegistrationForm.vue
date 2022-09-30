er<template>
  <div class="registration_form">
    <div class="flex flex-col justify-center items-center" v-show="!isSubmitted">
      <h1>Registration Form</h1>
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 justify-center">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="first_name">
            First Name
          </label>
          <input v-model="form.first_name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" :class="{'border-red-700': first_name_error}" id="first_name" type="text" placeholder="Enter First Name">
          <span v-show="first_name_error" class="text-red-700 error_first_name">First Name Required</span>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="middle_name">
            Middle Name
          </label>
          <input v-model="form.middle_name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="middle_name" type="text" placeholder="Enter Middle Name">          
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="last_name">
            Last Name
          </label>
          <input v-model="form.last_name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" :class="{'border-red-700': last_name_error}" id="last_name" type="text" placeholder="Enter Last Name">
          <span v-show="last_name_error" class="text-red-700 error_last_name">Last Name Required</span>
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="date_of_birth">
            Date of birth
          </label>
          <div class="datepicker relative form-floating mb-3 xl:w-96">
            <input v-model="form.date_of_birth" id="date_of_birth" type="date" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" :class="{'border-red-700': date_of_birth_error}" placeholder="Select a date" />
          </div>
          <span v-show="date_of_birth_error" class="text-red-700 error_date_of_birth">Date of birth Required</span>
        </div>
        <div class="flex flex-col justify-center items-center">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline submit_form" type="button" @click="submit">
            Submit
          </button>          
        </div>
      </form>
    </div>
    <div class="flex flex-col justify-center items-center" v-show="isSubmitted">
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 justify-center">
        <div class="card-body">
          <div>
            <p class="font-bold message">You have submitted successfully. Here is your form details.</p>
          </div>
          <div class="mt-2">
            <p>First Name: <b>{{ form.first_name }}</b></p>
            <p>Middle Name: <b>{{ form.middle_name }}</b></p>
            <p>Last Name: <b>{{ form.last_name }}</b></p>
            <p>Date of birth: <b>{{ form.date_of_birth }}</b></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'RegistrationForm',
  props: {
    msg: String
  },
  data() {
    return {
      form: {
        first_name: '',
        middle_name: '',
        last_name: '',
        date_of_birth: ''
      },
      first_name_error: false,
      last_name_error: false,
      date_of_birth_error: false,
      isSubmitted: false
    }
  },

  methods: {
    submit() {
      let form_valid = true;
      if(this.form.first_name == '') {
        this.first_name_error = true;
        form_valid = false
      } else {
        this.first_name_error = false;
      }
      if(this.form.last_name == '') {
        this.last_name_error = true;
        form_valid = false
      } else {
        this.last_name_error = false;
      }
      if(this.form.date_of_birth == '') {
        this.date_of_birth_error = true;
        form_valid = false
      } else {
        this.date_of_birth_error = false;
      }

      console.log("form_valid is : ", form_valid)
      console.log("this.first_name is : ", this.form.first_name)
      console.log("this.last_name is : ", this.form.last_name)
      if(form_valid) {
        this.isSubmitted = true;
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

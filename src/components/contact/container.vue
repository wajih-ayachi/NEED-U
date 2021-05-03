<template>
<<<<<<< HEAD
  <div>
    <p>Hello je suis le contact component</p>
  </div>
</template>

<script>
export default  {

}
</script>
=======

  
  <v-form 
    ref="form"
    v-model="valid"
    lazy-validation
   
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Nom"
      required
    ></v-text-field>
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Prénom"
      required
    ></v-text-field>


    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
     <v-text-field
      v-model="telephone"
      :rules="emailRules"
      label="numéro"
      required
    ></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Item"
      required
    ></v-select>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>
  </v-form>
</template>


<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>
<style scoped>
.v-form{
  height: 700px;
  margin-top: 100px;
  margin-left: 10px;
   margin-right: 10px;}
</style>
>>>>>>> cc7a62467f39aa602b0a97c12b642c481b0b6ac9

<template>
    <div class="hello">
        <vue-form :state="formstate" @submit.prevent="onSubmit">

            <validate tag="label">
                <span class="mt-4">Name *</span>
                <input v-model="model.name" required name="name" />

                <field-messages name="name">
                    <div>Success!</div>
                    <div slot="required">Name is a required field</div>
                </field-messages>
            </validate>

            <validate tag="label">
                <span class="mt-4">Email</span>
                <input v-model="model.email" name="email" type="email" required />

                <field-messages name="email">
                    <div slot="required">Email is a required field</div>
                    <div slot="email">Email is not valid</div>
                </field-messages>
            </validate>

            <validate tag="label">
                <span class="mt-4">Password</span>
                <input v-model="model.password" name="email" type="password" required />

                <field-messages name="email">
                    <div slot="required">Email is a required field</div>
                    <div slot="email">Email is not valid</div>
                </field-messages>
            </validate>

            <button type="submit">Submit</button>
        </vue-form>
        {{model}}
    </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data() {
    return {
        formstate:{},
        model:{
            name:'',
            email:'',
            password:'',
            admin:false
        }
    }
  },
  methods: {
    onSubmit(){
        this.$store.dispatch('create',this.model)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mt-4{
    margin-top: 12px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

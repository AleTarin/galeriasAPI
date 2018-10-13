<template>
  <section class="contact">
    <h2>Contactame</h2>
    <form @submit="sendEmail()">
      <div class="form-group row">
        <input :class="['form-control', 'col-5', {'is-invalid': dirty && !contactName }]" type="text" v-model="contactName" placeholder="Nombre" required>
        <input :class="['form-control', 'col-5', {'is-invalid': dirty && !contactEmail || validEmail()  }]" type="email" v-model="contactEmail" placeholder="Email" required>
      </div>
      <div class="form-group row">
        <input class="form-control col-5" type="phone" v-model="contactTel" placeholder="Whatsapp(opcional)">
        <input :class="['form-control', 'col-5', {'is-invalid': dirty && !contactDate }]" type="date" v-model="contactDate" required>
      </div>
      <div class="form-group row">
        <select :class="['form-control', 'col-5', {'is-invalid': dirty && !contactEvent }]" v-model="contactEvent" required>
          <option selected disabled> Tipo de Evento </option>
          <option value="Evento Corporativo"> Evento Corporativo </option>
          <option value="Baby Shower"> Baby Shower </option>
          <option value="Despedida"> Despedida </option>
          <option value="Bautizo"> Bautizo </option>
          <option value="Photoshoot"> Photoshoot </option>
          <option value="otro">Otro</option>
        </select>
        <select :class="['form-control', 'col-5', {'is-invalid': dirty && !contactSocial }]" v-model="contactSocial" required>
          <option selected disabled>¿Cómo te enteraste de mí?</option>
          <option value="Facebook">Facebook</option>
          <option value="Instagram">Instagram</option>
          <option value="Amigos">Amigos</option>
          <option value="otros">Otros</option>
        </select>
      </div>
      <div class="row mt-3">
        <input type="submit col-3" class="btn btn-primary" value="Enviar" @click="sendEmail()">
      </div>
    </form>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ContactMe',
  props: {
  },
  data () {
    return {
      contactName: '',
      contactEmail: '',
      contactTel: '',
      contactDate: '',
      contactEvent: '',
      contactSocial: '',
      dirty: false,
      errors: []
    }
  },
  methods: {
    validEmail: function () {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(this.contactEmail)
    },
    sendEmail () {
      this.dirty = true
      if (
        this.contactName &&
        this.contactEmail &&
        this.contactDate &&
        this.contactEvent &&
        this.contactSocial
      ) {
        axios
          .post('http://localhost:8081/api/email',
            {
              contactName: this.contactName,
              contactEmail: this.contactEmail,
              contactTel: this.contactTel,
              contactDate: this.contactDate,
              contactEvent: this.contactEvent,
              contactSocial: this.contactSocial
            })
          .then(response => {})
          .catch(e => {
            this.errors.push(e)
          })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .contact {
    padding: 50px 0;
    h2 {
      text-align: center;
    }
    .row {
      margin: 0;
      justify-content: center;
    }
    .form-group{
      display: flex;
      justify-content: center;
    }
    .form-control{
      margin: 10px;
    }
    .mt-3{
      margin: 20px;
      justify-content: center;
    }
  }
</style>

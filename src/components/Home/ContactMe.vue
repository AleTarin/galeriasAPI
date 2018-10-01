<template>
  <section class="contact">
    <h2>Contactame</h2>
    <form>
      <div class="form-group row">
        <input class="form-control col-5" type="text" v-model="contactName" id="contact-name" placeholder="Nombre" required>
        <input class="form-control col-5" type="email" v-model="contactEmail" id="contact-email" placeholder="Email" required>
      </div>
      <div class="form-group row">
        <input class="form-control col-5" type="phone" v-model="contactTel" id="contact-tel" placeholder="Whatsapp(opcional)">
        <input class="form-control col-5" type="date" v-model="contactDate" id="contact-date" required>
      </div>
      <div class="form-group row">
        <select id="inputState" class="form-control col-5" required>
          <option selected disabled> Tipo de Evento </option>
          <option value="Evento Corporativo"> Evento Corporativo </option>
          <option value="Baby Shower"> Baby Shower </option>
          <option value="Despedida"> Despedida </option>
          <option value="Bautizo"> Bautizo </option>
          <option value="Photoshoot"> Photoshoot </option>
          <option value="otro">Otro</option>
        </select>
        <select id="inputState" class="form-control col-5" required>
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
const $ = require('jquery')

export default {
  name: 'ContactMe',
  props: {
  },
  data () {
    return {
      contactName: '',
      contactEmail: '',
      contactTel: '',
      contactDate: ''
    }
  },
  methods: {
    sendEmail () {
      $.ajax({
        type: 'POST',
        url: 'https://mandrillapp.com/api/1.0/messages/send.json',
        data: {
          'key': 'G4DC3Y4CBM4bj6_GUavowQ',
          'message': {
            'from_email': this.contactEmail,
            'to': [
              {
                'email': 'ale.tarin10@gmail.com',
                'name': 'RECIPIENT NAME (OPTIONAL)',
                'type': 'to'
              }
            ],
            'autotext': 'true',
            'subject': 'Email from' + this.contactName,
            'html': 'Hi im am trying to contact you, im am ' + this.contactName + 'my number is ' + this.contactTel
          }
        }
      }).done(function(response) {
        console.log(response)
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .contact {
    padding: 32px 0;
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

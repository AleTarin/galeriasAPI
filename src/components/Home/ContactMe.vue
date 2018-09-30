<template>
  <section class="contact">
    <h2>Contactame</h2>
    <form action="">
      <div class="form-group row">
        <input class="form-control col-5" type="text" name="contact-name" id="contact-name" placeholder="Nombre" required>
        <input class="form-control col-5" type="email" name="contact-email" id="contact-email" placeholder="Email" required>
      </div>
      <div class="form-group row">
        <input class="form-control col-5" type="phone" name="contact-tel" id="contact-tel" placeholder="Whatsapp(opcional)">
        <input class="form-control col-5" type="date" name="contact-date" id="contact-date" required>
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
      <div class="row">
        <input type="submit col-3" class="btn btn-primary" value="Enviar">
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'ContactMe',
  props: {
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
    }
    .form-group{
      display: flex;
      justify-content: center;
    }
    .form-control{
      margin: 10px;
    }
  }
</style>

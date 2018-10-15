<template>
  <section role="dialog" class="modal-container" >
    <i class="close-button" aria-label="close button" @click="$emit('close')">x</i>
    <div class="inner-modal">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Modal',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .modal-container {
    position: fixed;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    top: 0;
    left: 0;
    background-color: rgba($color: #000000, $alpha: 0.5);
    width: 100vw;
    height: 100vh;

    .inner-modal {
      padding: 10px;
      border-radius: 10px;
      box-shadow: #000000 2px;
      background-color: white;
      z-index: 25;
    }

    .close-button {
      position: fixed;
      padding: 10px;
      top: 10px;
      z-index: 2000;
      right: 10px;
      font-size: 32px;
      font-weight: bolder;
      &:hover {
        color: white;
      }
    }
  }
</style>

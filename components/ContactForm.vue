<template>
  <form
    action="https://formspree.io/contactform@jasons.io"
    method="POST"
  >
    <div class="form-line">
      <input type="text" name="name" placeholder="Name" required>
      <input type="email" name="_replyto" placeholder="Email" required>
      <input type="email" name="_replyto" placeholder="Phone">
    </div>
    <div class="form-line">
      <textarea name="message" id="message" cols="30" rows="5" placeholder="Message" required></textarea>
    </div>
    <div class="form-line form-line--send">
      <button type="submit"><span>Send</span></button>
    </div>
  </form>
</template>

<style scoped lang="scss">
@import '~assets/css/colors';

form {
  font-size: 1rem;
}

input, textarea, button {
  flex: 1;
  width: 33%;
  padding: 12px 24px;
  margin: 10px 10px 10px 0;
  font-family: inherit;
  font-weight: 600;
  font-size: inherit;
  border: none;
  border-radius: 5px;
  background-color: $white;
}

.form-line {
  display: flex;
  justify-content: center;
  width: 100%;

  &--send {
    justify-content: flex-end;

    button {
      flex: 0;
      cursor: pointer;
      color: $accent;
      // font-size: 1.0rem;
      letter-spacing: .2rem;
      border: solid 2px $accent;
      background-color: transparent;

      &:hover {
        // color: $black;
        color: $white;
        background-color: $accent;
      }
    }
  }
}
</style>

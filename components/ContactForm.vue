<template>
  <form
    class="contact-form"
    action="https://formspree.io/contactform@jasons.io"
    method="POST"
  >
    <div class="contact-form__row">
      <input type="text" name="name" placeholder="Name" required>
      <input type="email" name="_replyto" placeholder="Email" required>
      <input type="text" name="phone" placeholder="Phone">
    </div>
    <div class="contact-form__row">
      <textarea name="message" cols="30" rows="5" placeholder="Message" required></textarea>
    </div>
    <div class="contact-form__send-row">
      <button type="submit"><span>Send</span></button>
    </div>
  </form>
</template>

<style lang="scss">
@import '~assets/css/breakpoints';
@import '~assets/css/colors';

.contact-form {
  font-size: 1rem;

  input, textarea, button {
    width: 100%;
    padding: 12px 24px;
    margin: 10px 10px 10px 0;
    font-family: inherit;
    font-weight: 600;
    font-size: inherit;
    border: none;
    border-radius: 5px;
    background-color: $white;

    // Layout text inputs side by side on high resolution.
    @include desktop {
      flex: 1;
      width: 33%;
    }
  }

  // Firefox compatibility, allow forms to shrink more than the browser default
  // minimum input box width.
  input { min-width: 0; }

  button {
    flex: 0;
    cursor: pointer;
    color: $accent;
    letter-spacing: .2rem;
    border: solid 2px $accent;
    background-color: transparent;

    // Internet Explorer compatibility, otherwise button width becomes 0px.
    min-width: 100px;

    &:hover {
      color: $white;
      background-color: $accent;
    }
  }

  &__row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__send-row {
    display: flex;
    justify-content: flex-end;
  }
}
</style>

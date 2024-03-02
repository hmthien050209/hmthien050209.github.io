<script setup lang="ts">
import SocialMediaButton from "./components/SocialMediaButton.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="max-w-3xl justify-center pl-4 pr-4 pt-8 md:ml-auto md:mr-auto">
    <div class="h-fit">
      <img
        src="./assets/avatar.webp"
        alt="My avatar"
        class="float-none mx-auto h-24 w-24 place-self-center rounded-full md:h-32 md:w-32 lg:float-left"
      />
      <div
        class="place-content-center pb-4 pt-4 text-center md:pb-8 md:pt-8 lg:pl-36 lg:pr-36 lg:text-start"
      >
        <h1 class="greeting">Hi there!</h1>
        <h1 class="greeting">Welcome to my website!</h1>
      </div>
    </div>
    <span class="body-text">
      I'm Hoàng Minh Thiên (you can call me David), a junior high school student
      in Viet Nam, who loves to write code in spare time.
      <br />
      My skills:
      <ul>
        <li>C/C++</li>
        <li>Flutter</li>
        <li>Python</li>
        <li>Bash</li>
        <li>C#</li>
        <li>Basic web development</li>
      </ul>
      <br />
    </span>
    <br />
    <div class="body-text text-center">Contact me via:</div>
    <div class="flex items-center justify-center">
      <SocialMediaButton
        site="Github"
        url="https://github.com/davidhoang05022009"
        icon="fa-brands fa-github"
      />
      <SocialMediaButton
        site="Telegram"
        url="https://t.me/davidhoang05022009"
        icon="fa-brands fa-telegram"
      />
      <SocialMediaButton
        site="Email"
        url="mailto:hoangminhthien05022009@gmail.com"
        icon="fa-solid fa-envelope"
      />
    </div>
  </div>
  <Footer />
</template>

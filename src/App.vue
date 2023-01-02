<script setup lang="ts">
import SocialMediaButton from './components/SocialMediaButton.vue';
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="h-fit w-screen bg-draculaBackground text-draculaForeground overflow-hidden">
    <div class="pt-8 max-w-3xl justify-center md:ml-auto md:mr-auto pl-4 pr-4">
      <div class="h-fit">
        <img src="./assets/avatar.png" alt="My avatar"
          class="rounded-full lg:float-left float-none place-self-center md:h-32 md:w-32 h-24 w-24 mx-auto" />
        <div class="place-content-center lg:pl-36 lg:pr-36 lg:text-start md:pt-8 md:pb-8 text-center pt-4 pb-4">
          <h1 class="greeting">Hi there!</h1>
          <h1 class="greeting">
            Welcome to my website!
          </h1>
        </div>
      </div>
      <span class="body-text">
        I'm Hoàng Minh Thiên (you can call me David), a junior high school student in
        Viet Nam, who loves to write code in spare time.
        <br />
        My skills:
        <ul>
          <li>C/C++</li>
          <li>Flutter</li>
          <li>Python</li>
          <li>Bash</li>
          <li>Basic web development</li>
        </ul>
        <br />
        I'm a FOSS lover. I like to participate in FOSS projects that I'm
        interested in. Some of my noticible projects are:
        <ul>
          <li>
            <a href="https://github.com/davidhoang05022009/fedora-post-install-script">
              fedora-post-install-script: A post install script for Fedora
              users (planning to migrate to Go for better TUI experience)
            </a>
          </li>
          <li>
            <a href="https://github.com/realmazharhussain/gdm-settings">
              gdm-settings (Login Manager Settings): A settings app for GNOME's Login/Display Manager, GDM (Vietnamese
              Translation)
            </a>
          </li>
        </ul>
      </span>
      <br />
      <div class="text-center body-text">Contact me via:</div>
      <div class="flex items-center justify-center">
        <SocialMediaButton url="https://github.com/davidhoang05022009" icon="fa-brands fa-github" />
        <SocialMediaButton url="https://t.me/davidhoang05022009" icon="fa-brands fa-telegram" />
        <SocialMediaButton url="mailto:hoangminhthien05022009@gmail.com" icon="fa-solid fa-envelope" />
      </div>
    </div>
    <Footer />
  </div>
</template>

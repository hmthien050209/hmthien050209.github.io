<script setup lang="ts">
import SocialMediaButton from "./components/SocialMediaButton.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div
    class="max-w-3xl justify-center pl-4 pr-4 pt-8 transition-all !duration-300 ease-in-out md:ml-auto md:mr-auto"
  >
    <div class="flex h-fit flex-col justify-center lg:flex-row">
      <img
        src="./assets/avatar.webp"
        alt="My avatar"
        class="md:mx-none float-none mx-auto h-24 w-24 rounded-full md:h-32 md:w-32 lg:float-left"
      />
      <div
        class="mb-4 mt-4 w-full text-center md:mb-8 md:mt-8 lg:ml-8 lg:text-start"
      >
        <h1 class="greeting">Hi there!</h1>
        <h1 class="greeting">Welcome to my website!</h1>
      </div>
    </div>
    <span class="body-text">
      I'm Hoàng Minh Thiên (<abbr title="also known as">a.k.a</abbr> David), a
      high school student in Viet Nam, who loves to write code in spare time.
      <br />
      My skills are:
      <ul>
        <li>C/C++</li>
        <li>Flutter</li>
        <li>Python</li>
        <li>Bash</li>
        <li>C# WPF</li>
        <li>Go</li>
        <li>Web development</li>
      </ul>
      <br />
      Some of my notable projects are:
      <ul>
        <li>
          <a href="https://github.com/hmthien050209/fedora-post-install-script"
            >fedora-post-install-script</a
          >: My post-install scripts which I use for my Fedora Linux
          installations on my machines (not updated for a while ;-;)
        </li>
        <li>
          Quiz game for my presentations at school, developed using VueJS +
          TailwindCSS:
          <ul>
            <li>
              <a href="https://github.com/hmthien050209/access-c6-game"
                >access-c6-game</a
              >
            </li>
            <li>
              <a href="https://github.com/hmthien050209/access-self-check-game"
                >access-self-check-game</a
              >
            </li>
            <li>
              <a href="https://github.com/hmthien050209/quiz-game">quiz-game</a>
            </li>
            <li>
              <a href="https://github.com/hmthien050209/history-quiz-game"
                >history-quiz-game</a
              >
            </li>
          </ul>
        </li>
      </ul>
    </span>
    <br />
    <div class="body-text text-center">Contact me via:</div>
    <div class="flex items-center justify-center">
      <SocialMediaButton
        url="https://github.com/hmthien050209"
        icon="fa-brands fa-github"
      />
      <SocialMediaButton
        url="https://discord.com/users/781504809454927884"
        icon="fa-brands fa-discord"
      ></SocialMediaButton>
      <SocialMediaButton
        url="https://t.me/hmthien050209"
        icon="fa-brands fa-telegram"
      />
      <SocialMediaButton
        url="mailto:hoangminhthien05022009@gmail.com"
        icon="fa-solid fa-envelope"
      />
    </div>
  </div>
  <Footer />
</template>

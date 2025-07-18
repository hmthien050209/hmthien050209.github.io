---
title: Rebuilding this website
description: Why did I choose to re-build this website from scratch instead of migrating it from Vue.js? Why did I choose Astro and many more!
date: 2025-07-18
---

## Contents

## The challenges

My old website was built back when I was in seventh grade, using Vue.js and
TailwindCSS. It was just a static website: no content, no dynamic content, just
my information and my projects.

Time flies, now I want to build a blog. I want a website that I can write my
blog posts on, where I can share my thoughts, my knowledge to everyone. The
problem has elevated to a new level:

- It must be easy to maintain, to update the theme, the content, and to add new
  features.
- It must be fast so that my readers can read my blog posts without waiting for
  the page to load.
- It must be simple so that I can focus on writing blog posts, not on the
  website itself.
- It must be SEO-friendly so that my blog posts can be indexed by search
  engines.

## The tech-stack choice

I've been using Vue.js for a long time (since 2022), and I love it. But it's
only suitable for building SPA, or documentation website at
best ([Vitepress](https://vitepress.dev/)).

What about [Nuxt](https://nuxt.com)? It's good for my use case: SSG,
SEO-friendly, and has many good
features that other frameworks don't have: auto-imports, rich plugins
ecosystem, etc. But at the time of migrating, Nuxt 3 is still sluggish (and I
had to hard-restart the dev server a lot) in many projects I participated in.
Nuxt is now very stable (v4 is just released, and it's fantastic!), and it's
just me don't want to spend time rewrite my website again :)

I've used [Astro](https://astro.build) before. I've been using it since it was
in v3.0, and I absolutely love it. It's fast, it's simple, it's flexible. And
its killer feature is that it allows you to use any framework you want, for
example, I can write my theme button with Vue.js, but my interactive blogs with
React! And its island architecture allows me to load only the necessary scripts,
which reduces the page load time significantly.

I'm more of a backend developer, and I love freaking fast websites/applications.
I love to optimize my code to its finest (some even reach 98/100 Lighthouse with
a bunch of Anime.js animations running at page loads!), and Astro is up for this
task. It's easy to optimize without sacrificing the user experience and
maintenance time.

Astro allows me to write my blog posts in Markdown, which is easy to write and
fast to customize (with [MDX](https://mdxjs.com/)). Combining with its great
Content Collections API, I can easily create some blog pages in `blog/`,
spice it up with Content Collections API, and Astro will handle the rest: posts
fetching, rendering, and even pagination!

## Upgrading...

This project was postponed for a while (6 months) because I was busy with
projects, which pushed me to learn a lot about DevOps, backend development,
Linux sysadmin, and more. Surprisingly, when I came back to continue to work on
the migration, things still worked, and even upgrading is smooth as butter!
I just ran `pnpm update`, migrate the stylesheets to TailwindCSS v4, and voilà,
everything works like a charm! No breaking dependencies, no issues, no breaking
API changes, nothing! `pnpm dev` and the website runs in dev mode like nothing
happened!

It's like magic, unlike anything I've ever worked with before. Some of the
projects that I worked on required me to spend time to do the "tedious tasks"
that every single developer knows too much about. Which is why leaders told me
to avoid updating the dependencies, which is a bad practice (vulnerabilities,
can't use new features, etc.) Astro is the exact opposite of that!

## Revisiting Nuxt?

I love Astro, and I love how it works. Nuxt is also good now (even comparative
to Astro if optimized "correctly"). Nuxt allows me to instruct the framework to
load components lazily via `<LazyComponentName />` or mark them client-only with
`<ClientOnly />`, which is similar to Astro's island architecture. In my
opinion, Nuxt is very powerful, and I've used them in many medium-sized
projects, where it works flawlessly. But it's not as simple as Astro. It
requires more boilerplate code (Nuxt Content for Markdown writing, which
requires a bunch of configurations), and it requires more effort to optimize.

> Choose the right tool for the right job.

In my case, simplicity is a priority. So I chose Astro. If high interactivity
with SEO is a priority, I would choose Nuxt (and spend time configuring it,
because with Nuxt, it's a one-time job anyway). If I want to build an SPA, I
would choose Vue.js only.

## Conclusion

After some time of working on websites, optimizing them for my users, and
maintaining the servers which are used to host them, I realized that when I come
back, I can do things more quickly than before. My school, my teachers, my
friends have taught me a lot about web optimizing, which helps me a lot in
technological choices now. I can say that Astro is the right choice for this,
and I will continue to use it for my future projects, alongside Nuxt and
standalone Vue.js also. Don't hate frameworks, they are just tools to help us
complete the task, and choosing the right tool for the right job is the key.

---
title: New typefaces!
description: After developing & designing for a while, it's time to change.
date: 2026-07-17
---

## Lately, where am I?

I've been participating in the development of many small, mid, to large-sized projects. Check out my GitHub profile!

## So how do they relate to the typefaces???

The most recent project that I worked on requires a bunch of skills that I haven't touched before: gameplay designing, UI/UX tuning on the frontend side of things, and deepen into the Node/V8 runtime to see why things didn't work as I expected, etc.

I want to especially focus on the UI/UX side of things, as it's the most interesting, and also the most "difficult" thing to represent.

## Why the typefaces changes on this website?

Yes, I changed the typefaces in the same commit that this blog post will be published. The old typefaces were Lora for the headings, Figtree for the body, and JetBrains Mono for the code.

JetBrains Mono has been and will always be my loved font for displaying code content: its height and its italic design are the easiest to read quickly. Heck, it even helped me spot many bugs in the past!

Now, I'm still keeping Lora for the blockquote (fixed the wrong italic variant, because I imported the wrong CSS file from `@fontsource-variable/lora`). But, I changed the both the heading and body font to Noto Sans Display Condensed, with

```css
font-variation-settings:
  'wght' 500,
  'wdth' 87.5;
```

And that's for 2 reasons:

- I'm optimizing for devs: usually, fonts with a larger width-to-height ratio like the Condensed fonts and the JetBrains Mono font tend to help with the reading. You can see that after updating, you can read faster on this page than on other websites that uses the normal fonts.
- And, I'm presenting myself better through the typefaces. What I want to do is to make things better, better, and better every single day. No matter how better is will, I'll try my best to perfect the products that I craft, the codebase I touch whenever I'm able to.

I'm very passionate in programming, but also in designing. From a small typefaces change can have many meaning inside it. Hence the rush to change the brandings of many corps in the world. But in my opinion, I'd only change when it makes sense, e.g., leads to a better result, when it's needed, or when things related to it changes.

That's it, thank you for reading!

_(I haven't written for a while, sorry for bad wordings or silly mistakes. If there is any, please contact me!)_

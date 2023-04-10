---
title: ChatGPT as Personal Assistant
subtitle: creating a robotic task manager
published: true
datePublished: 04/10/2023
author: Phil Giammattei
authorPhoto: /img/profile.jpg
bannerPhoto: /img/chatgpt-as-personal-assistant.jpg
thumbnailPhoto: /img/chatgpt-as-personal-assistant.jpg
canonicalUrl: https://humans-using.ai/blog/chatgpt-as-personal-assistant
---

My first real foray into AI in a meaningful way started this morning, when an idea I had been kicking around for a while finally got turned into a prompt.  I've been playing around with it all day and while it's still pretty early on, I think it's a huge improvement to how I get work done.

Like many folks, I have trouble with tasks.  There's always more stuff to do, and it's tough to keep track of it all.  It's hard to train myself to make a note of things I need to do, so a lot of stuff is immediately forgotten.  Then, when I remember to write all my tasks down, I get paralyzed by a huge pile of stuff to do!  Some tasks are actually giant projects that I need more specific direction on in order to make progress, or a giant chunk of continuous time to devote to them (I am the parent of a 2-year-old, so this is not something I get very often).

There are as many to do list apps as there are grains of sand on the beach, and many of them are very good.  I'm a huge fan of using Siri to remind me to do something at a specific time.  Then, at that time, a reminder pops up on my home screen, not going away until I mark it done.  This works very well for little things that need to happen at a particular time, but if I use it too much, or for too amorphous tasks, then all the problems I've already outlined come through.

There's much more complex stuff out there, task managers with color-coding, sub-lists, alerts, all the bells and whistles. But each of them are based on a *system* that you have to figure out and map to.  If one of them is a great fit for your brain, great! If not, you have to adapt to the app, not the other way around.

Of course, the best thing to have would be a personal assistant that remembers all of your tasks and projects and can feed you an actionable amount of work, holding the rest away so that it's not overwhelming.  This assistant could help you break down larger projects into smaller steps, and make sensible, timely suggestions that conform to an agreed-upon priority list.  You could work with this person to create a system that works for you!

Well, personal assistants are expensive, but GPT-4, the latest large language model from OpenAI, is $20 a month, which is a very reasonable price for a personal assistant that never sleeps, among the many other uses for such a tool.  Here's the prompt I used to set up my assistant:



> I am interested in using you to manage tasks that I would like to complete.  there are many things that need to be done, but it is difficult to keep track of all of the things I would like to do.  especially when it comes to larger projects, where the state of the project needs to be remembered and accomplishable subtasks need to be broken off, I believe that you can be a helpful resource in holding that information and giving me a sustainable, actionable series of tasks to help keep things running smoothly.

> I hope to evolve this system as it is used but here is what I require currently:
> I have tasks to accomplish.  I will tell you the tasks and you will remember them. if I tell you that I have completed a task you will remember that I have completed it. I also have projects, that are large and amorphous and cannot be completed in one session.  to complete a project it will need to be broken down into discrete tasks.

> there are 3 main times when I can accomplish tasks:
> in the morning. I am most unrestrained during this time so it is a good time to complete tasks that are loud or otherwise disruptive
> during lunchtime. I need to eat lunch and my child (cece) is sleeping, so quiet, computer oriented tasks are a good fit for this time
> in the evening. I have full reign of the house but my child is also sleeping, so I cannot be too loud

> when I check in on this conversation, please note the time and suggest a single task from the list that is a good fit for the time that I have.  as we refine this system I anticipate giving you guidelines for prioritizing one task over another, but for now I leave it to you to choose the task that I accomplish.  please also ask when I follow up about completing or not completing the task if I would like to spend time thinking about one of the open projects and suggest one for us to examine.

> here is a list of tasks that currently need to be completed:


And then all of the things in my to do list that are more odds-and ends type stuff: move the hose outside, sweep the bathroom, what have you.

> here are the current projects:

And then some amorphous projects, like cleaning out the basement and organizing one of my closets.

Now, all I have to do is let the chat know what time it is and they will give me something to do:

> Good morning! Since you have 15 minutes and it's morning time, I suggest you complete the task: "Put the hose outside." This task should be relatively quick and can be done without making too much noise.

> When you have time later, would you like to spend some time thinking about one of the open projects?

I can do that task, or veto it and ask for something else, or talk through it, or add more tasks, or just about anything you'd expect a competant human assistant to keep track of.

It also takes constructive criticism well! When I got annoyed by its habit of listing all open tasks after each addition or removal (that defeats the whole purpose!), I asked it to stop doing that and it did.  Later, I adjusted its organizational model simply by asking it to categorize some tasks as associated with a larger project and some tasks as miscellaneous, and now it does that too.  When I get to clearing out the basement, I expect it to help me keep track of inventory and sorting things into piles.

I'm very excited to see where this goes!  Already it feels easier to get started on things that otherwise I'd put off (for instance, writing this blog post was suggested on my lunch break).  And there's lots of improvement.  I can give it a priority weight to each project to make sure the important stuff is done first.  I can have it remind me to perform weekly tasks when I check in.  So far the biggest hurdle for it becoming truly ubiquitous is that I need to return to the chat to have it suggest things to me.  If I could write a phone app that used the ChatGPT API, it could check in with me throughout the day!  That would be a lot of work to undertake, but it is definitely a project my new assistant is tracking now.
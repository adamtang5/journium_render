'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Stories', [
      {
        title: 'Fun with Daddy',
        content: `<img src="https://i.ibb.co/ZfXyFHp/img0001.jpg" alt="Fun with Daddy" class="story-media"><p>On Saturday, my brother went with Mommy to workday at church, and I spent the morning with Daddy.</p>`,
        userId: 4,
        imageUrl: 'https://i.ibb.co/ZfXyFHp/img0001.jpg',
      },
      {
        title: 'Breakfast with Daddy',
        content: `<img src="https://theorganisedhousewife.com.au/wp-content/uploads/2020/07/Icecream-colouring-in-printable-e1593653831424.jpg" alt="Breakfast with Daddy" class="story-media"><p>My Daddy was so funny! He was looking at one of my coloring sheets from school, where I colored a bunch of fast foods, snacks, sweets. And he was wondering if I had spelled "McDonald's" correctly. And he told me to look at what I wrote. He said, I spelled "McDonuts" instead of "McDonald's"! Hahaha... 🤣</p>`,
        userId: 4,
        imageUrl: 'https://theorganisedhousewife.com.au/wp-content/uploads/2020/07/Icecream-colouring-in-printable-e1593653831424.jpg',
      },
      {
        title: 'Daddy took me to soccer',
        content: `<img src="https://s3-media0.fl.yelpcdn.com/bphoto/MiNhW5xYg21yPcI6ACjd8Q/o.jpg" alt="Daddy took me to soccer" class="story-media"><p>Daddy took me to soccer on Saturday, where I played with my friends Timmy, Riley, Peter, and Kiran who's the coach's son. There were about 8 kids. And we played scrimage. And we also played 5 kids versus 3 kids plus coach. Our team beat the other team 5-0. We had fun. On the way home, my Dad stopped by the food trucks to look what trucks were there. And he told me about a Oaxacan truck that was new. He said that most people probably wouldn't know how to pronounce the name "Oaxaca", and would probably look at how it's spelled and pronounce it oh-Ax-a-kin. That sounded sooo funny! 🤣</p>`,
        userId: 4,
        imageUrl: 'https://s3-media0.fl.yelpcdn.com/bphoto/MiNhW5xYg21yPcI6ACjd8Q/o.jpg',
      },
      {
        title: `My Dad thinks I'm funny`,
        content: `<img src="https://i.ibb.co/93H09dH/img0002.jpg" alt="My Dad thinks I'm funny" class="story-media"><p>I was good because I walked the whole way on a hike so Mommy took me to Target so I could spend my money on my favorite toy -- Nerf Guns!!! And when I came home and showed my Daddy the Nerf Guns I bought, he was like "Wow ..." And then he asked me how much money I spent. I thought for a second, and then I told him "50 dollars!" He was like, "Wow, Collin, do you know how much your Nerf Guns are worth?" I was like, "I don't know..." He was like, "Well, if you spend that money on dinner, you can buy dinner for about 3 people these days! That's a lot of money, you know?" So I was like, "Well, thanks for the advice!" And I skipped out of his room down the hallway. He bursted out laughing and came downstairs to tell my Mom how funny I was. 😎</p>`,
        userId: 5,
        imageUrl: 'https://i.ibb.co/93H09dH/img0002.jpg',
      },
      {
        title: `Returning to the Office`,
        content: `<img src="https://images.squarespace-cdn.com/content/v1/57473789a3360c4623ca184a/1554918109302-DJULEKBLS6GFGACN6OFL/lake_merritt_1.jpg?format=1000w" alt="Returning to the Office" class="story-media"><p>After about 2 whole years, and a couple of rotation changes, I'm finally returning to the office. Thankfully, it's just one day a week for now. I was worried about childcare, given that my husband is still in bootcamp, and he cannot really watch the kids in the afternoon before bootcamp is over. I had to keep pressing my new supervisor for updates, to see how many days they've decided that we would go into the office. Well, my first day went as smoothly as it could have. I was able to find street parking for free. When I came home, my husband has already helped the kids with homework and piano. Though he wasn't doing well. He skipped dinner and just went to bed around 6PM. And I was left to take care of the kids on my own. I was tired at night, but I was thankful that things went smoothly.</p>`,
        userId: 3,
        imageUrl: 'https://images.squarespace-cdn.com/content/v1/57473789a3360c4623ca184a/1554918109302-DJULEKBLS6GFGACN6OFL/lake_merritt_1.jpg?format=1000w',
      },
      {
        title: `My Goal after Graduating Bootcamp`,
        content: `<img src="https://images.unsplash.com/flagged/photo-1556746834-1cb5b8fabd54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8am9nZ2luZ3xlbnwwfHwwfHw%%3D&auto=format&fit=crop&w=500&q=60" alt="My Goal after Graduating Bootcamp" class="story-media"><p>One of my goals after graduating bootcamp (thankfully it's only 2 months away...) is definitely to lose weight. I'm about 25 lbs above my weight back when I got married. And I plan to get back to that weight. I know what works for me. And it's going to be running. I plan to get on my running routine as soon as I graduate. Hopefully, by the end of the year, I will have lost about 15-20 lbs. Just another thing to look forward to ...</p>`,
        userId: 2,
        imageUrl: 'https://images.unsplash.com/flagged/photo-1556746834-1cb5b8fabd54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8am9nZ2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      },
      {
        title: `Lessons from Group Project`,
        content: `<img src="https://i.ibb.co/1771Qtf/2022-04-05-12-31-34.png" alt="Lessons from Group Project" class="story-media"><p>There were many lessons from the first group project. I loved working with my group. I thought everyone was very capable and motivated. I had no doubt that they could all figure out the problems before us in order to accomplish our goal. I do want to point out several main lessons that I learned: 1) Our advisor was really good with giving us advice. We loved Rawaha's advice because it did make our app run better and our code less complicated. His advice also gave us a point to talk about how we implemented upvote/downvote with better time complexity than what we originally had in mind. 2) I felt that we needed better project management. I'm pretty sure we're all very driven to do what we do, but no one in our group stepped up to be the project manager, so in the end, we didn't accomplish as much as we could have. With that being said, we still had enough to pass. And that brings me to my third point. 3) We didn't kill ourselves over the weekend. I felt that the other groups were a lot more driven than we were so they were able to make apps that looked a lot better. They had tested most/all of their functionality. In contrast, we had the 2 features to pass and we didn't really devote much time to make our app look good. To be sure, our idea was dope and we could definitely spend more time of it to make it better. We just didn't look as nice as the other groups. If you're wondering, the screenshot above is the app that most people thought was the dopest out of all the groups. I was completely blown away at their presentation. But to be honest, I'm glad we didn't kill ourselves over the group project. So these are just some lessons I learned from the group project. It was definitely a lot of fun. And I would love to work with the same developers again.</p>`,
        userId: 2,
        imageUrl: 'https://i.ibb.co/1771Qtf/2022-04-05-12-31-34.png',
      },
      {
        title: `Musings - My Python Script Broke`,
        content: `<img src="https://i.ibb.co/SxyjtVB/2022-04-05-14-02-20.png" alt="Musings - My Python Script Broke" class="story-media"><p>Last week, I noticed that my Python app that I wrote for downloading media broke, mainly because of YouTube updates. I'll finally get to refactor my code and fix this problem as well. Hopefully I'll get to it after the solo project.</p>`,
        userId: 2,
        imageUrl: 'https://i.ibb.co/SxyjtVB/2022-04-05-14-02-20.png',
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Stories', null, {});
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      { userId: 2, storyId: 1, content: `I love hanging out with my boys when I have free time!`, },
      { userId: 2, storyId: 2, content: `Sometimes it's the most hilarious thing to look at how my boy spells some words. It's like a fun little puzzle to figure out who "steph crie" and who "cevin drnt" are. 🤣`, },
      { userId: 3, storyId: 2, content: `Little things that bring joy to my husband... I'm kinda worried about when my boys are going to learn to spell. Hmm... maybe we need to give them spelling challenges. 🤔`, },
      { userId: 2, storyId: 3, content: `It was nice to see you boys have fun playing soccer. Timmy was actually pretty good! It wasn't fun for the others when Timmy decided to join your team.`, },
      { userId: 2, storyId: 3, content: `Yeah, I did see some interesting new food trucks out there. Oaxacan definitely caught my attention. And then there was another dessert truck to compete with the usual cupcakes truck. It was neat to see, even though I wasn't going to buy anything.`, },
      { userId: 3, storyId: 4, content: `Collin says the darndest things 🤣 ... Gotta have a notebook and write down all the funny things he says!`, },
      { userId: 2, storyId: 4, content: `Yup! Remember the time when he gets so excited to tell me that he figured out that 10 quarters is worth 100 cents?! 🤣`, },
      { userId: 2, storyId: 5, content: `Yeah, hopefully it will be a nice change for you personally, and hopefully we'll be able to cope with changes during the final stretch of bootcamp.`, },
      { userId: 3, storyId: 6, content: `You go, Honey! Gotta start running again! Just don't wake me up at 5am again ...`, },
      { userId: 1, storyId: 7, content: `Glad you had fun with your group project! Looking forward to see you complete your solo project soon.`, },
      { userId: 1, storyId: 8, content: `What were some of the lessons from your code?`, },
      { userId: 2, storyId: 8, content: `I wrote a couple years ago without learning about SRP and DRY. This bootcamp definitely helped me understand those concepts and understand good practices. Will definitely DRY up my code when I refactor.`, },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};

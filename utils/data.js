const { Reaction } = require('../models');

// Arrays of random usernames, emails, thoughts, and reactions.
const usernames = [
  'guy123',
  'spider5',
  'litbet',
  'muymid',
  'xx_tame_xx',
  'indacub',
  'dangdorn',
  'flick45',
  'tempest-rise',
  'themstherulez',
];

const emails = [
  'guy9@gmail.com',
  'smithl@gmail.com',
  'joejohnson@hotmail.com',
  'smalltimebiz@aol.com',
  'marty55@gmail.com',
  'mrlee33@gmail.com',
  'hernandez@aol.com',
  'friedmank@gmail.com',
  'burgerfry@gmail.com',
  'whiteman@gmail.com',
];

const reactions = [
  'Not true.',
  'I love it!',
  'Well said',
  'A real thought there.',
  'Great!',
  'Love the thought.',
  'Not original.',
  'So true!',
  'Right.',
  'Preach!',
];

// Get a random item given an array.
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random username.
const getRandomUsername = () => `${getRandomArrItem(usernames)}`;

// Gets a random email.
const getRandomEmail = () => `${getRandomArrItem(emails)}`;

// Gets a random reaction.
const getRandomReaction = (int) => {
  const reactionArray = [];
  for (let i = 0; i < int; i++) {
    reactionArray.push({
      reactionBody: `${getRandomArrItem(reactions)}`,
      username: getRandomUsername()
    });
  };
  return reactionArray;
};

module.exports = { getRandomArrItem, getRandomUsername, getRandomEmail, getRandomReaction }
const connection = require('../config/connection');

const { User, Thought } = require('../models');

const { getRandomArrItem, getRandomUsername, getRandomEmail, getRandomReaction } = require('./data');

// Thoughts array
const thoughtArray = [
  'How does wind work?',
  "I'm the youngest I'll ever be.",
  'Are you thinking or just reading?',
  'Do timezones really matter?',
  'I wonder if someone on another planet is coding right now too.',
  'Do deep thoughts lead to an abyss?',
  "What is love? Baby don't hurt me.",
  'Seasonal depression is why we use to worship the sun.',
  'I just wanna be free!',
];

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing users
  await User.deleteMany({});

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Create empty array to hold the users
  const users = [];
  
  // Loop 3 times -- add users to the users array
  for (let i = 0; i < 3; i++) {
    // Get the user a random name and email.
    const username = getRandomUsername();
    const email = getRandomEmail();

    // Create empty array to hold the thoughts and friends
    const thoughts = [];
    // const friends = [];

    // Loop 3 times -- add thoughts to the thoughts array
    for (let i = 0; i < 3; i++) {
      // Get some random reaction objects using a helper function that we imported from ./data
      const reactions = getRandomReaction(2);
      const thoughtText = getRandomArrItem(thoughtArray);

      thoughts.push({
        thoughtText,
        username,
        reactions
      });
    };

    // Add thoughts to the collection and await the results
    await Thought.collection.insertMany(thoughts);

    users.push({
      username,
      email,
      thoughts: [...thoughts.map(thought => thought._id)],
      // friends
    });
  };

  // Add users to the collection and await the results
  await User.collection.insertMany(users);

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
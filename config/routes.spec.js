const db = require('../database/dbConfig');
const Users = require('../users/users-model');

beforeEach(async () => {
  await db("users").truncate();
});

const testUserData = {
  username: "Test User",
  password: "12345"
};

describe('adds a user on registration', () => {
  it('should add users to the database', async () => {
    let users = await Users.find();
    expect(users).toHaveLength(0);

    await Users.add(testUserData);

    users = await Users.find();
    expect(users).toHaveLength(1);
  });

  it('should return a single user with a username and password', async () => {
    await Users.add(testUserData);
    let user = await Users.findById(1);

    expect(user).toHaveProperty('username', testUserData.username);
    expect(user).toHaveProperty('password', testUserData.password);
  })
})
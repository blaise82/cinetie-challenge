module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    'Users',
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      type: DataTypes.STRING,
    },
    {},
  );
  Users.associate = function (Users) {
    // associations can be defined here
  };
  return Users;
};

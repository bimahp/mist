module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    uuid:  { type: DataTypes.UUID, primaryKey: true },
    name: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
    }
  })

  return User;
}
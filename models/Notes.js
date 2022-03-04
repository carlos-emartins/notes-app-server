module.exports = (sequelize, DataTypes) => {
  const Notes = sequelize.define('Notes', {
    body: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  })

  return Notes
}

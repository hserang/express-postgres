"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    // add altering commands here, calling 'done' when finished
    migration.createTable(
      "users",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        createdAt: {
          type: DataTypes.DATE
        },
        updatedAt: {
          type: DataTypes.DATE
        },
        name: {
          type: DataTypes.STRING
        }
      }
    )
    .complete(function(err) {
      if (err) {
        done(err);
      } else {
        done(null);
      }
    });
  },

  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    migration.dropTable('users')
    .complete(function(err) {
      if (err) {
        done(err);
      } else {
        done(null);
      }
    });
  }
};

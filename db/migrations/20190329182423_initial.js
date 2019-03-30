exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('vehicles', function(table) {
      table.increments('id').primary();
      table.string('size');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('spaces', function(table) {
      table.increments('id').primary();
      table.string('size');
      table.integer('row');
      table.integer('level');
      table.integer('vehicle_id').unsigned();
      table.foreign('vehicle_id')
        .references('vehicles.id');

      table.timestamps(true, true);
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('vehicles'),
    knex.schema.dropTable('spaces')
  ]);
};

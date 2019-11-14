exports.seed = function(knex, Promise) {
  
  return knex('students')
    .truncate()
    .then(function() {
      return knex('students').insert([
        {
          name: 'jerry'
        },
        {
          name: 'tom'
        },
        {
          name: 'ben'
        },
        {
          name: 'doe'
        },
      ]);
    });
};

Following tutorial here

1. http://docs.sequelizejs.com/manual/installation/getting-started.html
1. http://docs.sequelizejs.com/manual/tutorial/migrations.html


### Test Connection

`GRANT ALL PRIVILEGES ON *.* TO 'sequelize_username'@'localhost' WITH GRANT OPTION;` per [here](https://dev.mysql.com/doc/refman/5.5/en/adding-users.html).

* ERROR: Access denied for user 'sequelize_username'@'localhost' to database 'sequelize_database'


### Migrations

model:generate

create migrations & models

`node_modules/.bin/sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string`



db:migrate

create table in database

`node_modules/.bin/sequelize db:migrate`


db:migrate:undo

`node_modules/.bin/sequelize db:migrate:undo`


##### Seed
`node_modules/.bin/sequelize seed:generate --name demo-user`
(created file 20180401030311-demo-user.js)

modified that seed file

`node_modules/.bin/sequelize db:seed:all`

* ERROR: Field 'createdAt' doesn't have a default value
* (Make sure the create_at column in the association table have not the `:null => false` option.)
* (Found equivalent logic in migrations folder)

altered migration script to include the following, for each `createdAt` and `updatedAt`:
    `defaultValue: Sequelize.fn('now'),`









sequelize deprecated String based operators are now deprecated. Please use Symbol based operators for better
 security,
Following tutorial here

1. http://docs.sequelizejs.com/manual/installation/getting-started.html
    * Ignored `yarn`
    * Tested connection by running `index.js` in Webstorm succesfully.
    * Created schema, user & set permissions in MySQL.

1. http://docs.sequelizejs.com/manual/tutorial/migrations.html
    * Migrations section, up to but not included Advanced Topics

1. http://docs.sequelizejs.com/manual/installation/usage.html

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
generation:
`node_modules/.bin/sequelize seed:generate --name demo-user`
(created file 20180401030311-demo-user.js)

modified that seed file

`node_modules/.bin/sequelize db:seed:all`

* ERROR: Field 'createdAt' doesn't have a default value
* (Make sure the create_at column in the association table have not the `:null => false` option.)
* (Found equivalent logic in migrations folder)

altered migration script to include the following, for each `createdAt` and `updatedAt`:
    `defaultValue: Sequelize.fn('now'),`


`node_modules/.bin/sequelize db:seed:undo`
`node_modules/.bin/sequelize db:seed:undo:all`



sequelize deprecated String based operators are now deprecated. Please use Symbol based operators for better
 security,


# Next Steps

I've decided to creatively extend this project now to verify my assumptions of how it all works.
* I'm investigating what the syntax contained within means here: sequelize's `associate = function(models)` at the path of *models/entity.js*.
* started making a new company model manually.  Not via using npm-level commands, but by duplicating `user.js` into `organization.js`, and modifying accordingly. I've begun incorporating various fictional characters as fake data to define relations.

* `node_modules/.bin/sequelize model:create --name Organization --attributes 'orgId:integer orgName:string orgAddress:string'`
    * success

* `node_modules/.bin/sequelize seed:generate --name demo-organization`
    * well. okay. it works.
    * it just generates an empty boilerplate that you fill in manually anyways
    * i think i imagined the CLI was able to do too much. okay cool.
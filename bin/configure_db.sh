#!/bin/bash

export PGPASSWORD="peni1941"

echo "Configuring database..."

dropdb -U skygazer dragonborn
createdb -U skygazer dragonborn

echo "Creating tables..."

psql -U skygazer dragonborn < ./bin/sql/generation.sql
psql -U skygazer dragonborn < ./bin/sql/dragon.sql
psql -U skygazer dragonborn < ./bin/sql/trait.sql
psql -U skygazer dragonborn < ./bin/sql/dragonTrait.sql

node ./bin/insertTraits.js

echo "Database and tables configured."
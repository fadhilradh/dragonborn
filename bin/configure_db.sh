#!/bin/bash

export PGPASSWORD="peni1941"

echo "Configuring database..."

dropdb -U skygazer dragonborn
createdb -U skygazer dragonborn

echo "Creating tables..."

psql -U skygazer dragonborn < ./bin/sql/generation.sql
echo "Generation table created"

psql -U skygazer dragonborn < ./bin/sql/dragon.sql

echo "Database and tables configured."
<?php
/**
 * Created by PhpStorm.
 * User: s_i_d
 * Date: 06.07.2017
 * Time: 17:19
 */

const SQL_CREATE_FILM_TABLE = '
        CREATE TABLE IF NOT EXISTS film (
            id INT UNSIGNED NOT NULL AUTO_INCREMENT,
            title VARCHAR(255) NOT NULL,
            about BLOB NULL,
            filmcol VARCHAR(45) NULL,
            PRIMARY KEY (id)
        )
';

const SQL_CREATE_ORDER_CHECK_TABLE = '
        CREATE TABLE IF NOT EXISTS order_check (
              id INT UNSIGNED NOT NULL AUTO_INCREMENT,
              price VARCHAR(45) NULL,
              order_time DATETIME NULL,
              film_id INT UNSIGNED NOT NULL,
              PRIMARY KEY (id),
              INDEX fk_order_film1_idx (film_id ASC),
              CONSTRAINT fk_order_film1
                FOREIGN KEY (film_id)
                REFERENCES film (id)
                ON DELETE NO ACTION
                ON UPDATE NO ACTION
        )
';

const SQL_CREATE_CARRIER_TABLE = '
      CREATE TABLE IF NOT EXISTS carrier (
          id INT NOT NULL AUTO_INCREMENT,
          carrier_type VARCHAR(255) NOT NULL UNIQUE,
          PRIMARY KEY (id)
      )
';

const SQL_CREATE_FILM_CARIER_TABLE = '
          CREATE TABLE IF NOT EXISTS film_carier (
              film_id INT UNSIGNED NOT NULL,
              carrier_id INT NOT NULL,
              INDEX fk_film_carier_film_idx (film_id ASC),
              INDEX fk_film_carier_carrier1_idx (carrier_id ASC),
              CONSTRAINT fk_film_carier_film
                FOREIGN KEY (film_id)
                REFERENCES film (id)
                ON DELETE NO ACTION
                ON UPDATE NO ACTION,
              CONSTRAINT fk_film_carier_carrier1
                FOREIGN KEY (carrier_id)
                REFERENCES carrier (id)
                ON DELETE NO ACTION
                ON UPDATE NO ACTION
              )
';

const SQL_CREATE_GANRE_TABLE = '
        CREATE TABLE IF NOT EXISTS ganre (
            id INT NOT NULL AUTO_INCREMENT,
            ganre_name VARCHAR(45) NOT NULL,
            PRIMARY KEY (id)
        )
';

const SQL_CREATE_FILM_GANRE_TABLE = '
          CREATE TABLE IF NOT EXISTS film_ganre (
              film_id INT UNSIGNED NOT NULL,
              ganre_id INT NOT NULL,
              INDEX fk_film_ganre_film1_idx (film_id ASC),
              INDEX fk_film_ganre_ganre1_idx (ganre_id ASC),
              CONSTRAINT fk_film_ganre_film1
                FOREIGN KEY (film_id)
                REFERENCES film (id)
                ON DELETE NO ACTION
                ON UPDATE NO ACTION,
              CONSTRAINT fk_film_ganre_ganre1
                FOREIGN KEY (ganre_id)
                REFERENCES ganre (id)
                ON DELETE NO ACTION
                ON UPDATE NO ACTION
          )
';


const SQL_CREATE_DIRECTOR_TABLE = '
        CREATE TABLE IF NOT EXISTS director (
            id INT UNSIGNED NOT NULL AUTO_INCREMENT,
            director_name VARCHAR(100) NOT NULL,
            about BLOB NULL,
            PRIMARY KEY (id)
        )
';


const SQL_CREATE_FILM_DIRECTOR_TABLE = '
          CREATE TABLE IF NOT EXISTS film_director (
          director_id INT UNSIGNED NOT NULL,
          film_id INT UNSIGNED NOT NULL,
          INDEX fk_film_director_director1_idx (director_id ASC),
          INDEX fk_film_director_film1_idx (film_id ASC),
          CONSTRAINT fk_film_director_director1
            FOREIGN KEY (director_id)
            REFERENCES director (id)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION,
          CONSTRAINT fk_film_director_film1
            FOREIGN KEY (film_id)
            REFERENCES film (id)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
        )
';


const SQL_CREATE_ACTOR_TABLE = '
          CREATE TABLE IF NOT EXISTS actor (
          id INT UNSIGNED NOT NULL,
          actorname VARCHAR(255) NOT NULL,
          about BLOB NOT NULL,
          PRIMARY KEY (id)
        )
';


const SQL_CREATE_FILM_ACTOR_TABLE = '
          CREATE TABLE IF NOT EXISTS film_actor (
          actor_id INT UNSIGNED NOT NULL,
          film_id INT UNSIGNED NOT NULL,
          INDEX fk_film_actor_actor1_idx (actor_id ASC),
          INDEX fk_film_actor_film1_idx (film_id ASC),
          CONSTRAINT fk_film_actor_actor1
            FOREIGN KEY (actor_id)
            REFERENCES actor (id)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION,
          CONSTRAINT fk_film_actor_film1
            FOREIGN KEY (film_id)
            REFERENCES film (id)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
        )
';

const SQL_DROP_TABLES = '
    DROP TABLE IF EXISTS film_actor;
    DROP TABLE IF EXISTS actor;
    DROP TABLE IF EXISTS film_director;
    DROP TABLE IF EXISTS director;
    DROP TABLE IF EXISTS film_ganre;
    DROP TABLE IF EXISTS ganre;
    DROP TABLE IF EXISTS film_carier;
    DROP TABLE IF EXISTS carrier;
    DROP TABLE IF EXISTS order_check;
    DROP TABLE IF EXISTS film;
';

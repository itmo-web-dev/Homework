<?php
/**
 * Created by PhpStorm.
 * User: s_i_d
 * Date: 06.07.2017
 * Time: 13:17
 */

const SQL_CREATE_MENU_TABLE = '
        CREATE TABLE IF NOT EXISTS menu (
        id INT UNSIGNED NOT NULL AUTO_INCREMENT,
        parent_id INT UNSIGNED NULL,
        title VARCHAR(255) NOT NULL,
        url VARCHAR(500) NOT NULL,
          PRIMARY KEY (id)
        )
';

const SQL_GET_MENU = '
    SELECT id, parent_id, title, url FROM menu
';

const SQL_INSERT_MENU_ITEM = '
  INSERT INTO menu (parent_id, title, url) VALUES (?,?,?)
';

const SQL_UPDATE_MENU_ITEM_BY_ID = '
  UPDATE menu SET
      parent_id = :parent_id,
      title = :title,
      url = :url
  WHERE
      id = :id
';

const SQL_GET_MENU_ITEM = '
    SELECT id, parent_id, title, url FROM menu
';
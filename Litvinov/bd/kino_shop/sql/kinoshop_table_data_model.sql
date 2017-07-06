CREATE SCHEMA IF NOT EXISTS `kinoshop` DEFAULT CHARACTER SET utf8 ;
USE `kinoshop` ;

-- -----------------------------------------------------
-- Table `mydb`.`film`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kinoshop`.`film` (
  `idtable1` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `about` LONGTEXT NULL,
  PRIMARY KEY (`idtable1`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`ganre`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kinoshop`.`ganre` (
  `idganre` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`idganre`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`directors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kinoshop`.`directors` (
  `iddirectors` INT NOT NULL,
  `family` VARCHAR(45) NULL,
  PRIMARY KEY (`iddirectors`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`artists`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kinoshop`.`artists` (
  `idartists` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `sername` VARCHAR(45) NULL,
  `age` VARCHAR(45) NULL,
  PRIMARY KEY (`idartists`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`film_directors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kinoshop`.`film_directors` (
  `directors_iddirectors` INT NOT NULL,
  `film_idtable1` INT NOT NULL,
  INDEX `fk_film_directors_directors1_idx` (`directors_iddirectors` ASC),
  INDEX `fk_film_directors_film1_idx` (`film_idtable1` ASC),
  CONSTRAINT `fk_film_directors_directors1`
    FOREIGN KEY (`directors_iddirectors`)
    REFERENCES `mydb`.`directors` (`iddirectors`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_film_directors_film1`
    FOREIGN KEY (`film_idtable1`)
    REFERENCES `mydb`.`film` (`idtable1`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`film_ganre`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kinoshop`.`film_ganre` (
  `ganre_idganre` INT NOT NULL,
  `film_idtable1` INT NOT NULL,
  INDEX `fk_film_ganre_ganre_idx` (`ganre_idganre` ASC),
  INDEX `fk_film_ganre_film1_idx` (`film_idtable1` ASC),
  CONSTRAINT `fk_film_ganre_ganre`
    FOREIGN KEY (`ganre_idganre`)
    REFERENCES `mydb`.`ganre` (`idganre`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_film_ganre_film1`
    FOREIGN KEY (`film_idtable1`)
    REFERENCES `mydb`.`film` (`idtable1`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`film_artists`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kinoshop`.`film_artists` (
  `artists_idartists` INT NOT NULL,
  `film_idtable1` INT NOT NULL,
  INDEX `fk_film_artists_artists1_idx` (`artists_idartists` ASC),
  INDEX `fk_film_artists_film1_idx` (`film_idtable1` ASC),
  CONSTRAINT `fk_film_artists_artists1`
    FOREIGN KEY (`artists_idartists`)
    REFERENCES `mydb`.`artists` (`idartists`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_film_artists_film1`
    FOREIGN KEY (`film_idtable1`)
    REFERENCES `mydb`.`film` (`idtable1`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Data for table `mydb`.`film`
-- -----------------------------------------------------
START TRANSACTION;
USE `kinoshop`;
INSERT INTO `mydb`.`film` (`idtable1`, `title`, `about`) VALUES (1, 'film01', 'about Russia');
INSERT INTO `mydb`.`film` (`idtable1`, `title`, `about`) VALUES (2, 'film02', 'about life');
INSERT INTO `mydb`.`film` (`idtable1`, `title`, `about`) VALUES (3, 'film03', 'about Piter');

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`ganre`
-- -----------------------------------------------------
START TRANSACTION;
USE `kinoshop`;
INSERT INTO `mydb`.`ganre` (`idganre`, `name`) VALUES (1, 'фэнтази');
INSERT INTO `mydb`.`ganre` (`idganre`, `name`) VALUES (2, 'фантастика');
INSERT INTO `mydb`.`ganre` (`idganre`, `name`) VALUES (3, 'приключения');
INSERT INTO `mydb`.`ganre` (`idganre`, `name`) VALUES (4 , 'боевик');

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`directors`
-- -----------------------------------------------------
START TRANSACTION;
USE `kinoshop`;
INSERT INTO `mydb`.`directors` (`iddirectors`, `family`) VALUES (1, 'Робертс');
INSERT INTO `mydb`.`directors` (`iddirectors`, `family`) VALUES (2, 'Имоу');
INSERT INTO `mydb`.`directors` (`iddirectors`, `family`) VALUES (3, 'Вромен');

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`artists`
-- -----------------------------------------------------
START TRANSACTION;
USE `kinoshop`;
INSERT INTO `mydb`.`artists` (`idartists`, `name`, `sername`, `age`) VALUES (1, 'кевин', 'коснер', '50');
INSERT INTO `mydb`.`artists` (`idartists`, `name`, `sername`, `age`) VALUES (2, 'мэт', 'дэймон', '35');
INSERT INTO `mydb`.`artists` (`idartists`, `name`, `sername`, `age`) VALUES (3, 'том', 'хиделстоне', '40');

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`film_directors`
-- -----------------------------------------------------
START TRANSACTION;
USE `kinoshop`;
INSERT INTO `mydb`.`film_directors` (`directors_iddirectors`, `film_idtable1`) VALUES (1, 1);
INSERT INTO `mydb`.`film_directors` (`directors_iddirectors`, `film_idtable1`) VALUES (2, 2);
INSERT INTO `mydb`.`film_directors` (`directors_iddirectors`, `film_idtable1`) VALUES (3, 1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`film_ganre`
-- -----------------------------------------------------
START TRANSACTION;
USE `kinoshop`;
INSERT INTO `mydb`.`film_ganre` (`ganre_idganre`, `film_idtable1`) VALUES (1, 2);
INSERT INTO `mydb`.`film_ganre` (`ganre_idganre`, `film_idtable1`) VALUES (1, 3);
INSERT INTO `mydb`.`film_ganre` (`ganre_idganre`, `film_idtable1`) VALUES (1, 1);
INSERT INTO `mydb`.`film_ganre` (`ganre_idganre`, `film_idtable1`) VALUES (2, 2);
INSERT INTO `mydb`.`film_ganre` (`ganre_idganre`, `film_idtable1`) VALUES (2, 4);
INSERT INTO `mydb`.`film_ganre` (`ganre_idganre`, `film_idtable1`) VALUES (3, 1);
INSERT INTO `mydb`.`film_ganre` (`ganre_idganre`, `film_idtable1`) VALUES (3, 2);

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`film_artists`
-- -----------------------------------------------------
START TRANSACTION;
USE `kinoshop`;
INSERT INTO `mydb`.`film_artists` (`artists_idartists`, `film_idtable1`) VALUES (1, 1);
INSERT INTO `mydb`.`film_artists` (`artists_idartists`, `film_idtable1`) VALUES (1, 2);
INSERT INTO `mydb`.`film_artists` (`artists_idartists`, `film_idtable1`) VALUES (1, 3);
INSERT INTO `mydb`.`film_artists` (`artists_idartists`, `film_idtable1`) VALUES (2, 2);
INSERT INTO `mydb`.`film_artists` (`artists_idartists`, `film_idtable1`) VALUES (2, 3);
INSERT INTO `mydb`.`film_artists` (`artists_idartists`, `film_idtable1`) VALUES (3, 3);

COMMIT;


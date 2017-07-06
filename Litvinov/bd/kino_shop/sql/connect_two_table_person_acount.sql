
CREATE TABLE IF NOT EXISTS `mydb`.`au_person` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(50) NOT NULL,
  `lastname` VARCHAR(50) NOT NULL,
  `patro` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`au_account`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`au_account` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(50) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `au_person_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_au_account_au_person_idx` (`au_person_id` ASC),
  CONSTRAINT `fk_au_account_au_person`
    FOREIGN KEY (`au_person_id`)
    REFERENCES `mydb`.`au_person` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`au_person` (`id`, `firstname`, `lastname`, `patro`) VALUES (1, 'person01', 'tim', 'temp');
INSERT INTO `mydb`.`au_person` (`id`, `firstname`, `lastname`, `patro`) VALUES (2, 'person02', 'tod', 't');
INSERT INTO `mydb`.`au_person` (`id`, `firstname`, `lastname`, `patro`) VALUES (3, 'person03', 'jim', 'er');

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`au_account`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`au_account` (`id`, `username`, `password`, `au_person_id`) VALUES (1, 'bil ', '123', 1);
INSERT INTO `mydb`.`au_account` (`id`, `username`, `password`, `au_person_id`) VALUES (2, 'sem', '2345', 2);
INSERT INTO `mydb`.`au_account` (`id`, `username`, `password`, `au_person_id`) VALUES (3, 'cary', '5454', 3);

COMMIT;


CREATE DATABASE seminario;
USE seminario;

CREATE TABLE clientes (
    codigo INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(30) DEFAULT '0',
    apellido VARCHAR(30) DEFAULT '0',
    edad INT(2) UNSIGNED DEFAULT '0',
    telefono VARCHAR(8) DEFAULT '0',
    ciudad VARCHAR(30) DEFAULT '0'
) COLLATE='armscii8_bin';

INSERT INTO clientes (nombre, apellido, edad, telefono, ciudad) VALUES
('Juan', 'Perez', 22, '90909090', 'La Ceiba'),
('Carlos', 'Medina', 30, '80808080', 'San Pedro Sula'),
('Diana', 'Paz', 23, '70707070', 'Santa Barbara'),
('Fernanda', 'Casco', 25, '60606060', 'Choluteca');
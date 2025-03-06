CREATE DATABASE seminario;
USE seminario;

CREATE TABLE clientes (
    codigo INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(30) DEFAULT '0',
    apellido VARCHAR(30) DEFAULT '0',
    edad INT(2) UNSIGNED DEFAULT '0',
    telefono VARCHAR(8) DEFAULT '0',
    ciudad VARCHAR(30) DEFAULT '0'
);

CREATE TABLE empleados (
    codigoE INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    edad INT DEFAULT 0,
    fechaC DATE NOT NULL,
    sueldo DECIMAL(10,2) DEFAULT 0,
    telefono VARCHAR(20) UNIQUE
);

CREATE TABLE idiomas (
    codigoI INT PRIMARY KEY AUTO_INCREMENT,
    nombreI VARCHAR(50) NOT NULL
);

CREATE TABLE empleado_idiomas (
    codigoE INT,
    codigoI INT,
    tiempoI INT DEFAULT 0,
    PRIMARY KEY (codigoE, codigoI),
    FOREIGN KEY (codigoE) REFERENCES empleados(codigoE) ON DELETE CASCADE,
    FOREIGN KEY (codigoI) REFERENCES idiomas(codigoI) ON DELETE CASCADE
);

INSERT INTO clientes (nombre, apellido, edad, telefono, ciudad) VALUES
('Juan', 'Perez', 22, '90909090', 'La Ceiba'),
('Carlos', 'Medina', 30, '80808080', 'San Pedro Sula'),
('Diana', 'Paz', 23, '70707070', 'Santa Barbara'),
('Fernanda', 'Casco', 25, '60606060','Choluteca');

INSERT INTO empleados (nombre, apellido, edad, fechaC, sueldo, telefono) VALUES
('Juan', 'Perez', 30, '2023-01-15', 1500.00, '1234567890'),
('Maria', 'Gomez', 25, '2022-06-20', 1800.00, '0987654321'),
('Carlos', 'Lopez', 35, '2021-03-10', 2000.00, '1122334455'),
('Ana', 'Martinez', 28, '2023-07-01', 1700.00, '6677889900'),
('Luis', 'Hernandez', 40, '2020-11-25', 2200.00, '5566778899');

INSERT INTO idiomas (nombreI) VALUES
('Inglés'),
('Chino mandarín'),
('Español'),
('Francés'),
('Japones'),
('Ruso'),
('Portugués');

INSERT INTO empleado_idiomas (codigoE, codigoI, tiempoI) VALUES
(1, 1, 5),
(1, 3, 4),
(1, 5, 2),
(2, 1, 6),
(2, 4, 3),
(2, 6, 2),
(3, 2, 7),
(4, 5, 2),
(5, 6, 6),
(5, 7, 3);
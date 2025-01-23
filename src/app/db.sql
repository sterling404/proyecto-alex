-- 1) Crear tabla Roles primero, pues se usa como FK en Usuarios.
CREATE TABLE roles (
    id_rol INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nombre VARCHAR(50)
);

-- 2) Crear tabla Permisos
CREATE TABLE permisos (
    id_permiso INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nombre VARCHAR(50),
    descripcion TEXT
);

-- 3) Tabla intermedia roles_permisos
CREATE TABLE roles_permisos (
    id_rol INT,
    id_permiso INT,
    PRIMARY KEY (id_rol, id_permiso),
    FOREIGN KEY (id_rol) REFERENCES roles(id_rol),
    FOREIGN KEY (id_permiso) REFERENCES permisos(id_permiso)
);

-- 4) Crear tabla Usuarios
CREATE TABLE usuarios (
    id_usuario INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    email VARCHAR(100),
    password VARCHAR(255),
    id_rol INT,
    rut VARCHAR(10) UNIQUE,
    telefono VARCHAR(15),
    direccion VARCHAR(100),
    fecha_nacimiento DATE,
    fecha_registro TIMESTAMP,
    -- Para simular el ENUM, usamos CHECK
    estado VARCHAR(20) DEFAULT 'activo'
        CHECK (estado IN ('activo','suspendido')),
    FOREIGN KEY (id_rol) REFERENCES roles(id_rol)
);

-- 5) Tabla intermedia usuario_rol (si quieres manejar múltiples roles)
CREATE TABLE usuario_rol (
    id_usuario INT,
    id_rol INT,
    PRIMARY KEY (id_usuario, id_rol),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_rol) REFERENCES roles(id_rol)
);

-- 6) Crear tabla Pacientes
CREATE TABLE pacientes (
    id_paciente INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    id_usuario INT,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

-- 7) Crear tabla Psicologos
CREATE TABLE psicologos (
    id_psicologo INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    id_usuario INT,
    especialidad VARCHAR(100),
    experiencia TEXT,
    biografia TEXT,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

-- 8) Crear tabla Horarios
CREATE TABLE horarios (
    id_horario INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    id_psicologo INT,
    
    dias_atencion VARCHAR(20) 
        CHECK (dias_atencion IN (
            'LUNES','MARTES','MIERCOLES',
            'JUEVES','VIERNES','SABADO','DOMINGO'
        )),
    hora_inicio TIME,
    hora_fin TIME,
    FOREIGN KEY (id_psicologo) REFERENCES psicologos(id_psicologo)
);

-- 9) Crear tabla Ficha_Evaluacion
CREATE TABLE ficha_evaluacion (
    id_ficha_evaluacion INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    id_paciente INT,
    id_psicologo INT,
    motivo_consulta TEXT,
    motivo_derivacion VARCHAR(255),
    estado_ficha VARCHAR(20) DEFAULT 'activa'
        CHECK (estado_ficha IN ('activa','cerrada')),
    historial_familiar TEXT,
    historial_morbido TEXT,
    historial_social TEXT,
    historial_psicologico TEXT,
    historial_educativo TEXT,
    historial_laboral TEXT,
    sintomas_actuales TEXT,
    nivel_malestar INT,
    recursos_afrontamiento TEXT,
    expectativas_tratamiento TEXT,
    observaciones TEXT,
    dsm_cie TEXT,
    evolutivo TEXT,
    objetivos_terapeuticos TEXT,
    enfoque_terapeutico TEXT,
    frecuencia_sesiones VARCHAR(50),
    derivaciones_referencias TEXT,
    fecha_creacion TIMESTAMP,
    firma_psicologo BYTEA, 
    categoria VARCHAR(50),
    FOREIGN KEY (id_paciente) REFERENCES pacientes(id_paciente),
    FOREIGN KEY (id_psicologo) REFERENCES psicologos(id_psicologo)
);

-- 10) Finalmente, crear tabla Citas (referencia Ficha_Evaluacion y Psicologos)
CREATE TABLE citas (
    id_cita INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    id_paciente INT,
    id_horario INT,
    id_ficha_evaluacion INT,
    id_psicologo INT,
    fecha DATE,
    hora_inicio TIME,
    hora_fin TIME,
    -- Corrección de 'realisada' a 'realizada'
    estado_citas VARCHAR(20) DEFAULT 'activa'
        CHECK (estado_citas IN ('activa','cancelada','realizada')),
    objetivo TEXT,
    desarrollo TEXT,
    reflexion_proxima TEXT,
    FOREIGN KEY (id_paciente) REFERENCES pacientes(id_paciente),
    FOREIGN KEY (id_horario) REFERENCES horarios(id_horario),
    FOREIGN KEY (id_ficha_evaluacion) REFERENCES ficha_evaluacion(id_ficha_evaluacion),
    FOREIGN KEY (id_psicologo) REFERENCES psicologos(id_psicologo)
);
















/* CREATE TABLE Usuarios (
  id_usuario INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50),
  apellido VARCHAR(50),
  email VARCHAR(100),
  password VARCHAR(255),
  id_rol INT,
  rut VARCHAR(10) UNIQUE,
  telefono VARCHAR(15),
  direccion VARCHAR(100),
  fecha_nacimiento DATE,
  fecha_registro DATETIME,
  estado ENUM('activo', 'suspendido'),
  FOREIGN KEY (id_rol) REFERENCES Roles(id_rol)
);

CREATE TABLE Pacientes (
  id_paciente INT AUTO_INCREMENT PRIMARY KEY,
  id_usuario INT,
  FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario)
);

CREATE TABLE Psicologos (
  id_psicologo INT AUTO_INCREMENT PRIMARY KEY,
  id_usuario INT,
  especialidad VARCHAR(100),
  experiencia TEXT,
  biografia TEXT,
  FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario)
);

CREATE TABLE Horarios (
  id_horario INT AUTO_INCREMENT PRIMARY KEY,
  id_psicologo INT,
  dias_atencion ENUM('LUNES','MARTES','MIERCOLES','JUEVES','VIERNES','SABADO','DOMINGO') 
  hora_inicio TIME,
  hora_fin TIME,
  FOREIGN KEY (id_psicologo) REFERENCES Psicologos(id_psicologo)
);

CREATE TABLE Citas (
  id_cita INT AUTO_INCREMENT PRIMARY KEY,
  id_paciente INT,
  id_horario INT,
  id_ficha_evaluacion INT,
  fecha DATE,
  hora_inicio TIME,
  estado_citas ENUM('activa', 'cancelada','realisada') DEFAULT 'activa',
  hora_fin TIME,
  objetivo TEXT,
  desarrollo TEXT,
  reflexion_proxima TEXT,
  FOREIGN KEY (id_paciente) REFERENCES Pacientes(id_paciente),
  FOREIGN KEY (id_horario) REFERENCES Horarios(id_horario),
  FOREIGN KEY (id_ficha_evaluacion) REFERENCES Ficha_Evaluacion(id_ficha_evaluacion)
);

CREATE TABLE Ficha_Evaluacion (
  id_ficha_evaluacion INT AUTO_INCREMENT PRIMARY KEY,
  id_paciente INT,
  id_psicologo INT,
  motivo_consulta TEXT,
  motivo_derivacion VARCHAR(255),
  estado_ficha ENUM('activa', 'cerrada') DEFAULT 'activa',
  historial_familiar TEXT,
  historial_morbido TEXT,
  historial_social TEXT,
  historial_psicologico TEXT,
  historial_educativo TEXT,
  historial_laboral TEXT,
  sintomas_actuales TEXT,
  nivel_malestar INT(11),
  recursos_afrontamiento TEXT,
  expectativas_tratamiento TEXT,
  observaciones TEXT,
  dsm_cie TEXT,
  evolutivo TEXT,
  objetivos_terapeuticos TEXT,
  enfoque_terapeutico TEXT,
  frecuencia_sesiones VARCHAR(50),
  derivaciones_referencias TEXT,
  fecha_creacion DATETIME,
  firma_psicologo LONGBLOB,
  categoria VARCHAR(50),
  FOREIGN KEY (id_paciente) REFERENCES Pacientes(id_paciente),
  FOREIGN KEY (id_psicologo) REFERENCES Psicologos(id_psicologo)
);

CREATE TABLE Roles (
  id_rol INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50)
);
CREATE TABLE permisos (
  id_permiso INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50),
  descripcion TEXT
);

CREATE TABLE roles_permisos (
  id_rol INT,
  id_permiso INT,
  PRIMARY KEY (id_rol, id_permiso),
  FOREIGN KEY (id_rol) REFERENCES roles(id_rol),
  FOREIGN KEY (id_permiso) REFERENCES permisos(id_permiso)
);
 ALTER TABLE Citas
ADD COLUMN id_psicologo int AFTER id_paciente,
ADD CONSTRAINT fk_psicologo_citas
FOREIGN KEY (id_psicologo) REFERENCES Psicologos(id_psicologo);

CREATE TABLE usuario_rol (
    id_usuario INT,      
    id_rol INT,
    PRIMARY KEY (id_usuario, id_rol),
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario),
    FOREIGN KEY (id_rol) REFERENCES Roles(id_rol)
);




 */
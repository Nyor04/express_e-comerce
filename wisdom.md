Aparentemente la configuracion o estructura inicial de un proyecto de Node es:

../Project
├── index.js
├── node_modules
├── package-lock.json
├── package.json
└── wisdom.md

index.js : archivo principal. 

node_modules: carpeta de instalacion de las dependencias y paquetes, (si hago npm install con una -D al final, se 
installan especificamente para la carpeta del paquete, como sifuera un venv.)

package-lock.json fue creado automaticamente, asumo que se crea por el -D en el npm install.

package.json: producto de npm init.

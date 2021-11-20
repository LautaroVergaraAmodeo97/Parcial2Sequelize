# Parcial2Sequelize

Grupo 2 : Tomás di Matteo, Augusto Castro y Lautaro Vergara Amodeo

Segundo Parcial de Programación 3

Utilizamos el cmd en vez de powershell ya que en powershell nos generaba errores.

Repositorio analizados:

° https://github.com/FacundoDamianDeBenedetti/grupo_4_TuringTech_Sprint1

° https://github.com/Rociobohn/Grupo_3_Clopix

Documento google docs con el informe solicitado:

° https://docs.google.com/document/d/1qsrbhwgaLSibCmoM8u4bsPJ6dPGFSxJxnPkjpThCToQ/edit


GENERACIÓN DE MODELOS DE CLASES
--------------------------------------------------------------------------------------------------------------

sequelize model:generate --name Rol --attributes nombre:string

sequelize model:generate --name Usario --attributes nombre:string,apellido:string,email:string,constraseñia:string,avatar:string,rolesId:integer

sequelize model:generate --name Direccion --attributes calle:string,numero:integer,codigopostal:string,usersId:integer

sequelize model:generate --name Imagenes --attributes nombre :string

sequelize model:generate --name DetallePedido --attributessubtotal:decimal,ordenPedidoId:integer,ProductoId:integer

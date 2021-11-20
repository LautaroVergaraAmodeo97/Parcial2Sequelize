# Parcial2Sequelize

Grupo 2 : Tomás di Matteo, Augusto Castro y Lautaro Vergara Amodeo


Utilizamos el cmd en vez de powershell ya que en powershell nos generaba errores.


GENERACIÓN DE MODELOS DE CLASES
--------------------------------------------------------------------------------------------------------------

sequelize model:generate --name Rol --attributes nombre:string

sequelize model:generate --name Usario --attributes nombre:string,apellido:string,email:string,constraseñia:string,avatar:string,rolesId:integer

sequelize model:generate --name Direccion --attributes calle:string,numero:integer,codigopostal:string,usersId:integer

sequelize model:generate --name Imagenes --attributes nombre :string

sequelize model:generate --name DetallePedido --attributessubtotal:decimal,ordenPedidoId:integer,ProductoId:integer

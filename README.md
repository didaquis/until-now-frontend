# Until Now 
En algunas actividades, como en el submarinismo o la escalada, se utilza material técnico especializado y diseñado únicamente para tal fin. Los fabricantes de dicho material establecen una duración máxima de uso para estos productos. Exceder la vida útil de los elementos usados en actividades de riesgo puede tener consecuencias letales.

Until Now te ayuda a gestionar la fecha de renovación del material técnico. La aplicación te permite visualizar rápidamente que material debes descartar y/o renovar próximamente.


## Until Now (frontend) 
Este repositorio contiene el frontend del proyecto.  

Recursos utilizados:
* [React](https://github.com/facebook/create-react-app) 
* [Bootstrap 4](https://getbootstrap.com) 
* [Shards](https://designrevision.com/downloads/shards/) 
* [Reactstrap](https://reactstrap.github.io) 


## Repositorios relacionados 
Este repositorio es parte del proyecto **Until Now**. Consulta los enlaces proporcionados para obtener más información.   

Enlaces relacionados:
* Repositorio principal y documentación: [Until Now frontend app](https://github.com/didaquis/until-now-frontend) 
* [Until Now client API](https://github.com/didaquis/until-now-client-api) 
* [Until Now server API](https://github.com/didaquis/until-now-server-api) 

Para hacer funcionar la aplicación, debes renombrar el fichero `_env` por `.env` y configurar las variables para la correcta utilización de la API y/o el TDD. 


## Documentación del proyecto 
Estructura de la base de datos:  

![Base de datos](documentation/database.png)  

Arquitectura del proyecto:  

![Arquitectura](documentation/main.png)  

Puedes ver los mockups iniciales en:  
[Mockup lista colecciones](documentation/mockup_1.png)  
[Mockup lista items](documentation/mockup_2.png)  

## Sprint Planning
Gestión de tareas: [Kanban](https://trello.com/b/x0Vl2LAY/until-now)  

------ 

### Sprint primera semana
#### Lunes
- [x] Definir modelos de datos
- [x] Realizar mockups de las vistas
- [x] Hacer mapa de la relación de collecciones de la base de datos
- [x] Definir la estructura del proyecto
- [x] Web Templating
#### Martes
- [x] Solicitar feedback templating
- [x] Crear las vistas en React
- [x] Crear base de datos
- [x] Crear API server
- [x] API server: listar colecciones e items
#### Miércoles
- [x] Crear API client
- [x] API client: listar colecciones e items
- [x] TDD API client
#### Jueves
- [x] TDD API server
- [x] Listar en frontend colecciones e items
- [x] API server: eliminación de colecciones
- [x] API client: eliminación de colecciones
#### Viernes
- [x] Solicitar feedback
- [x] Testing
- [x] HotFixing
- [x] Deploy sprint
------
### Sprint segunda semana
#### Lunes
- [x] Implementar en frontend la eliminación de items y colecciones
- [x] Implementar funcionalidad cálculo de progreso de vida útil
- [x] Implementar recuento de items en la vista de colecciones
- [x] API server: creación de colecciones
- [x] API client: creación de colecciones
#### Martes
- [x] TDD creación y eliminación de colecciones
- [x] Implementar en frontend la creación de colecciones
- [x] API server: creación items
#### Miércoles
- [ ] API client: creación items
- [ ] TDD creación y eliminación de items
#### Jueves
- [ ] Implementar en frontend la creación de items
- [ ] Solicitar feedback
#### Viernes
- [ ] Testing
- [ ] HotFixing
- [ ] Revisar la documentación del proyecto
- [ ] Deploy sprint
------
### Sprint tercera semana
#### Lunes
- [ ] Implementar el datepicker en frontend
#### Martes
- [ ] API server: sistema de login
- [ ] API client: sistema de login
- [ ] TDD sistema de login
#### Miércoles
- [ ] Implementar sistema de login y logout en frontend
- [ ] Testing
- [ ] HotFixing
- [ ] Revisar la documentación del proyecto
#### Jueves
- [ ] Deploy sprint
- [ ] Preparar la presentación del proyecto
#### Viernes
- [ ] Presentación del proyecto
------
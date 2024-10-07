# [en] hands-on in history product development using users roles (as epic component).
using data-driven, we will construct all sub-sequent workflows for application; to archive this goal, we will need some tables and attributes necessary to work and understand the users life cycle using programs from differente internal domains why work together in the bussiness capacity.

- tables:
"user": {userPK, username, password}
"role": {rolePK, name, description}
"domain": {domainPK, name, description}
"permission": {permissionPK, domainFK, roleFK, userFK}  
"history": {historyPK, permissionFK, datetime}


with this tables implementation, we can archive an facade authentificantion to all sub applications in the bussiness capacity.


**author:** ejpg



# [pt] na prática em desenvolvimento de história de produto usando permissões de usuário (como componente épico).
usando data-drive, nós vamos construir todos os sub-sequentes fluxos de trabalho para aplicações; para alcançar está meta precisaremos de algumas tabelas e atributos necessários para trabalhar e entender o ciclo de vida de usuários utilizando programas de diferentes domínios internos que trabalham juntos na capacidade de negócio.


- tabelas:
"usuario": {usuarioPK, nome_de_usuario, senha}
"regra": {regraPK, nome, descricao}
"dominio": {dominioPK, nome, descricao}
"permissao": {permissaoPK, dominioFK, regraFK, usuarioFK}
"historia": {historiaPK, permissaoFK, data_hora}


com a implementação destas tabelas, nós concluímos um facade de autentificação para todas sub-aplicações na capacidade de negócios.


**autor:** ejpg


# Cours de NodeJS

### Voici les démarches à suivre pour tester chez vous
>
- Cloner le dépôt en faisant `git clone https://github.com/tamsirgueye/BackendCourseProject2`
- Aller dans le dossier du projet avec votre terminal
- Faites `npm install` afin d'installer les dépendances
- `npm start` pour lancer le serveur
>
### Assistance
```json
{
  "code": "ER_NOT_SUPPORTED_AUTH_MODE",
  "errno": 1251,
  "sqlMessage": "Client does not support authentication protocol requested by server; consider upgrading MySQL client",
  "sqlState": "08004",
  "fatal": true
}
```
> Si vous avez l'erreur ci-dessus c'est que vous utiliser `mysql8` comme serveur de base de données. Vous devez la corriger en faisant l'une des actions suivantes
>- Utiliser mysql5 comme serveur de base de données.
>- Ou remplacer le package mysql par mysql2 en exécutant cette commande `npm un mysql && npm i mysql2` dans le dossier du projet.
>
> Pour plus de détails jetez un coup d'oeil [ici](https://stackoverflow.com/a/56509065)

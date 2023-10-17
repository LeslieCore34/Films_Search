# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Voici un aperçu du flux de travail de ce projet :

L'application frontend, créée en React, permet aux utilisateurs de saisir des termes de recherche de films.

L'application frontend envoie des requêtes de recherche au backend Express via des points d'accès API.

Le backend Express gère les requêtes de recherche et utilise l'API TMDb pour obtenir des informations sur les films correspondants.

Le backend stocke les données des films dans la base de données MySQL pour éviter de faire des requêtes répétées à l'API externe.

L'application frontend reçoit les résultats de recherche du backend et les affiche à l'utilisateur.

Les utilisateurs peuvent cliquer sur un film pour afficher plus de détails, attribuer des notations et écrire des commentaires. Ces données sont stockées dans la base de données MySQL via le backend.

Les notations et les commentaires des utilisateurs sont associés aux films et mis à jour en temps réel dans l'application frontend.

Les utilisateurs peuvent également créer un compte et se connecter, et ces informations d'utilisateur sont également stockées dans la base de données MySQL.

Ce projet combine des compétences en développement frontend avec React, en développement backend avec Express, en gestion de bases de données MySQL, et en intégration d'API REST pour créer une application de recherche et de notation de films complète.






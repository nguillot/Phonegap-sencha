# Introduction

Squelette de projet android / phonegap / sencha avec intellj.

# Préparation pour l'utilisation du sous module

 * Suppression des fichiers sous assets/www
 * git commit, et push
 * associer le projet web au projet android via un sous module git (il est aussi possible de passer par les SVN externals si vous utilisez svn):

`$ git submodule add https://github.com/nguillot/Phonegap-sencha-www.git assets/www`

 * effectué un git commit pour enregistrer le sous module dans votre repository local
 * pour mettre à jour votre sous module ou commiter des changement vous devez vous mettre dans le répertoire assets/www et lancer les commandes adéquates (add / rm / push / pull).


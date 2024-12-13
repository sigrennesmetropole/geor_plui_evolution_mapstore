
# Plugin PLUi Evolution Frontend

**PLUI-Evolution** est un plugin MapStore développé en **React** pour fournir des fonctionnalités avancées de visualisation et de gestion de données géospatiales. Ce plugin est conçu pour s'intégrer dans l'application MapStore et offrir des outils spécifiques pour l'évolution des Plans Locaux d'Urbanisme Intercommunaux (PLUI).

## Installation

Une installation de NodeJS  >=  12.16.1 est prérequise  ([téléchargement](https://nodejs.org/en/download/releases/)).

- Réaliser un clone du dépôt avec l'option  `--recursive` afin de récupérer les sous-modules :
```bash  
git clone --recursive https://github.com/sigrennesmetropole/geor_plui_evolution_mapstore````  
  
- 1er démarrage  
  
Pour les développements et les tests  :  
  
Exécuter les commandes suivantes :  
  
```bash  
 cd plui-evolution-front        rm -rf nodes_*   
        rm package-*   
        git submodule update   
        npm install   
        npm start  
````  

### Build Extension

```bash  
 npm run ext:build  
````  

L'extension ne peut être importée dans MapStore2 en l'état.  Le bundler Webpack doit être utilisé ensuite pour builder l'extension vers une fichier ZIP avec le nom du plugin  (ex:  PluiEvolutionExtension.zip).

Les ressources en sortie et le ZIP seront disponibles dans le répertoire  `/dist` à la racine du dépôt.

### Pour aller plus loin sur les plugins MapStore2

Rendez-vous sur le dépôt initial  [MapStore Extensions](https://mapstore.readthedocs.io/en/latest/developer-guide/extensions/)  pour plus de précisions.

Ce projet utilise **MapStore** comme application de base. Assurez-vous d’avoir configuré votre instance de MapStore avant d’ajouter le plugin.


## Configuration

Dans l'application MapStore, ajoutez le plugin PLUI-Evolution dans la configuration des plugins pour qu'il soit reconnu et chargé correctement. Voici le contenu du fichier de configuration JSON :

````json  
{
  "cfg": {
    "debugPluiEvolution": false,
    "openAuto": true
  },
  "override": {}
}  
````  

Vous pouvez également configurer des options spécifiques pour ajuster les fonctionnalités du plugin selon vos besoins.  
L'option **openAuto** permet par exemple l'activation par défaut du module dans les contextes mapstore.

## Version

Le numéro de version du front qui s'affiche est celui qui est configuré manuellement dans le fichier pom.xml

## Licence

Ce projet est sous licence GNU. Veuillez consulter le fichier LICENSE pour plus de détails.
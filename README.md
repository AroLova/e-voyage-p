# Laravel Next e-voyage

Platefore de recherche en ligne pour le voyageur 

## Avant tout & Installation

Avant d'utiliser et modiffier cette projet , assurez-vous de bien installer au moins: 
Backend:  PHP: 8.* et Composer

- PHP ([PHP](https://www.php.net))
- Composer ([Composer](https://getcomposer.org)) 
- Laravel ([Laravel](https://laravel.com))

Frontend: Node 20.* 

- PHP ([Next js](https://nextjs.org))
- Composer ([Node](https://nodejs.org)) 

Apres clonner cette projet, voila le manup pour l'installation

# To install PHP dependance:
Ouvrir une terminale au dossier e-voyage-b et lancer tou le commande suivant

```bash
composer install
```
Changer le nom de votre base sde donner
Apres : 
```bash
php artisan migrate   
php artisan db:seed --class=ProvinceSeeder 
php artisan db:seed --class=RegionSeeder   
php artisan db:seed --class=DistrictsSeeder
```
Pour lancer: 
```bash
php artisan serve   
```
# Pour  install node dependance:
Ouvrir une terminale au dossier e-voyage-f et lancer tou le commande suivant
```bash
npm install
```

Pour lancer: 
```bash
npm run dev
```

Bonne continuation a vous !!!
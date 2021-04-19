#	Deploy

COMPOSER_MEMORY_LIMIT=-1 composer require 

rm -rf var/*; rm -rf pub/static/*; rm -rf generated/*;

php bin/magento s:s:d -f; chmod -R 777 var/*;chmod -R 777 pub/static/*;chmod -R 777 generated/*; php bin/magento c:c;

php -d memory_limit=6G bin/magento s:s:d -f;chmod -R 777 var/;chmod -R 777 pub/static/;chmod -R 777 generated/*; php bin/magento c:c;

php bin/magento setup:static-content:deploy nl_NL en_US fr_FR -f

chmod -R 777 var/*;chmod -R 777 pub/static/*;chmod -R 777 generated/*;


# Server 73
IP: 125.212.229.17
Port: 2222
Tk User: aht_g3/AHT@#g3$2021
Tk Root: root/AHT@123456

# Server 72
72.arrowhitech.net
Port: 22222 <br>
aht_g3 | @htG3678 <br>
apache | @htadmin2016

# Upgrade version magento
COMPOSER_MEMORY_LIMIT=-1 composer require magento/product-community-edition=2.4.2 --no-update;
COMPOSER_MEMORY_LIMIT=-1 composer update

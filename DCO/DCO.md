#	Deploy

rm -rf var/*; rm -rf pub/static/*; rm -rf generated/*;

php bin/magento setup:static-content:deploy -f; chmod -R 777 var/*;chmod -R 777 pub/static/*;chmod -R 777 generated/*; php bin/magento cache:clean;

php -d memory_limit=6G bin/magento setup:static-content:deploy -f;chmod -R 777 var/;chmod -R 777 pub/static/;chmod -R 777 generated/*; php bin/magento cache:clean;

chmod -R 777 var/*;chmod -R 777 pub/static/*;chmod -R 777 generated/*;


# Server 73
IP: 125.212.229.17
Port: 2222
Tk User: aht_g3/AHT@#g3$2021
Tk Root: root/AHT@123456

# Server 72
72.arrowhitech.net
Port: 22222
aht_g3 | @htG3678


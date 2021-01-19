#	Deploy

rm -rf var/*; rm -rf pub/static/*; rm -rf generated/*;

php bin/magento setup:static-content:deploy -f; chmod -R 777 var/*;chmod -R 777 pub/static/*;chmod -R 777 generated/*; php bin/magento cache:clean;

php -d memory_limit=6G bin/magento setup:static-content:deploy -f;chmod -R 777 var/;chmod -R 777 pub/static/;chmod -R 777 generated/*; php bin/magento cache:clean;

chmod -R 777 var/*;chmod -R 777 pub/static/*;chmod -R 777 generated/*;

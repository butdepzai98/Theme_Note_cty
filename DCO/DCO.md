#	Deploy

COMPOSER_MEMORY_LIMIT=-1 composer require 

rm -rf var/*; rm -rf pub/static/*; rm -rf generated/*;

php bin/magento s:s:d -f; chmod -R 777 var/*;chmod -R 777 pub/static/*;chmod -R 777 generated/*; php bin/magento c:c;

php -d memory_limit=6G bin/magento s:s:d -f;chmod -R 777 var/;chmod -R 777 pub/static/;chmod -R 777 generated/*; php bin/magento c:c;

php bin/magento s:s:d nl_NL en_US fr_FR -f

chmod -R 777 var/*;chmod -R 777 pub/static/*;chmod -R 777 generated/*;

# Server 74
172.16.0.40 
g3/@htG3678
apache/@htadmin2016

# Server 73
IP: 125.212.229.33
Port: 8022
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


# Khi làm style, chỉ đc dùng các khoảng @media sau:
Min: 576px, 768px, 992px, 1200px
Max: 374.98px, 575.98px, 767.98px, 991.98px, 1199.98px


# DCO
User name                                       <br>
codecommit-at-012924156835                      <br>
Password                                        <br>
DSa59gV6LFxRP4xxxQrFM28Tv1Xbp2a+/yBLPkycFq0=    <br>
                                                <br>
git clone https://git-codecommit.ap-southeast-2.amazonaws.com/v1/repos/chemistoutlet-m2 dco

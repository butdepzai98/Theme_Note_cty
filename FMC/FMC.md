#	Deploy
rm -rf var/*;rm -rf pub/static/*;rm -rf generated/*;

php bin/magento s:s:d -f && php bin/magento c:c

#	Git
git clone git@bitbucket.org:convert/fit-my-car.git -b develop --single-branch

# Project info

Git: git clone git@bitbucket.org:convert/fit-my-car.git
Database: fitmycar.sql
Dev site AHT:

Dev site CD:
frontend: https://fitmycar.convert.build/
htaccess: convertdigital/cdigital19
backend: https://fitmycar.convert.build/admin
admin: admindev/admin123
Jira CD:
Url: https://convertdigital.atlassian.net/issues/?filter=-1&jql=project%20%3D%20FMC0001%20AND%20resolution%20%3D%20Unresolved%20AND%20assignee%20in%20(currentUser())%20ORDER%20BY%20due%20ASC%2C%20updated%20DESC
Acc: congnc@arrowhitech.com/congnc123

Design:
https://projects.invisionapp.com/d/main?origin=v7#/projects/prototypes/20201272
Acc: justin.convertdigital@gmail.com/congnc123

Chú ý:
Làm trên branch develop
Làm theo đúng chuẩn theme, chuẩn code
Chuẩn style: https://www.dropbox.com/s/zya7f811b0pw1ls/Lam%20theme%20dung%20chuan.zip?dl=0
Tất cả content trên admin đều sử dụng page builder
Tuân theo đúng các yc của dự án trên các task tổng quan sau:
https://convertdigital.atlassian.net/browse/FMC0001-70
https://convertdigital.atlassian.net/browse/FMC0001-77
FMC0001 - Frontend Brief.pdf

Tuân thủ đúng quy trình pull push, plan time, log time
===========================================
Chú ý khi push code:
Text commit = mã task CD + task title

Ví dụ task: http://pm.arrowhitech.net:8080/browse/TW-41
=> text commit: TW-153 visit desktop initial development
===========================================
Bill time: Yêu cầu update hàng ngày
https://docs.google.com/spreadsheets/d/10uGctoNNI7c907DY6YqNYFCHYfuUEA8pl9tQj1GDoTs/edit?usp=sharing
Date: Để đúng định dạng mm/dd/yyy
Nếu 1 task nhiều người làm thì chỉ note task1 dòng, ai làm gì thì cmt sang cột* Comments* với nội dung: ngày tháng, làm gì, bao nhiêu time sau đó cộng thêm time vào Bill or Not Bill (nếu là fix bug)

Note: Làm ngày nào note time ngay ngày đó

===========================================
Khi làm style, chỉ đc dùng các khoảng @media sau:
Min: 576px, 768px, 992px, 1200px
Max: 575.98px, 767.98px, 991.98px, 1199.98px

nếu cần dùng khoảng khác thì phải báo với PM, PM xác nhân mới được dùng

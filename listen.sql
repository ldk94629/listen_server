SET NAMES UTF8;
DROP DATABASE IF EXISTS listen;
CREATE DATABASE listen CHARSET=UTF8;
USE listen;
/** 耳机分类**/
CREATE TABLE listen_laptop_family(
  fid INT PRIMARY KEY AUTO_INCREMENT,
  fname VARCHAR(32)
);
/**类别**/
INSERT INTO listen_laptop_family VALUES
(NULL,'无线耳机'),
(NULL,'颈挂式'),
(NULL,'入耳式'),
(NULL,'双动圈'),
(NULL,'蓝牙耳机'),
(NULL,'复刻版'),
(NULL,'头戴式'),
(NULL,'迷你万魔熊');
/** 耳机**/
CREATE TABLE listen_laptop(
  lid INT PRIMARY KEY AUTO_INCREMENT,
  lpid  int,       #所属分类
  title VARCHAR(128),         #主标题
  price DECIMAL(10,2) ,     #价格
  pic  VARCHAR(128), #图片地址
  xl INT,#销量
  PJ INT,#评价
  JF INT #积分

);
INSERT INTO listen_laptop VALUES
(null,1,'1MORE Stylish 时尚真无线耳机-I（黑)',499, '../image/goods/1-1.jpg',1000,1000,20
),
(null,1,'1MORE Stylish 时尚真无线耳机-I（绿)',499, '../image/goods/1-2.jpg',2000,1000,20
),
(null,1,'1MORE Stylish 时尚真无线耳机-I（粉)',499, '../image/goods/1-3.jpg',3000,1000,20
),
(null,1,'1MORE Stylish 时尚真无线耳机-I（金)',499, '../image/goods/1-4.jpg',4000,1000,20
),
(null,2,'1MORE 高清降噪圈铁蓝牙耳机',799, '../image/goods/2-1.jpg',1000,5000,20
),
(null,2,'1MORE 三单元圈铁蓝牙耳机',799, '../image/goods/2-2.jpg',1000,6000,20
),
(null,3,'1MORE好声音入耳式耳机 （金色）',129, '../image/goods/3-1.jpg',1000,7000,20
),
(null,3,'1MORE好声音入耳式耳机',129, '../image/goods/3-2.jpg',5000,1000,20
),
(null,3,'1MORE活塞耳机风尚版(银)',129, '../image/goods/3-3.jpg',1000,2000,20
),
(null,3,'1MORE活塞耳机风尚版(灰)',129, '../image/goods/3-4.jpg',3000,1000,20
),
(null,3,'1MORE活塞耳机风尚版(蓝)',129, '../image/goods/3-5.jpg',1000,5000,20
),
(null,4,'1MORE Stylish 双动圈入耳式耳机（绿）',169, '../image/goods/4-1.jpg',1000,1000,40
),
(null,4,'1MORE Stylish 双动圈入耳式耳机（绿）',169, '../image/goods/4-2.jpg',5000,1000,20
),
(null,4,'1MORE Stylish 双动圈入耳式耳机（绿）',169, '../image/goods/4-3.jpg',1000,3000,20
),
(null,4,'1MORE Stylish 双动圈入耳式耳机（绿）',169, '../image/goods/4-4.jpg',2000,1000,20
),
(null,5,'1MORE iBFree Sport 智能蓝牙耳机（黑）',299, '../image/goods/5-1.jpg',1050,1030,20
),
(null,5,'1MORE蓝牙耳机（红）',399, '../image/goods/5-2.jpg',1050,1000,40
),
(null,5,'1MORE蓝牙耳机（黑）',399, '../image/goods/5-3.jpg',1500,1000,20
),
(null,5,'1MORE iBFree Sport 智能蓝牙耳机（红）',299, '../image/goods/5-4.jpg',1000,4000,20
),
(null,6,'1MORE入耳式耳机活塞复刻版(丝箔金）',169, '../image/goods/6-1.jpg',1300,1000,20
),
(null,6,'1MORE入耳式耳机活塞复刻版(深空灰）',169, '../image/goods/6-2.jpg',1000,1500,20
),
(null,6,'1MORE入耳式耳机活塞复刻版(玫瑰金）',169, '../image/goods/6-3.jpg',1020,1000,20
),
(null,7,'1MORE Spearhead VR 电竞耳机经典款',699, '../image/goods/7-1.jpg',1300,1000,20
),
(null,7,'1MORE头戴式耳机',299, '../image/goods/7-2.jpg',1000,1020,20
),
(null,7,'1MORE三单元头戴式耳机',1299, '../image/goods/7-3.jpg',1000,1100,20
),
(null,8,'迷你万魔熊（黑）',49, '../image/goods/8-1.jpg',1000,1020,20
),
(null,8,'迷你万魔熊（红）',49, '../image/goods/8-2.jpg',1000,1040,20
),
(null,8,'迷你万魔熊',49, '../image/goods/8-3.jpg',1000,1030,20
);

CREATE TABLE listen_laptop_pic(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  laptop_id INT,              #耳机
  laptop_img  VARCHAR(128)
);
INSERT INTO listen_laptop_pic VALUES(
NULL, 1, '../image/goods/1-1.jpg'
),
(NULL, 1, '../image/goods/1-2.jpg'
),
(NULL, 1, '../image/goods/1-3.jpg'
),
(NULL, 1, '../image/goods/1-4.jpg'
),
(NULL, 2, '../image/goods/2-1.jpg'
),
(NULL, 2, '../image/goods/2-2.jpg'
),
(NULL, 3, '../image/goods/3-1.jpg'
),
(NULL, 3, '../image/goods/3-2.jpg'
),
(NULL, 3, '../image/goods/3-3.jpg'
),
(NULL, 3, '../image/goods/3-4.jpg'
),
(NULL, 3, '../image/goods/3-5.jpg'
),
(NULL, 4, '../image/goods/4-1.jpg'
),
(NULL, 4, '../image/goods/4-2.jpg'
),
(NULL, 4, '../image/goods/4-3.jpg'
),
(NULL, 4, '../image/goods/4-4.jpg'
),
(NULL, 5, '../image/goods/5-1.jpg'
),
(NULL, 5, '../image/goods/5-2.jpg'
),
(NULL, 5, '../image/goods/5-3.jpg'
),
(NULL, 5, '../image/goods/5-4.jpg'
),
(NULL, 6, '../image/goods/6-1.jpg'
),
(NULL, 6, '../image/goods/6-2.jpg'
),
(NULL, 7, '../image/goods/7-1.jpg'
),
(NULL, 7, '../image/goods/7-2.jpg'
),
(NULL, 7, '../image/goods/7-3.jpg'
),
(NULL, 8, '../image/goods/8-1.jpg'
),
(NULL, 8, '../image/goods/8-2.jpg'
),
(NULL, 8, '../image/goods/8-3.jpg'
);
/**用户信息**/
CREATE TABLE listen_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  phone VARCHAR(16),
 email   VARCHAR(32)
);
INSERT INTO listen_user VALUES(
null,'abcdjj','a1234567','13135529495','a1251104161@163.com'
);
CREATE TABLE listen_receiver_address(
  aid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,                #用户编号
  receiver VARCHAR(16),       #接收人姓名
  province VARCHAR(16),       #省
  city VARCHAR(16),           #市
  county VARCHAR(16),         #县
  address VARCHAR(128),       #详细地址
  cellphone VARCHAR(16),      #手机
  fixedphone VARCHAR(16),     #固定电话
  postcode CHAR(6)          #邮编
);
CREATE TABLE listen_shoppingcart_item(
  iid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,      #用户编号
  product_id INT,   #商品编号
  count INT,        #购买数量
  url_img  VARCHAR(128),
  v_title   VARCHAR(128),
  is_checked  BOOL DEFAULT 1,
  v_price VARCHAR(64)
);






CREATE TABLE listen_index_carousel(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(128),
  href VARCHAR(128)
);
/**商品的介绍**/
CREATE TABLE listen_lop_details(
	did      INT PRIMARY KEY AUTO_INCREMENT,
	ldid    int ,        #商品类型
	dimg1  VARCHAR(128),
	dimg2  VARCHAR(128),
	dimg3  VARCHAR(128),
	dimg4  VARCHAR(128),
	dimg5  VARCHAR(128)	
);
INSERT INTO listen_lop_details VALUES
(
NULL, 1 ,'../image/details/1-1.jpg','../image/details/1-2.jpg','../image/details/1-3.jpg','../image/details/1-4.jpg','../image/details/1-5.jpg'
),
(
NULL, 2 ,'../image/details/2-1.jpg','../image/details/2-2.jpg','../image/details/2-3.jpg','../image/details/2-4.jpg','../image/details/2-5.jpg'
),
(
NULL, 3 ,'../image/details/3-1.jpg','../image/details/3-2.jpg','../image/details/3-3.jpg','../image/details/3-4.jpg','../image/details/3-5.jpg'
),
(
NULL, 4 ,'../image/details/4-1.jpg','../image/details/4-2.jpg','../image/details/4-3.jpg','../image/details/4-4.jpg','../image/details/4-5.jpg'
),
(
NULL, 5 ,'../image/details/5-1.jpg','../image/details/5-2.jpg','../image/details/5-3.jpg','../image/details/5-4.jpg','../image/details/5-5.jpg'
),
(
NULL, 6 ,'../image/details/6-1.jpg','../image/details/6-2.jpg','../image/details/6-3.jpg','../image/details/6-4.jpg','../image/details/6-5.jpg'
),
(
NULL, 7 ,'../image/details/1-1.jpg','../image/details/7-2.jpg','../image/details/7-3.jpg','../image/details/7-4.jpg','../image/details/7-5.jpg'
),
(
NULL, 8 ,'../image/details/1-1.jpg','../image/details/8-2.jpg','../image/details/8-3.jpg','../image/details/8-4.jpg','../image/details/8-5.jpg'
);

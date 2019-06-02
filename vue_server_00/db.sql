#db.sql 数据库脚本文件
USE xz;
CREATE TABLE t_login(
 id INT PRIMARY KEY AUTO_INCREMENT,
 uname VARCHAR(25),
 upass VARCHAR(32)
);
INSERT INTO t_login VALUES(null,'tom',md5('123'));
INSERT INTO t_login VALUES(null,'jerry',md5('123'));

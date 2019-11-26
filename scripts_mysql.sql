CREATE TABLE `book` (
    `id` int NOT NULL AUTO_INCREMENT COMMENT 'Id',
    `name` varchar(100) NULL COMMENT 'Name',
    `price` int NULL DEFAULT 0 COMMENT 'Price',
    `brief` varchar(100) NULL COMMENT 'Brief',
    `single_tag` int NULL DEFAULT 0 COMMENT 'SingleTag',
    `multi_tag` varchar(100) NULL COMMENT 'MultiTag',
    `single_status` int NULL DEFAULT 0 COMMENT 'SingleStatus',
    `multi_status` varchar(100) NULL COMMENT 'MultiStatus',
    `single_color` varchar(100) NULL COMMENT 'SingleColor',
    `multi_color` varchar(100) NULL COMMENT 'MultiColor',
    `single_category` int NULL DEFAULT 0 COMMENT 'SingleCategory',
    `multi_category` varchar(100) NULL COMMENT 'MultiCategory',
    `single_pattern` varchar(100) NULL COMMENT 'SinglePattern',
    `multi_pattern` varchar(100) NULL COMMENT 'MultiPattern',
    `data_status` int NULL DEFAULT 0 COMMENT 'DataStatus',
    `create_time` datetime NULL COMMENT 'CreateTime',
    `last_update_time` datetime NULL COMMENT 'LastUpdateTime',
  PRIMARY KEY (`id`)
) DEFAULT CHARSET=utf8mb4 COMMENT='Book';

CREATE TABLE `tag` (
    `id` int NOT NULL AUTO_INCREMENT COMMENT 'Id',
    `name` varchar(100) NULL COMMENT 'Name',
    `data_status` int NULL DEFAULT 0 COMMENT 'DataStatus',
    `create_time` datetime NULL COMMENT 'CreateTime',
    `last_update_time` datetime NULL COMMENT 'LastUpdateTime',
  PRIMARY KEY (`id`)
) DEFAULT CHARSET=utf8mb4 COMMENT='Tag';

CREATE TABLE `category` (
    `id` int NOT NULL AUTO_INCREMENT COMMENT 'Id',
    `category_id` int NULL DEFAULT 0 COMMENT 'CategoryId',
    `category_name` varchar(100) NULL COMMENT 'CategoryName',
    `data_status` int NULL DEFAULT 0 COMMENT 'DataStatus',
    `create_time` datetime NULL COMMENT 'CreateTime',
    `last_update_time` datetime NULL COMMENT 'LastUpdateTime',
  PRIMARY KEY (`id`)
) DEFAULT CHARSET=utf8mb4 COMMENT='Category';

CREATE TABLE `pattern` (
    `id` int NOT NULL AUTO_INCREMENT COMMENT 'Id',
    `pattern_id` varchar(100) NULL COMMENT 'PatternId',
    `pattern_name` varchar(100) NULL COMMENT 'PatternName',
    `data_status` int NULL DEFAULT 0 COMMENT 'DataStatus',
    `create_time` datetime NULL COMMENT 'CreateTime',
    `last_update_time` datetime NULL COMMENT 'LastUpdateTime',
  PRIMARY KEY (`id`)
) DEFAULT CHARSET=utf8mb4 COMMENT='Pattern';


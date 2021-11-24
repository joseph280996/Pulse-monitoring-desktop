CREATE TABLE PulseType (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) DEFAULT NULL,
  features VARCHAR(255) DEFAULT NULL,
  chineseName VARCHAR(255) CHARACTER SET 'gbk' COLLATE 'gbk_chinese_ci' DEFAULT NULL
);

INSERT INTO PulseType(name, chineseName, features) VALUES ('Fu Mai','浮脉', 'Floating, Superficial'),('Chen Mai','沉脉', 'Deep'),('Chi Mai','迟脉', 'Slow'),('Shuo Mai','数脉', 'Rapid'),('Hua Mai','滑脉','Slippery, Rolling'),('Se Mai','涩脉','Choppy, Hesitant'),('Xu Mai','虚脉','Forceless, Empty, Deficient'),('Shi Mai','实脉','Excess, Full, Replete, Forceful'),('Chang Mai','长脉','Long'),('Duan Mai','短脉', 'Short'),('Hong Mai','洪脉','Surging, Flooding'),('Wei Mai','微脉','Minute, Faint, Indistinct'),('Jin Mai','紧脉','Tight, Tense'),('Huan Mai','缓脉', 'Slowed down, Moderate, or Relaxed'),('Kou Mai','芤脉', 'Hollow or Scallion Stalk, Green Onion'),('Xian Mai','弦脉', 'Wiry, Taut'),('Ge Mai','革脉', 'Leathery, Drumskin, Tympanic, Hard'),('Lao Mai','牢脉', 'Firm, Confined'),('Ru Mai','濡脉', 'Soft or Soggy'),('Ruo Mai','弱脉','Weak'),('San Mai','散脉', 'Scattered'),('Xi Mai','细脉','Thready, Thin'),('Fu Mai','伏脉','Hidden'),('Dong Mai','动脉', 'Moving, Throbbing, Stirring'),('Cu Mai','促脉','Rapid-Irregular, Skipping, Abrupt'),('Jie Mai','结脉','Knotted, Bound'),('Dai Mai','代脉','Regularly Intermittent'),('Jin Mia','紧脉','Tight, Tense'),('Ji Mai','急脉','Racing, Swift, Hurried'),('Da Mai','大脉','Large, Big');

INSERT INTO users (name, email, password)
VALUES
  ('test', 'test@test.com', 'test'),
  ('Nhan Tran','nhan@nhan.com','nhan'),
  ('Hongseoup Yun','hongseoup@hongseoup.com','hongseoup'),
  ('Harsimran','harsimran@harsimran.com','harsimran'),
  ('Harper Myers','erat.eget@yahoo.edu','Cnz7'),
  ('Yara Frank','sem@hotmail.edu','Hlz2');


INSERT INTO listings (user_id, name, description, brand, size, image_url, preference, active)
VALUES
  (1,'Test shoes 1','test', 'vans', 4 , 'https://i.imgur.com/5zSnioJb.jpg' , 'some other fancy shoes pls', FALSE),
  (2,'Test shoes 2','nhan', 'adidas yeezy', 5 , 'https://i.imgur.com/iqKDft8b.jpg', 'some other fancy shoes pls', FALSE),
  (3,'New balances 990 Grey','New balnce 990 Grey color, Gently used', 'new balance',9, 'https://i.pinimg.com/originals/c3/c7/84/c3c7844c9e8b1990753809a5f8c99943.jpg' , 'Jordans and Dunks', TRUE),
  (3,'New balances 990 Grey','New balnce 990 Grey color, Gently used', 'new balance',9, 'https://i.pinimg.com/originals/c3/c7/84/c3c7844c9e8b1990753809a5f8c99943.jpg' , 'Jordans and Dunks', TRUE),
  (4,'Test shoes 2','harsimran', 'nike air force', 7 , 'https://i.imgur.com/ISBvrFJb.jpg', 'some other fancy shoes pls', TRUE),
  (2,'Test shoes 2','Cnz7', 'nike dunks', 8 , 'https://i.imgur.com/Vquj6Jhb.jpg', 'some other fancy shoes pls', TRUE),
  (1,'Test shoes 2','test','adidas yeezy', 10 , 'https://i.imgur.com/rg7Ghb.jpg',  'some other fancy shoes pls', TRUE),
  (2,'Test shoes 2','nhan', 'others', 11 , 'https://i.imgur.com/OVhQ3hlb.jpg', 'some other fancy shoes pls', TRUE),
  (4,'Test shoes 2','harsimran', 'air jordan', 10 , 'https://i.imgur.com/H5pMsuXb.jpg', 'some other fancy shoes pls', TRUE),
  (2,'Test shoes 2','Cnz7', 'others', 11 , 'https://i.imgur.com/9k8MWCfb.jpg', 'some other fancy shoes pls', TRUE);

INSERT INTO offers (listing_offer_made_to_id, listing_being_offered_id, complete, pending)
VALUES
  (1,2, TRUE, FALSE),
  (3,4, FALSE, TRUE),
  (5,6, FALSE, TRUE),
  (7,8, FALSE, TRUE);

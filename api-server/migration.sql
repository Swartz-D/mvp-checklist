DROP TABLE IF EXISTS check_list;

CREATE TABLE check_list (
  cat varchar(25),
  task varchar(25),
  details varchar(250),
  allotted_time_min int, 
  date_time timestamp
);

INSERT INTO check_list (cat, task, details, allotted_time_min, date_time)
VALUES ('cleaning', 'vacuum', 'vacuum all rugs and carpets', 30, NULL),
('cleaning','dishes', 'load and start dishwasher', 60, NULL),
('cleaning','laundry', 'gather all clothing/bedding to be washed, wash/dry/fold', 90, NULL),
('appointment', 'doctor', 'apt at providence on 5th for annual physical', NULL, '2022-11-11 13:30:00.000');
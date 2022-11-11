DROP TABLE IF EXISTS check_list;

CREATE TABLE check_list (
  task varchar(25),
  details varchar(250),
  allotted_time_min int, 
  date_time timestamp
);

INSERT INTO check_list (task, details, allotted_time_min, date_time)
VALUES ('vacuum', 'vacuum all rugs and carpets', 30, NULL),
('dishes', 'load and start dishwasher', 60, NULL),
('laundry', 'gather all clothing/bedding to be washed, wash/dry/fold', 90, NULL),
('doctor', 'apt at providence on 5th for annual physical', NULL, '2022-11-11 13:30:00.000');
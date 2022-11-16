DROP TABLE IF EXISTS check_list;

CREATE TABLE check_list (
  id serial,
  cat varchar(25),
  task varchar(25),
  details varchar(250),
  allotted_time_min int
);

INSERT INTO check_list (cat, task, details, allotted_time_min)
VALUES ('cleaning', 'vacuum', 'vacuum all rugs and carpets', 30),
('cleaning','dishes', 'load and start dishwasher', 60),
('cleaning','laundry', 'gather all clothing/bedding to be washed, wash/dry/fold', 90),
('appointment', 'doctor', 'apt at providence on 5th for annual physical', NULL);
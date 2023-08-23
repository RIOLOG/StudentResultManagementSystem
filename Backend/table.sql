//nodeprojectdb

create table student(
    rollno int primary key,
    name varchar(250),
    DOB date
);

insert into student(rollno,name,DOB) values(1,'Ankit','2002-06-27');
insert into student(rollno,name,DOB) values(2,'Prakhar','2000-09-22');
insert into student(rollno,name,DOB) values(3,'Cosmic','2001-08-25');
insert into student(rollno,name,DOB) values(4,'Anant','2000-08-14');
insert into student(rollno,name,DOB) values(5,'Shashwat','2001-09-29');
insert into student(rollno,name,DOB) values(7,'Rio','2001-01-27');


create table student_Result(
    rollno int primary key,
    name varchar(250),
    DOB date,
    marks INT (10)
);


insert into student_Result(rollno,name,DOB,marks) values(1,'Ankit','2002-06-27',79);
insert into student_Result(rollno,name,DOB,marks) values(2,'Prakhar','2000-09-22',89);
insert into student_Result(rollno,name,DOB,marks) values(3,'Cosmic','2001-08-25',99);
insert into student_Result(rollno,name,DOB,marks) values(4,'Anant','2000-08-14',69);
insert into student_Result(rollno,name,DOB,marks) values(5,'Shashwat','2001-09-29',95);
insert into student_Result(rollno,name,DOB,marks) values(7,'Rio','2001-01-27',100);


create table admin(
    name varchar(250),
    email varchar(250)
);

insert into admin(name,email) values('admin1','admin1@gmail.com');
insert into admin(name,email) values('admin2','admin2@gmail.com');
insert into admin(name,email) values('admin3','admin3@gmail.com');

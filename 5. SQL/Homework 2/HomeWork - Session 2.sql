--------Kontrola na tabelite dali se popolnile---------
select *
from dbo.AchievementType

select *
from dbo.Course

select *
from Grade

select*
from GradeDetails

select * 
from Student
------------------------------------------------------------------------------------------------------------

/*
Homework requirement 1/6 
	*Find all Students with FirstName= Antonio
	*Find all Students with DateOfBirth greater than ‘01.01.1999’
	*Find all Male students
	*Find all Students with LastName starting With ‘T’
	*Find all Students Enrolled in January/1998
	*Find all Students with LastNamestarting With ‘J’ enrolled in January/1998 */


-- Find all Students with FirstName= Antonio 
SELECT *
FROM dbo.[Student]
Where FirstName = 'Antonio'
GO


-- Find all Students with DateOfBirth greater than ‘01.01.1999’
SELECT *
FROM dbo.[Student]
WHERE DateOfBirth > '01.01.1999'
GO


-- Find all Male students
SELECT *
FROM dbo.[Student]
WHERE Gender = 'M'
GO


-- Find all Students with LastName starting With ‘T’
SELECT *
FROM dbo.[Student]
WHERE LastName like 'T%'
GO


-- Find all Students Enrolled in January/1998
SELECT *
FROM dbo.[Student]
WHERE EnrolledDate >= '01.01.1999' AND EnrolledDate < '01.02.1199'   
GO   -- Izgledad so vo ovoj mesec nema EnrolledDate


-- Find all Students with LastNamestarting With ‘J’ enrolled in January/1998
SELECT *
FROM dbo.[Student]
WHERE LastName like 'J%' AND (EnrolledDate >= '01.01.1998' AND EnrolledDate < '01.02.1198'  )
GO    -- So J pocetna ima, no so toj datum nema


-- Extra from Anji
SELECT *
FROM dbo.[Student]
WHERE LastName like 'J%' OR (EnrolledDate >= '01.01.1998' AND EnrolledDate < '01.02.1198'  )
GO    -- Ako stavam OR lista barem edno
--------------------------------------------------------------------------------------------------------------


/*
Homework requirement 2/6
	*Find all Students with FirstName= Antonio ordered by Last Name
	*List all Students ordered by FirstName
	*Find all Male students ordered by EnrolledDate, starting from the last enrolled */


-- *Find all Students with FirstName = Antonio ordered by Last Name
SELECT *
FROM dbo.Student
WHERE FirstName = 'Antonio'
ORDER BY LastName
GO


-- *List all Students ordered by FirstName
SELECT *
FROM dbo.Student
ORDER BY FirstName
GO


-- *Find all Male students ordered by EnrolledDate, starting from the last enrolled
SELECT *
FROM dbo.Student
WHERE Gender = 'M'
ORDER BY EnrolledDate DESC
GO
-----------------------------------------------------------------------------------------------------
/*
Homework requirement 3/6
	*List all Teacher First Names and Student First Names in single result set with duplicates
	*List all Teacher Last Names and Student Last Names in single result set. Remove duplicates
	*List all common First Names for Teachers and Students */


-- *List all Teacher First Names and Student First Names in single result set with duplicates
SELECT FirstName
FROM dbo.Teacher 
UNION ALL
SELECT FirstName
FROM dbo.Student
GO


-- *List all Teacher Last Names and Student Last Names in single result set. Remove duplicates
SELECT LastName
FROM dbo.Teacher
UNION
SELECT LastName
FROM dbo.Student
GO


-- *List all common First Names for Teachers and Students
SELECT FirstName
FROM dbo.Teacher
INTERSECT
SELECT FirstName
FROM dbo.Student
GO


-- Extra Anji
SELECT FirstName
FROM dbo.Teacher
EXCEPT              -- vraka samo FirstName od dbo.Teacher no pod uslov tie iminja da gi nema vo Student
SELECT FirstName
FROM dbo.Student
GO
-----------------------------------------------------------------------------------------------------------------------



/*
Homework requirement 4/6
	*Change GradeDetails table always to insert value 100 in AchievementMaxPoints column if no value is provided on insert
	*Change GradeDetails table to prevent inserting AchievementPoints that will more than AchievementMaxPoints
	*Change AchievementType table to guarantee unique names across the Achievement types */



-- *Change GradeDetails table always to insert value 100 in AchievementMaxPoints column if no value is provided on insert
ALTER TABLE GradeDetails
ADD CONSTRAINT DF_GradeDetails_AchievementMaxPoints
DEFAULT 100 FOR [AchievementMaxPoints]
GO


-- *Change GradeDetails table to prevent inserting AchievementPoints that will more than AchievementMaxPoints
ALTER TABLE [dbo].[GradeDetails] WITH CHECK
ADD CONSTRAINT CHK_GradeDetails_AchievementMaxPoints
CHECK (AchievementPoints <= AchievementMaxPoints);
GO


-- *Change AchievementType table to guarantee unique names across the Achievement types
ALTER TABLE [dbo].[AchievementType] WITH CHECK
ADD CONSTRAINT UC_AchievementType_Name UNIQUE (Name)
GO


/*
Homework requirement 5/6
	*Create Foreign key constraints from diagram or with script */

ALTER TABLE [dbo].[AchievementType] WITH CHECK
ADD CONSTRAINT [FK_AchievementType_Course] 
FOREIGN KEY ([CourseId])
REFERENCES [dbo].[Course] ([Id])
GO

ALTER TABLE [dbo].[Grade] WITH CHECK
ADD CONSTRAINT [FK_Grade_Teacher]
FOREIGN KEY ([TeacherID])                
REFERENCES [dbo].[Teacher] ([ID])   
GO

ALTER TABLE [dbo].[Grade] WITH CHECK
ADD CONSTRAINT [FK_Grade_Student]
FOREIGN KEY (StudentID)
REFERENCES [dbo].[Student] ([ID])              
GO

ALTER TABLE [dbo].[Grade] WITH CHECK
ADD CONSTRAINT [FK_Grade_Course]
FOREIGN KEY (CourseID)
REFERENCES [dbo].[Course]([ID])
GO
-----------------------------------------------------------------------------------------------------------------

/*
Homework requirement 6/6
	*List all possible combinations of Courses names and AchievementType names that can be passed by student
	*List all Teachers that has any exam Grade ******* 1
	*List all Teachers without exam Grade
	*List all Students without exam Grade (using Right Join) */    *********2


-- *List all possible combinations of Courses names and AchievementType names that can be passed by student
SELECT Course.Name, AchievementType.Name
FROM [dbo].[Course]
CROSS JOIN [dbo].[AchievementType]
GO

/* SELECT c.Name, at.Name                      !!!PROBA
FROM [dbo].[Course] AS c
CROSS JOIN [dbo].[AchievementType] AS at
GO */ 

-- *List all Teachers that has any exam Grade
SELECT FirstName, AchievementPoints
FROM [dbo].[Teacher]
INNER JOIN [dbo].[GradeDetails]
ON Teacher.FirstName = GradeDetails.AchievementPoints;
GO

/*																--PROBA KOLKU DA VEZBAM
SELECT Teacher.FirstName, GradeDetails.AchievementPoints
FROM [dbo].[Teacher]
INNER JOIN [dbo].[GradeDetails]
ON Teacher.FirstName = GradeDetails.AchievementPoints
GO */


-- *List all Teachers without exam Grade
SELECT Teacher.FirstName, GradeDetails.AchievementPoints
FROM [dbo].[Teacher]
INNER JOIN [dbo].[GradeDetails]
ON Teacher.FirstName = GradeDetails.AchievementPoints
WHERE GradeDetails.AchievementPoints < 61                    -- ako imas <61 poen treba da si padnat i da nemas ocena
GO

--* List all Students without exam Grade (using Right Join)
SELECT Student.FirstName, GradeDetails.AchievementPoints
FROM [dbo].[Student]
LEFT JOIN dbo.GradeDetails
ON Student.FirstName = GradeDetails.AchievementPoints
WHERE GradeDetails.AchievementPoints < 61			        -- ako imas <61 poen treba da si padnat i da nemas ocena
GO


SELECT Student.FirstName, GradeDetails.AchievementPoints
FROM [dbo].[Student]
RIGHT JOIN dbo.GradeDetails
ON Student.FirstName = GradeDetails.AchievementPoints
WHERE GradeDetails.AchievementPoints < 61			        -- ako imas <61 poen treba da si padnat i da nemas ocena
GO

--Create database SEDCHome


CREATE TABLE dbo.Student
(
	ID int IDENTITY(1,1) NOT NULL,
	FirstName nvarchar (50) NOT NULL,
	LastName nvarchar (50) NOT NULL,
	DateOfBirth date NOT NULL,
	EnrolledDate datetime NOT NULL,
	Gender nchar (1) NOT NULL,
	NationalIDNumber int NOT NULL,
	SudentCardNumber int NOT NULL
	CONSTRAINT [PK_Student] PRIMARY KEY CLUSTERED
	(
		[ID] ASC
	)
)
GO


CREATE TABLE dbo.Teacher
(
	ID int IDENTITY(1,1) NOT NULL,
	FirstName nvarchar(50) NOT NULL, 
	LastName nvarchar(50) NOT NULL,
	DateOfBirth date NOT NULL,
	AcademicRank nvarchar(100) NOT NULL,
	HireDate date NOT NULL
	CONSTRAINT [PK_Teacher] PRIMARY KEY CLUSTERED
	(
		[ID] ASC
	)
)


CREATE TABLE dbo.GradeDetails
(
	ID int IDENTITY(1,1) NOT NULL,
	GradeID int NOT NULL,
	AchievementTypeID int NOT NULL,
	AchievementPoints int NOT NULL,
	AchievementMaxPoints int NOT NULL,
	AchievementDate date NOT NULL
	CONSTRAINT [PK_GradeDetails] PRIMARY KEY CLUSTERED
	(
		[ID] ASC
	)
)


CREATE TABLE dbo.Course
(
	ID int IDENTITY(1,1) NOT NULL,
	Name nvarchar(50) NOT NULL, 
	Credit int NOT NULL,   --VALJDA SE MISLI NA EKTS KREDITI
	AcademicYear char(9) NOT NULL,    --ex. 2020/2021
	Semester nvarchar NOT NULL
	CONSTRAINT [PK_Course] PRIMARY KEY CLUSTERED
	(
		[ID] ASC
	)
)


CREATE TABLE dbo.Grade
(
	ID int IDENTITY(1,1) NOT NULL,
	StudentID int NOT NULL,
	CourseID smallint NOT NULL,
	TeacherID smallint NOT NULL,
	Grade tinyint NOT NULL,
	Comment nvarchar NULL,
	CreatedDate datetime NOT NULL
	CONSTRAINT [PK_Grade] PRIMARY KEY CLUSTERED
	(
		[ID] ASC
	)
)


CREATE TABLE dbo.AchivementType
(
	ID int IDENTITY(1,1) NOT NULL,
	Name nvarchar(100) NOT NULL,
	Description nvarchar(200) NULL,
	ParticipationRate smallint NOT NULL
	CONSTRAINT [PK_AchivementType] PRIMARY KEY CLUSTERED
	(
		[ID] ASC
	)
)

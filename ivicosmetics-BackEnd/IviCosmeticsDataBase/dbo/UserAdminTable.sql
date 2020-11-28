CREATE TABLE [dbo].[UserAdminTable]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [UserID] INT NOT NULL, 
    [First Name] NVARCHAR(50) NOT NULL, 
    [Last Name] NVARCHAR(50) NOT NULL, 
    [Email] NVARCHAR(100) NOT NULL, 
    [Password] NVARCHAR(50) NOT NULL
)

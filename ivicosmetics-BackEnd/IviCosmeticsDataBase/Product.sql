CREATE TABLE [dbo].[Product]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [Name] NVARCHAR(50) NOT NULL, 
    [Description] NVARCHAR(MAX) NOT NULL, 
    [Price] FLOAT NOT NULL, 
    [ImageUrl] NVARCHAR(MAX) NOT NULL, 
    [Quantity] INT NOT NULL
)

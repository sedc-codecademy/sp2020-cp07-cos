CREATE TABLE [dbo].[Order]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [Status Type] NVARCHAR(50) NOT NULL, 
    [isPaid] NCHAR(10) NOT NULL, 
    [Date Of Order] DATETIME NOT NULL, 
    [Client ID] INT NOT NULL, 
    [Client] CHAR(10) NOT NULL
)

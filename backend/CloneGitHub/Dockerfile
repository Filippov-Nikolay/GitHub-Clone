FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy project files for solution relative layout
COPY ["CloneGitHub/CloneGitHub.csproj", "CloneGitHub/"]
COPY ["CloneGitHub.BLL/CloneGitHub.BLL.csproj", "CloneGitHub.BLL/"]
COPY ["CloneGitHub.DAL/CloneGitHub.DAL.csproj", "CloneGitHub.DAL/"]

RUN dotnet restore "CloneGitHub/CloneGitHub.csproj"

# Copy the rest of the source
COPY . .

WORKDIR "/src/CloneGitHub"
RUN dotnet publish "CloneGitHub.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=build /app/publish ./
ENV ASPNETCORE_URLS="http://+:80"
ENTRYPOINT ["dotnet", "CloneGitHub.dll"]

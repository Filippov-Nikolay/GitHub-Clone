FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["CloneGitHub.csproj", "./"]
RUN dotnet restore "./CloneGitHub.csproj"
COPY . .
WORKDIR "/src/"
RUN dotnet publish "CloneGitHub.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=build /app/publish ./
ENV ASPNETCORE_URLS="http://+:80;https://+:443"
ENTRYPOINT ["dotnet", "CloneGitHub.dll"]

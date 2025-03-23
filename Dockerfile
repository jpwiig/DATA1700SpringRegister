# Dockerfile for å gjøre det lettere å deploye prosjektet til en annen plattform
#MERK: DETTE ER VELDIG UTENFOR PENSUM, hvis dere lurer på noe om dockerfile, spør en studentassistent!

FROM jelastic/maven:3.9.5-openjdk-21 as BUILD
COPY . .
RUN mvn compile
RUN mvn package -Dmaven.test.skip


LABEL authors="jpwiig"

FROM bellsoft/liberica-openjre-alpine:21

COPY  --from=BUILD target/*.jar /register.jar

ENTRYPOINT ["java", "-jar","/register.jar"]
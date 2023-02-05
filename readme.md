<h1>CCNY Random User Generator</h1>
<br />
This package is meant to generate random students from random colleges across the U.S. Although it generates random colleges, the courses, clubs and majors are from City University of New York City College. 

<em>createRandomUser</em><br />
Generates a random User (Object) with the following attributes:
{
name: First and Last Name with space in between (String)
race: Race of the user (White, Black, Asian, API, Two or more Races Hispanic) (String)
email: Email of the user (String)
college: Random college from the U.S. (String)
clubs: Random list of 0-3 clubs from CCNY List[String]
interests: Random list of 1-7 interests List[String]
majors: Random list of 1-2 majors from CCNY List[String]
minors: Random list of 0-2 minors from CCNY List[String]
courses: random list of 3-6 courses from CCNY List[String]
gender: Random Gender (String)
sexualOrientation: Random Sexual Orientation (String)
gpa: Random GPA from 1.0 to 4.0 (Float)
year: Random year from 1 to 10 (Integer)
password: Password generated from first and last name (String)
}

<em>createNRandomUsers<em /><br />
Generates a list of Users (Object) (Of the form from above)
<h1>CCNY Random User Generator</h1>
<br />
This package is meant to generate random students from random colleges across the U.S. Although it generates random colleges, the courses, clubs and majors are from City University of New York City College. 
<br />
<strong><em>createRandomUser</em></strong><br />
    Generates a random User (Object) with the following attributes:
    {
    name: First and Last Name with space in between (String)<br/>
    race: Race of the user (White, Black, Asian, API, Two or more Races Hispanic) (String)<br/>
    email: Email of the user (String)<br/>
    college: Random college from the U.S. (String)<br/>
    clubs: Random list of 0-3 clubs from CCNY List[String]<br/>
    interests: Random list of 1-7 interests List[String]<br/>
    majors: Random list of 1-2 majors from CCNY List[String]<br/>
    minors: Random list of 0-2 minors from CCNY List[String]<br/>
    courses: random list of 3-6 courses from CCNY List[String]<br/>
    gender: Random Gender (String)<br/>
    sexualOrientation: Random Sexual Orientation (String)<br/>
    gpa: Random GPA from 1.0 to 4.0 (Float)<br/>
    year: Random year from 1 to 10 (Integer)<br/>
    password: Password generated from first and last name (String)<br/>
    }
<br /><br />
<strong><em>createNRandomUsers</em></strong><br />
Generates a list of Users (Object) (Of the form from above)
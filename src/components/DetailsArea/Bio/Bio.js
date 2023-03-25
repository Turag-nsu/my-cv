import React from 'react';
import { Typography, Divider } from '@mui/material';
import {
    Root,
    Name,
    Title,
    Experience,
    Education,
    Degree,
    School,
    Date,
    Address,
    SocialMedia,
    WhatsAppLink,
    FacebookLink,
    LinkedInLink,
    GitHubLink,
} from './BioMaker';

const bulkData = {
    name: 'Md. Abdullah Al Noman Turag',
    title: 'MERN Stack Developer and Problem solver',
    experience:
        'I have experience working with the MERN stack and have a strong desire to create dynamic, high-quality online apps. I can take on challenging computing problems and provide effective answers thanks to my problem-solving abilities and proficiency in C and C++. I perform best in group situations and am constantly eager to work with others to accomplish project objectives. Additionally, I continuously update my knowledge and keep up with the most recent web development techniques and tools because I am a quick learner.',
    education: [
        {
            degree: 'Bachelor of Science in Computer Science',
            school: 'North South University',
            date: '2020-2024',
        },
        {
            degree: 'Higher School Certificate',
            school: 'Cantonment Public School and College, Rangpur',
            date: '2017-2019',
        },
        {
            degree: 'Secondary School Certificate',
            school: 'Cantonment Public School and College, Rangpur',
            date: '2015-2017',
        },
    ],
    address: 'House: 29, Road: 01, Block: C, Bashundhara Residential Area, Dhaka',
    contacts:
    {
        whatsapp: "+8801712666175",
        facebook: "noman.turag",
        linkedin: "abdullah-al-noman-turag-920009139",
        github: "Turag-nsu"
    }

};

const Bio = () => {
    const { name, title, experience, education, address } = bulkData;

    return (
        <Root>
            <Name variant="h1">{name}</Name>
            <Title variant="h3">{title}</Title>
            <Experience variant="body1">{experience}</Experience>
            <Typography variant="h6" gutterBottom style={{ marginTop: '50px' }}>
                Education
            </Typography>
            <Divider />
            <Education>
                {education.map(({ degree, school, date }) => (
                    <div key={`${degree}-${date}`}>
                        <Degree variant="h7">{degree}</Degree>
                        <School variant="body1">{school}</School>
                        <Date variant="body2">{date}</Date>
                    </div>
                ))}

            </Education>
            <Typography variant="h6" gutterBottom style={{ marginTop: '50px' }}>
                Address
            </Typography>
            <Divider />
            <Address>
                <div>{address}</div>
            </Address>
            <Typography variant="h6" gutterBottom style={{ marginTop: '50px' }}>
                Social Media Contacts
            </Typography>
            <Divider />
            <SocialMedia>
                <WhatsAppLink number={bulkData.contacts.whatsapp} />
                <FacebookLink username={bulkData.contacts.facebook} />
                <LinkedInLink username={bulkData.contacts.linkedin} />
                <GitHubLink username={bulkData.contacts.github} />
                
            </SocialMedia>
        </Root>
    );
};

export default Bio;

import React from 'react';
import OrganizedProject from '../OrganizedProject/OrganizedProject';

const projects = [
    {
        name:'Child Support',
        pic:'childSupport.png'
    },
    {
        name:'Refuse Shelter',
        pic:'refuseShelter.png'
    },
    {
        name:'Food Charity',
        pic:'foodCharity.png'
    },
    {
        name:'Host a clothing swap',
        pic:'clothSwap.png'
    },
    {
        name:'Host a River clean up',
        pic:'riverClean.png'
    },
    {
        name:'Clean water for children',
        pic:'cleanWater.png'
    },
    {
        name:'Good education',
        pic:'goodEducation.png'
    },
    {
        name:'New book for children',
        pic:'newBooks.png'
    },
    {
        name:'Host a study group',
        pic:'studyGroup.png'
    },
    {
        name:'Build bird house',
        pic:'birdHouse.png'
    },
     {
        name:'Organize book at library',
        pic:'libraryBooks.png'
    },
    {
        name:'give a saminer on driving safety',
        pic:'driveSafety.png'
    },
    {
        name:'Give free music leason',
        pic:'musicLessons.png'
    },
    {
        name:'Teach people register vote',
        pic:'voteRegister.png'
    },
    {
        name:'Cleanup your local park',
        pic:'clearnPark.png'
    },
    {
        name:'Give it help to local adult',
        pic:'ITHelp.png'
    },
    {
        name:'Foster a shelter animal ',
        pic:'animalShelter.png'
    },
    {
        name:'Baby sit during PTA meating',
        pic:'babySit.png'
    },
    {
        name:'Collect stuffed animals',
        pic:'stuffedAnimals.png'
    },
    {
        name:'Collect school supplies',
        pic:'schoolSuffiles.png'
    },
]

const Projects = () => {
    return (
        <div>
            {
                projects.map(project =><OrganizedProject project = {project}></OrganizedProject>)
            }
        </div>
    );
};

export default Projects;
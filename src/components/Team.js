// Team.js
import React, { useState } from 'react';
import './Team.css';
import Modal from './Modal'; // Assume you have a Modal component

// Import images - replace with actual file names if they are different
import hamzaImage from '../assets/Team/hamza.jpeg';
import ubaidImage from '../assets/Team/ubaid.jpg';
import azamImage from '../assets/Team/azam.jpeg';
import farhanImage from '../assets/Team/farhanqamar.jpg';
import { LinkedinLogo, InstagramLogo } from 'phosphor-react';

const supervisor = {
  name: 'Dr. Farhan Qamar',
  role: 'Supervisor, Professor in CPED, UET Taxila',
  imageSrc: farhanImage,
  qualification: 'Ph.D. Telecom Engineering',
  email: 'farhan.qamar@uettaxila.edu.pk',
  socialMedia: { linkedIn: 'https://linkedin.com/in/dr-farhan-qamar', twitter: 'https://twitter.com/dr-farhan-qamar' }
};

const teamMembers = [
  {
    name: 'Hamza Sardar',
    role: 'App Developer',
    imageSrc: hamzaImage,
    qualification: 'B.Sc. Computer Engineering',
    email: '20-CP-7@students.uettaxila.edu.pk',
    socialMedia: { linkedIn: 'https://linkedin.com/in/hamza', twitter: 'https://twitter.com/hamza' }
  },
  {
    name: 'Ubaid Ashraf',
    role: 'Full Stack Web Developer',
    imageSrc: ubaidImage,
    qualification: 'B.Sc. Computer Engineering',
    email: '20-CP-9@students.uettaxila.edu.pk',
    socialMedia: { linkedIn: 'https://linkedin.com/in/hamza', twitter: 'https://twitter.com/hamza' }
  },
  {
    name: 'Azam Rajpoot',
    role: 'Full Stack Web Developer',
    imageSrc: azamImage,
    qualification: 'B.Sc. Computer Engineering',
    email: '20-CP-24@students.uettaxila.edu.pk',
    socialMedia: { linkedIn: 'https://linkedin.com/in/hamza', twitter: 'https://twitter.com/hamza' }
  }
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleMemberClick = member => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="team-section">
      <div className="team-member supervisor" onClick={() => handleMemberClick(supervisor)}>
        <img src={supervisor.imageSrc} alt={supervisor.name} />
        <h3>{supervisor.name}</h3>
        <p>{supervisor.role}</p>
      </div>
      <div className="team-members">
        {teamMembers.map(member => (
          <div className="team-member" key={member.name} onClick={() => handleMemberClick(member)}>
            <img src={member.imageSrc} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
      {selectedMember && (
        <Modal onClose={handleCloseModal}>
          <div className="modal-body">
            <img src={selectedMember.imageSrc} alt={selectedMember.name} className="modal-image" />
            <div className="modal-info">
              <h3>{selectedMember.name}</h3>
              <p>{selectedMember.qualification}</p>
              <p><strong>Contact: </strong>{selectedMember.email}</p>
              <div className="social-links">
                {selectedMember.socialMedia.linkedIn && (
                  <a href={selectedMember.socialMedia.linkedIn} target="_blank" rel="noopener noreferrer" className="social-icon">
                    <LinkedinLogo size={32} weight="fill" />
                  </a>
                )}
                {selectedMember.socialMedia.twitter && (
                  <a href={selectedMember.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="social-icon">
                    <InstagramLogo size={32} weight="fill" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Team;

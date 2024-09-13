import React from "react";

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  imageSrc: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, description, imageSrc }) => {
  return (
    <div className="bg-gradient-to-b from-[#1a1b1e] to-[#16171a] text-white rounded-lg p-6 flex flex-col items-center text-center space-y-4">
      <div className="rounded-full w-24 h-24 overflow-hidden">
        <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h3 className="text-xl font-semibold">{name}</h3>
        <p >{role}</p>
      </div>
      <p>{description}</p>
    </div>
  );
};

const TeamSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#1a1b1e] to-[#16171a] text-white p-6 md:p-10 rounded-lg">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Dedicated Team</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Meet the passionate individuals behind our mental health support services.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
            <TeamMember
              name="Arpan Saini"
              role="Founder & CEO"
              description="John is the driving force behind our mission to provide accessible mental health support."
              imageSrc= "@/public/images/arpan.jpg"
            />
            <TeamMember
              name="Jane Smith"
              role="Clinical Director"
              description="Jane oversees our clinical team and ensures the highest quality of care for our clients."
              imageSrc="/placeholder.svg"
            />
            <TeamMember
              name="Michael Johnson"
              role="Lead Therapist"
              description="Michael leads our team of experienced therapists, ensuring high-quality care for our clients."
              imageSrc="/placeholder.svg"
            />
            <TeamMember
              name="Emily Davis"
              role="Community Manager"
              description="Emily fosters a supportive community for our clients, organizing events and facilitating group sessions."
              imageSrc="/placeholder.svg"
            />
           
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;

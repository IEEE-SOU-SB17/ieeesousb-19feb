export interface GalleryImage {
  imageUrl: string;
  caption: string;
  description: string;
}

export interface JourneyItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  year?: string;
  details: string;
  gallery?: GalleryImage[];
}

export const journeyItems: JourneyItem[] = [
  {
    id: "journey-001",
    title: "Foundation & Formation",
    description: "The Birth of IEEE SOU SB",
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=700&fit=crop",
    year: "2017",
    details:
      "IEEE SOU Student Branch was founded in 2017 with 17 passionate members, establishing the foundation for a thriving community dedicated to technical excellence and professional development.",
    gallery: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&h=500&fit=crop",
        caption: "Founding Members Meeting",
        description:
          "The very first gathering of the 17 founding members who came together with a shared vision to establish IEEE SOU Student Branch and create a lasting impact.",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&h=500&fit=crop",
        caption: "Inaugural Ceremony",
        description:
          "The official inauguration ceremony marked the formal recognition of IEEE SOU SB, attended by faculty advisors, senior IEEE members, and enthusiastic students.",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=800&h=500&fit=crop",
        caption: "First Team Photo",
        description:
          "A historic moment captured — the founding team posing together after successfully registering the branch, full of energy and determination to make a difference.",
      },
    ],
  },
  {
    id: "journey-002",
    title: "Community Growth",
    description: "Expanding Our Family",
    imageUrl:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=700&fit=crop",
    year: "2018",
    details:
      "The community grew rapidly as we organized our first technical workshops, connecting students with industry professionals and fostering a culture of learning and innovation.",
    gallery: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=500&fit=crop",
        caption: "First Technical Workshop",
        description:
          "Our inaugural technical workshop on embedded systems drew over 60 participants, signalling a huge appetite for hands-on learning among the student community.",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=500&fit=crop",
        caption: "Membership Drive 2018",
        description:
          "A vibrant membership drive across the campus brought in a wave of new recruits, tripling the branch's size within a single semester.",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1529119368496-2dfda6ec2804?w=800&h=500&fit=crop",
        caption: "Industry Expert Session",
        description:
          "A guest lecture series invited professionals from leading tech firms to share real-world insights, bridging the gap between classroom theory and industry practice.",
      },
    ],
  },
  {
    id: "journey-003",
    title: "Technical Excellence",
    description: "Innovation & Skills",
    imageUrl:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=700&fit=crop",
    year: "2019",
    details:
      "Despite the pandemic, we launched virtual workshops covering cutting-edge technologies including AI, Machine Learning, IoT, and Web Development, reaching hundreds of participants.",
    gallery: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=800&h=500&fit=crop",
        caption: "AI & ML Bootcamp",
        description:
          "A weekend-long bootcamp on Artificial Intelligence and Machine Learning, where participants built their first ML models under expert guidance.",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop",
        caption: "IoT Prototyping Lab",
        description:
          "Hands-on sessions in the IoT lab where students built smart home prototypes, learning to connect the physical and digital worlds.",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=500&fit=crop",
        caption: "Web Dev Sprint",
        description:
          "A 48-hour intensive web development sprint where teams designed and deployed full-stack projects, showcasing creativity and technical depth.",
      },
    ],
  },
  {
    id: "journey-004",
    title: "Industry Partnerships",
    description: "Collaborations & Networks",
    imageUrl:
      "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=1200&h=700&fit=crop",
    year: "2020",
    details:
      "Established strategic partnerships with leading tech companies, creating internship opportunities and mentorship programs that bridged the gap between academia and industry.",
    gallery: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=500&fit=crop",
        caption: "MoU Signing Ceremony",
        description:
          "Formal Memoranda of Understanding signed with three tech companies, paving the way for internship pipelines and collaborative research projects.",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=500&fit=crop",
        caption: "Mentorship Program Launch",
        description:
          "Industry mentors were paired with student groups in a structured program providing career guidance, project feedback, and professional networking.",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=500&fit=crop",
        caption: "Campus Recruitment Drive",
        description:
          "Partner companies conducted exclusive recruitment drives for IEEE SOU SB members, resulting in multiple internship and placement offers.",
      },
    ],
  },
  {
    id: "journey-005",
    title: "Global Recognition",
    description: "Awards & Achievements",
    imageUrl:
      "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=1200&h=700&fit=crop",
    year: "2021",
    details:
      "Received multiple accolades for our outstanding contributions to student development and technical innovation, gaining recognition at regional and national levels.",
    gallery: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=800&h=500&fit=crop",
        caption: "Best Student Branch Award",
        description:
          "IEEE SOU SB was honoured with the 'Best Student Branch' award at the IEEE Region 10 Conference, recognising our exceptional programs and member engagement.",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=500&fit=crop",
        caption: "National Tech Competition Victory",
        description:
          "Our team secured first place in a national-level technology competition, demonstrating the depth of technical talent within IEEE SOU SB.",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&h=500&fit=crop",
        caption: "Award Ceremony Celebration",
        description:
          "Members and faculty gathered to celebrate our milestone achievements, marking a proud moment in the branch's growing legacy.",
      },
    ],
  },
  {
    id: "journey-006",
    title: "Milestone: 200+ Members",
    description: "Reaching New Heights",
    imageUrl:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1200&h=700&fit=crop",
    year: "2022",
    details:
      "Celebrated crossing the 200-member milestone with expanded offerings including leadership development programs, hackathons, and career guidance sessions.",
    gallery: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?w=800&h=500&fit=crop",
        caption: "200 Members Celebration",
        description:
          "A grand celebration marking the momentous milestone of 200 members, complete with a special event, certificates of recognition, and a community gala.",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop",
        caption: "Hackathon 2022",
        description:
          "Our biggest hackathon yet attracted 150+ participants across 35 teams, tackling real-world challenges with innovative tech solutions over 24 hours.",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=500&fit=crop",
        caption: "Leadership Development Camp",
        description:
          "A two-day leadership retreat focusing on communication, strategy, and team management skills to prepare the next generation of IEEE SOU SB leaders.",
      },
    ],
  },
  {
    id: "journey-007",
    title: "Research & Innovation",
    description: "Driving Real-world Solutions",
    imageUrl:
      "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=1200&h=700&fit=crop",
    year: "2023",
    details:
      "Launched research initiatives encouraging members to work on projects addressing real-world challenges, fostering innovation and problem-solving skills.",
    gallery: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1532094349884-543559b84dc4?w=800&h=500&fit=crop",
        caption: "Research Symposium 2023",
        description:
          "Members presented their research papers at our first internal symposium, with the top three papers submitted to international IEEE conferences.",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop",
        caption: "Innovation Lab Sessions",
        description:
          "Monthly innovation lab sessions provided members with access to cutting-edge hardware and software tools to prototype their research ideas.",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop",
        caption: "Collaborative Project Expo",
        description:
          "An open expo showcasing 20+ student-led projects in domains like renewable energy, smart agriculture, healthcare tech, and urban mobility.",
      },
    ],
  },
  {
    id: "journey-008",
    title: "360° Development Motto",
    description: "Inner & Outer Growth",
    imageUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=700&fit=crop",
    year: "2024",
    details:
      "Introduced our signature motto '360° Development: 180° Inner, 180° Outer' emphasising technical expertise alongside personal growth, leadership, and ethical values.",
    gallery: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=500&fit=crop",
        caption: "Personality Development Workshops",
        description:
          "A series of workshops on public speaking, emotional intelligence, and mindfulness designed to cultivate well-rounded professionals.",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=500&fit=crop",
        caption: "Ethics in Technology Panel",
        description:
          "A thought-provoking panel discussion on responsible AI and data ethics, encouraging members to build technology with conscience.",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop",
        caption: "360° Annual Showcase",
        description:
          "The annual showcase celebrated members' holistic achievements — from technical projects to social initiatives, art, and community service.",
      },
    ],
  },
  {
    id: "journey-009",
    title: "Community Impact",
    description: "Beyond SOU Campus",
    imageUrl:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&h=700&fit=crop",
    year: "2025",
    details:
      "Extended our reach beyond campus through outreach programs, mentoring younger students, and contributing to the tech community through open-source initiatives.",
    gallery: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop",
        caption: "School Outreach Program",
        description:
          "Members visited local schools to inspire younger students through interactive STEM demos, live coding sessions, and career talks.",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=500&fit=crop",
        caption: "Open-Source Contribution Drive",
        description:
          "A month-long campaign where members contributed to global open-source repositories, collectively logging 500+ commits across 20 projects.",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&h=500&fit=crop",
        caption: "Community Tech Fair",
        description:
          "IEEE SOU SB organised a public tech fair open to the entire city, showcasing student innovations and offering free digital literacy sessions.",
      },
    ],
  },
];

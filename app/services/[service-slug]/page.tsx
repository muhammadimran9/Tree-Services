import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceDetailClient from '@/components/ServiceDetailClient';

// Service data - in production this would come from a CMS or database
const services = {
  'tree-removal': {
    name: 'Tree Removal',
    description: 'Professional tree removal services for hazardous, dead, or unwanted trees in Portland. Our ISA-certified arborists use advanced techniques to safely remove trees of any size while protecting your property and landscape.',
    audience: 'Property owners with hazardous trees, construction sites, storm damage cleanup',
    useCases: [
      'Dead or dying trees posing safety risks',
      'Trees damaging foundations or utilities',
      'Storm-damaged trees',
      'Construction clearing',
      'Disease or insect-infested trees'
    ],
    benefits: [
      'Eliminates safety hazards',
      'Protects property and structures',
      'Prevents disease spread',
      'Improves landscape aesthetics',
      'Allows for new plantings'
    ],
    permitInfo: 'Portland requires permits for trees over 12 inches diameter. We handle all permit applications and compliance requirements.',
    risks: [
      'Property damage from improper felling',
      'Utility line damage',
      'Personal injury risks',
      'Neighbor property damage',
      'Falling debris hazards'
    ]
  },
  'tree-trimming': {
    name: 'Tree Trimming',
    description: 'Expert tree pruning and trimming services to maintain tree health, improve structure, and enhance the beauty of your Portland property. Our certified arborists follow ANSI A300 standards for all pruning work.',
    audience: 'Homeowners, property managers, businesses seeking regular tree maintenance',
    useCases: [
      'Regular tree health maintenance',
      'Storm damage prevention',
      'Improving sunlight penetration',
      'Enhancing tree structure',
      'Clearing utility line conflicts'
    ],
    benefits: [
      'Improves tree health and vigor',
      'Reduces storm damage risk',
      'Enhances aesthetic appeal',
      'Increases sunlight and air flow',
      'Prevents property conflicts'
    ],
    permitInfo: 'Most pruning work doesn\'t require permits, but protected trees may need city approval. We verify all requirements.',
    risks: [
      'Over-pruning causing tree stress',
      'Improper cuts leading to disease',
      'Creating weak branch structure',
      'Affecting tree stability',
      'Reducing tree value'
    ]
  },
  'stump-grinding': {
    name: 'Stump Grinding',
    description: 'Complete stump removal and grinding services to clear your property of tree remnants after removal. Our powerful equipment can handle any size stump and access challenging locations.',
    audience: 'Property owners who have had trees removed and want complete site clearing',
    useCases: [
      'Post-tree removal cleanup',
      'New construction preparation',
      'Landscape renovation projects',
      'Preventing stump regrowth',
      'Eliminating pest habitats'
    ],
    benefits: [
      'Complete stump removal',
      'Prevents regrowth',
      'Eliminates pest habitats',
      'Allows immediate replanting',
      'Improves lawn appearance'
    ],
    permitInfo: 'Stump grinding typically doesn\'t require permits as it\'s part of tree removal process.',
    risks: [
      'Underground utility damage',
      'Property damage from equipment',
      'Incomplete removal leading to regrowth',
      'Surface root damage',
      'Soil compaction'
    ]
  },
  'emergency-tree-service': {
    name: 'Emergency Tree Service',
    description: '24/7 emergency tree services for storm damage, fallen trees, and hazardous situations in Portland. Our rapid response team is available around the clock to protect your property and ensure safety.',
    audience: 'Property owners experiencing storm damage, fallen trees, or immediate tree hazards',
    useCases: [
      'Storm-damaged trees blocking roads or driveways',
      'Trees fallen on structures or vehicles',
      'Hazardous trees threatening property',
      'Emergency tree removal after storms',
      'Immediate safety concerns requiring urgent attention'
    ],
    benefits: [
      '24/7 availability for emergencies',
      'Rapid response to protect property',
      'Prevents further damage',
      'Restores access and safety',
      'Professional emergency tree removal'
    ],
    permitInfo: 'Emergency situations may have expedited permit processes. We handle all necessary documentation while prioritizing safety.',
    risks: [
      'Further property damage if not addressed quickly',
      'Safety hazards from unstable trees',
      'Blocked access during emergencies',
      'Increased costs from delayed response',
      'Potential liability from hazardous conditions'
    ]
  },
  'arborist-services': {
    name: 'Arborist Services',
    description: 'Professional ISA-certified arborist consultations, tree health assessments, and expert tree care services in Portland. Comprehensive tree evaluations and management plans.',
    audience: 'Property owners needing expert tree assessments, health evaluations, and professional tree care guidance',
    useCases: [
      'Tree health assessments and diagnostics',
      'Disease and pest identification',
      'Tree risk evaluations',
      'Development of tree care plans',
      'Expert consultation for tree preservation'
    ],
    benefits: [
      'Expert tree health evaluation',
      'Early problem detection',
      'Professional care recommendations',
      'Preservation of valuable trees',
      'Comprehensive tree management'
    ],
    permitInfo: 'Arborist consultations typically don\'t require permits, but recommended work may need city approval.',
    risks: [
      'Undetected tree health issues',
      'Improper care causing decline',
      'Missed disease or pest problems',
      'Structural issues going unnoticed',
      'Reduced tree value and lifespan'
    ]
  }
};

type ServiceKey = keyof typeof services;

interface ServicePageProps {
  params: {
    'service-slug': string;
  };
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const slug = params['service-slug'] as ServiceKey;
  const service = services[slug];

  if (!service) {
    return {
      title: 'Tree Services Portland Oregon | Urban Timber Tree Service',
      description:
        'Professional tree services in Portland, Oregon including removal, pruning, stump grinding and emergency tree work.',
    };
  }

  const baseTitle = `${service.name} Portland Oregon | Urban Timber Tree Service`;

  return {
    title: baseTitle,
    description: service.description,
    openGraph: {
      title: baseTitle,
      description: service.description,
      type: 'website',
      url: `https://urbantimber.com/services/${slug}`,
    },
    alternates: {
      canonical: `https://urbantimber.com/services/${slug}`,
    },
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const slug = params['service-slug'] as ServiceKey;
  const service = services[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ServiceDetailClient service={service} slug={slug} />
      <Footer />
    </div>
  );
}

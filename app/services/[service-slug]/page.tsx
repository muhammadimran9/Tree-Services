import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceDetailClient from '@/components/ServiceDetailClient';

// Service data - in production this would come from a CMS or database
const services = {
  'tree-removal': {
    name: 'Tree Removal',
    title: 'Tree Removal Portland & Salem Oregon | Safe Tree Removal Service',
    description: '🌳 **BEST Tree Removal in Portland & Salem Oregon** - Licensed & insured arborists providing safe tree removal for hazardous, dead, or unwanted trees. **FREE ESTIMATES** - Call (503) 449-4066 for 24/7 emergency tree removal!',
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
    permitInfo: 'Portland & Salem require permits for trees over 12 inches diameter. We handle all permit applications and compliance requirements for both cities!',
    risks: [
      'Property damage from improper felling',
      'Utility line damage',
      'Personal injury risks',
      'Neighbor property damage',
      'Falling debris hazards'
    ],
    keywords: [
      'tree removal Portland Oregon',
      'tree removal Salem Oregon',
      'emergency tree removal Portland',
      'emergency tree removal Salem',
      'hazardous tree removal Portland',
      'hazardous tree removal Salem',
      'fallen tree removal Portland',
      'fallen tree removal Salem',
      'storm damage tree removal Portland',
      'storm damage tree removal Salem',
      'cheap tree removal Portland',
      'cheap tree removal Salem',
      'affordable tree removal Portland',
      'affordable tree removal Salem',
      'tree removal near me Portland',
      'tree removal near me Salem'
    ]
  },
  'tree-trimming': {
    name: 'Tree Trimming',
    title: 'Tree Trimming Portland & Salem Oregon | Professional Tree Pruning',
    description: '🌿 **EXPERT Tree Trimming in Portland & Salem Oregon** - ISA certified arborists providing professional tree pruning, trimming & shaping. **FREE ESTIMATES** - Call (503) 449-4066 for same-day tree service!',
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
    permitInfo: 'Most pruning work in Portland & Salem doesn\'t require permits, but protected trees may need city approval. We verify all requirements for both cities!',
    risks: [
      'Over-pruning causing tree stress',
      'Improper cuts leading to disease',
      'Creating weak branch structure',
      'Affecting tree stability',
      'Reducing tree value'
    ],
    keywords: [
      'tree trimming Portland',
      'tree trimming Salem',
      'tree pruning Portland',
      'tree pruning Salem',
      'tree service Portland',
      'tree service Salem',
      'professional tree trimming Portland',
      'professional tree trimming Salem',
      'affordable tree trimming Portland',
      'affordable tree trimming Salem',
      'tree care Portland',
      'tree care Salem',
      'tree maintenance Portland',
      'tree maintenance Salem',
      'certified arborist Portland',
      'certified arborist Salem'
    ]
  },
  'stump-grinding': {
    name: 'Stump Grinding',
    title: 'Stump Grinding Portland & Salem Oregon | Complete Stump Removal',
    description: '🪚 **FAST Stump Grinding in Portland & Salem Oregon** - Professional stump removal & grinding service. Clear your property completely. **FREE ESTIMATES** - Call (503) 449-4066 for same-day stump removal!',
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
    permitInfo: 'Stump grinding typically doesn\'t require permits in Portland & Salem as it\'s part of tree removal process. We handle any needed permits!',
    risks: [
      'Underground utility damage',
      'Property damage from equipment',
      'Incomplete removal leading to regrowth',
      'Surface root damage',
      'Soil compaction'
    ],
    keywords: [
      'stump grinding Portland',
      'stump grinding Salem',
      'stump removal Portland',
      'stump removal Salem',
      'tree stump removal Portland',
      'tree stump removal Salem',
      'affordable stump grinding Portland',
      'affordable stump grinding Salem',
      'cheap stump grinding Portland',
      'cheap stump grinding Salem',
      'stump grinder Portland',
      'stump grinder Salem',
      'stump removal service Portland',
      'stump removal service Salem',
      'professional stump grinding Portland',
      'professional stump grinding Salem'
    ]
  },
  'emergency-tree-service': {
    name: 'Emergency Tree Service',
    title: '24/7 Emergency Tree Service Portland & Salem | Storm Damage Response',
    description: '🚨 **24/7 EMERGENCY Tree Service in Portland & Salem Oregon** - Rapid response for storm damage, fallen trees & hazardous situations. **CALL NOW: (503) 449-4066** - Available day & night!',
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
    permitInfo: 'Emergency situations in Portland & Salem may have expedited permit processes. We handle all necessary documentation while prioritizing safety!',
    risks: [
      'Further property damage if not addressed quickly',
      'Safety hazards from unstable trees',
      'Blocked access during emergencies',
      'Increased costs from delayed response',
      'Potential liability from hazardous conditions'
    ],
    keywords: [
      'emergency tree service Portland',
      'emergency tree service Salem',
      '24 hour tree service Portland',
      '24 hour tree service Salem',
      'emergency tree removal Portland',
      'emergency tree removal Salem',
      'storm damage tree service Portland',
      'storm damage tree service Salem',
      'fallen tree removal Portland',
      'fallen tree removal Salem',
      'tree on house Portland',
      'tree on house Salem',
      'tree on car Portland',
      'tree on car Salem',
      'urgent tree service Portland',
      'urgent tree service Salem',
      'after hours tree service Portland',
      'after hours tree service Salem'
    ]
  },
  'arborist-services': {
    name: 'Arborist Services',
    title: 'Certified Arborist Portland & Salem Oregon | Expert Tree Care',
    description: '🌱 **CERTIFIED Arborist Services in Portland & Salem Oregon** - ISA certified arborists providing expert tree assessments, health evaluations & professional tree care. **FREE CONSULTATIONS** - Call (503) 449-4066!',
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
    permitInfo: 'Arborist consultations in Portland & Salem typically don\'t require permits, but recommended work may need city approval. We handle all permit requirements!',
    risks: [
      'Undetected tree health issues',
      'Improper care causing decline',
      'Missed disease or pest problems',
      'Structural issues going unnoticed',
      'Reduced tree value and lifespan'
    ],
    keywords: [
      'certified arborist Portland',
      'certified arborist Salem',
      'ISA certified arborist Portland',
      'ISA certified arborist Salem',
      'tree health assessment Portland',
      'tree health assessment Salem',
      'tree doctor Portland',
      'tree doctor Salem',
      'tree expert Portland',
      'tree expert Salem',
      'tree consultation Portland',
      'tree consultation Salem',
      'professional arborist Portland',
      'professional arborist Salem',
      'tree risk assessment Portland',
      'tree risk assessment Salem',
      'tree disease diagnosis Portland',
      'tree disease diagnosis Salem'
    ]
  }
};

type ServiceKey = keyof typeof services;

interface ServicePageProps {
  params: Promise<{
    'service-slug': string;
  }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { 'service-slug': slugRaw } = await params;
  const slug = slugRaw as ServiceKey;
  const service = services[slug];

  if (!service) {
    return {
      title: 'Tree Services Portland & Salem Oregon | Tree Services',
      description:
        'Professional tree services in Portland & Salem, Oregon including removal, pruning, stump grinding and emergency tree work. Call (503) 449-4066 for FREE estimates!',
    };
  }

  const baseTitle = service.title || `${service.name} in Portland & Salem, Oregon | Tree Services`;

  return {
    title: baseTitle,
    description: service.description,
    keywords: service.keywords || [
      'tree service Portland Oregon',
      'tree service Salem Oregon',
      'tree removal Portland',
      'tree removal Salem',
      'emergency tree service Portland',
      'emergency tree service Salem',
      'certified arborist Portland',
      'certified arborist Salem'
    ],
    openGraph: {
      title: baseTitle,
      description: service.description,
      type: 'website',
      url: `https://yourtreeservicewebsite.com/services/${slug}`,
      images: [
        {
          url: `https://yourtreeservicewebsite.com/images/og-${slug}.jpg`,
          width: 1200,
          height: 630,
          alt: `${service.name} services in Portland and Salem, Oregon`,
        },
      ],
    },
    alternates: {
      canonical: `https://yourtreeservicewebsite.com/services/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  return [
    { 'service-slug': 'tree-removal' },
    { 'service-slug': 'tree-trimming' },
    { 'service-slug': 'stump-grinding' },
    { 'service-slug': 'emergency-tree-service' },
    { 'service-slug': 'arborist-services' }
  ];
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { 'service-slug': slugRaw } = await params;
  const slug = slugRaw as ServiceKey;
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

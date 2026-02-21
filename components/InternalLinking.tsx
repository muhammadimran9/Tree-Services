import Link from 'next/link';
import { ReactNode } from 'react';

// Service Area Links Component
export function ServiceAreaLinks() {
  const portlandAreas = [
    { name: 'Downtown Portland', url: '/locations/portland-tree-service' },
    { name: 'Northeast Portland', url: '/locations/portland-tree-service' },
    { name: 'Southeast Portland', url: '/locations/portland-tree-service' },
    { name: 'Northwest Portland', url: '/locations/portland-tree-service' },
    { name: 'Southwest Portland', url: '/locations/portland-tree-service' },
    { name: 'Multnomah County', url: '/locations/portland-tree-service' },
  ];

  const salemAreas = [
    { name: 'Downtown Salem', url: '/locations/salem-tree-service' },
    { name: 'West Salem', url: '/locations/salem-tree-service' },
    { name: 'South Salem', url: '/locations/salem-tree-service' },
    { name: 'Keizer', url: '/locations/salem-tree-service' },
    { name: 'Marion County', url: '/locations/salem-tree-service' },
  ];

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Areas</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-medium text-green-700 mb-2">Portland Areas</h4>
          <ul className="space-y-1">
            {portlandAreas.map((area) => (
              <li key={area.name}>
                <Link 
                  href={area.url}
                  className="text-sm text-gray-600 hover:text-green-700 transition-colors"
                >
                  → Tree Service {area.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-green-700 mb-2">Salem Areas</h4>
          <ul className="space-y-1">
            {salemAreas.map((area) => (
              <li key={area.name}>
                <Link 
                  href={area.url}
                  className="text-sm text-gray-600 hover:text-green-700 transition-colors"
                >
                  → Tree Service {area.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// Service Links Component
export function ServiceLinks() {
  const services = [
    { name: 'Tree Removal', url: '/services/tree-removal' },
    { name: 'Tree Trimming', url: '/services/tree-trimming' },
    { name: 'Tree Pruning', url: '/services/tree-trimming' },
    { name: 'Stump Grinding', url: '/services/stump-grinding' },
    { name: 'Stump Removal', url: '/services/stump-grinding' },
    { name: 'Emergency Tree Service', url: '/services/emergency-tree-service' },
    { name: 'Hazardous Tree Removal', url: '/services/tree-removal' },
    { name: 'Storm Damage Cleanup', url: '/services/emergency-tree-service' },
    { name: 'Lot Clearing', url: '/services/tree-removal' },
    { name: 'Commercial Tree Service', url: '/services/tree-removal' },
    { name: 'Residential Tree Service', url: '/services/tree-trimming' },
  ];

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Tree Services</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {services.map((service) => (
          <Link
            key={service.name}
            href={service.url}
            className="text-sm text-gray-600 hover:text-green-700 transition-colors flex items-center"
          >
            <span className="mr-1">→</span> {service.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

// Location-Based Service Links
export function LocationServiceLinks() {
  const locationServices = [
    {
      city: 'Portland',
      services: [
        'Tree Removal Portland OR',
        'Tree Trimming Portland',
        'Emergency Tree Removal Portland',
        'Stump Grinding Portland',
        'Certified Arborist Portland',
        'Affordable Tree Removal Portland',
        'Best Tree Service Portland',
        '24 Hour Tree Removal Portland',
        'Same Day Tree Removal Portland',
        'Licensed Tree Service Portland',
        'Insured Tree Removal Portland',
        'Commercial Tree Service Portland',
        'Residential Tree Service Portland',
        'Tree Service Near Me Portland',
        'Tree Service Multnomah County',
      ]
    },
    {
      city: 'Salem',
      services: [
        'Tree Removal Salem OR',
        'Tree Trimming Salem',
        'Emergency Tree Removal Salem',
        'Stump Grinding Salem',
        'Certified Arborist Salem',
        'Affordable Tree Removal Salem',
        'Best Tree Service Salem',
        '24 Hour Tree Removal Salem',
        'Same Day Tree Removal Salem',
        'Licensed Tree Service Salem',
        'Insured Tree Removal Salem',
        'Commercial Tree Service Salem',
        'Residential Tree Service Salem',
        'Tree Service Near Me Salem',
        'Tree Service Marion County',
        'Tree Service Keizer',
      ]
    }
  ];

  return (
    <div className="bg-green-50 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-green-800 mb-4">Tree Services by Location</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {locationServices.map((location) => (
          <div key={location.city}>
            <h4 className="font-medium text-green-700 mb-3">{location.city} Tree Services</h4>
            <div className="grid grid-cols-1 gap-2">
              {location.services.map((service) => (
                <Link
                  key={service}
                  href={location.city === 'Portland' ? '/locations/portland-tree-service' : '/locations/salem-tree-service'}
                  className="text-sm text-green-900 hover:text-green-700 transition-colors"
                >
                  → {service}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Quick Links Component
export function QuickLinks() {
  const quickLinks = [
    { name: 'Free Tree Removal Estimate', url: '/quote' },
    { name: 'Emergency Tree Service', url: '/services/emergency-tree-service' },
    { name: 'Portland Tree Service', url: '/locations/portland-tree-service' },
    { name: 'Salem Tree Service', url: '/locations/salem-tree-service' },
    { name: 'Tree Removal Cost Guide', url: '/blog/tree-removal-cost' },
    { name: 'Tree Service Reviews', url: '/reviews' },
    { name: 'About Our Company', url: '/about' },
    { name: 'Contact Tree Service', url: '/contact' },
    { name: 'Tree Care Tips', url: '/blog' },
    { name: 'Service Areas', url: '/locations' },
  ];

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
      <div className="grid grid-cols-2 gap-3">
        {quickLinks.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            className="text-sm text-gray-600 hover:text-green-700 transition-colors flex items-center"
          >
            <span className="mr-1">→</span> {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

// Contextual Links Component (for blog posts and service pages)
export function ContextualLinks({ context }: { context: 'portland' | 'salem' | 'general' }) {
  const getLinks = (): Array<{ text: string; url: string }> => {
    switch (context) {
      case 'portland':
        return [
          { text: 'emergency tree removal Portland', url: '/services/emergency-tree-service' },
          { text: 'tree removal cost Portland', url: '/blog/tree-removal-cost-portland' },
          { text: 'Portland tree removal permits', url: '/blog/portland-tree-permits' },
          { text: 'certified arborist Portland', url: '/about' },
          { text: 'tree service Multnomah County', url: '/locations/portland-tree-service' },
        ];
      case 'salem':
        return [
          { text: 'emergency tree removal Salem', url: '/services/emergency-tree-service' },
          { text: 'tree removal cost Salem', url: '/blog/tree-removal-cost-salem' },
          { text: 'Salem tree removal permits', url: '/blog/salem-tree-permits' },
          { text: 'certified arborist Salem', url: '/about' },
          { text: 'tree service Marion County', url: '/locations/salem-tree-service' },
        ];
      default:
        return [
          { text: 'free tree removal estimate', url: '/quote' },
          { text: '24 hour emergency tree service', url: '/services/emergency-tree-service' },
          { text: 'licensed and insured tree service', url: '/about' },
          { text: 'tree service reviews', url: '/reviews' },
          { text: 'tree care tips', url: '/blog' },
        ];
    }
  };

  const links = getLinks();

  return (
    <div className="bg-blue-50 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-blue-800 mb-4">Helpful Links</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.text}>
            <Link
              href={link.url}
              className="text-blue-700 hover:text-blue-900 transition-colors text-sm"
            >
              → {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Footer Links Component
export function FooterLinks() {
  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'Tree Removal', url: '/services/tree-removal' },
        { name: 'Tree Trimming', url: '/services/tree-trimming' },
        { name: 'Stump Grinding', url: '/services/stump-grinding' },
        { name: 'Emergency Service', url: '/services/emergency-tree-service' },
      ]
    },
    {
      title: 'Locations',
      links: [
        { name: 'Portland Tree Service', url: '/locations/portland-tree-service' },
        { name: 'Salem Tree Service', url: '/locations/salem-tree-service' },
        { name: 'All Service Areas', url: '/locations' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', url: '/about' },
        { name: 'Reviews', url: '/reviews' },
        { name: 'Blog', url: '/blog' },
        { name: 'Contact', url: '/contact' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Free Estimate', url: '/quote' },
        { name: 'Tree Care Tips', url: '/blog' },
        { name: 'FAQ', url: '/faq' },
        { name: 'Emergency', url: '/services/emergency-tree-service' },
      ]
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {footerSections.map((section) => (
        <div key={section.title}>
          <h4 className="font-semibold text-gray-900 mb-4">{section.title}</h4>
          <ul className="space-y-2">
            {section.links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.url}
                  className="text-gray-600 hover:text-green-700 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

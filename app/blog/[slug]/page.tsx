import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPostClient from '@/components/BlogPostClient';

// Default blog posts data
const defaultBlogPosts = {
  'seasonal-tree-care-portland': {
    title: 'Essential Seasonal Tree Care Tips for Portland Homeowners',
    content: `
      <h2>Spring Tree Care (March - May)</h2>
      <p>Spring is the perfect time to assess winter damage and prepare your trees for the growing season. Our ISA-certified arborists recommend:</p>
      <ul>
        <li>Inspect for winter storm damage</li>
        <li>Prune dead or damaged branches</li>
        <li>Apply slow-release fertilizer</li>
        <li>Mulch around base to retain moisture</li>
        <li>Monitor for pest activity</li>
      </ul>

      <h2>Summer Tree Care (June - August)</h2>
      <p>Portland's dry summers require special attention to tree health and water management:</p>
      <ul>
        <li>Deep watering during drought periods</li>
        <li>Avoid heavy pruning during heat stress</li>
        <li>Monitor for signs of disease</li>
        <li>Provide shade for young trees</li>
        <li>Watch for pest infestations</li>
      </ul>

      <h2>Fall Tree Care (September - November)</h2>
      <p>Fall preparation helps trees survive Portland's wet winters:</p>
      <ul>
        <li>Reduce watering frequency</li>
        <li>Apply winter fertilizer</li>
        <li>Wrap young trees for protection</li>
        <li>Clean up fallen leaves</li>
        <li>Final pruning before dormancy</li>
      </ul>

      <h2>Winter Tree Care (December - February)</h2>
      <p>Winter dormancy requires minimal intervention but important monitoring:</p>
      <ul>
        <li>Protect from frost damage</li>
        <li>Remove snow accumulation</li>
        <li>Inspect for structural weaknesses</li>
        <li>Plan spring pruning</li>
        <li>Avoid major pruning during freezing</li>
      </ul>
    `,
    date: '2024-02-15',
    readTime: '5 min read',
    category: 'Tree Care Tips',
    image: '/blog/seasonal-tree-care.jpg'
  },
  'portland-tree-removal-permits': {
    title: 'Understanding Portland Tree Removal Permits: A Complete Guide',
    content: `
      <h2>When Do You Need a Tree Removal Permit in Portland?</h2>
      <p>Portland's Urban Forestry requires permits for removing trees that meet certain criteria:</p>
      <ul>
        <li>Trees 12 inches or more in diameter</li>
        <li>Trees in protected zones or heritage areas</li>
        <li>Trees on commercial properties</li>
        <li>Trees affecting public right-of-way</li>
      </ul>

      <h2>Permit Application Process</h2>
      <p>The permit process typically takes 2-4 weeks and includes:</p>
      <ul>
        <li>Tree assessment and documentation</li>
        <li>Site plan review</li>
        <li>Public notice posting (if required)</li>
        <li>Inspection and approval</li>
      </ul>

      <h2>Exemptions and Special Cases</h2>
      <p>Certain situations may not require permits:</p>
      <ul>
        <li>Hazardous trees (immediate danger)</li>
        <li>Trees under 12 inches diameter</li>
        <li>Fruit trees on residential property</li>
        <li>Trees removed for construction permits</li>
      </ul>

      <h2>How Our Tree Services Team Helps</h2>
      <p>We handle the entire permit process for you:</p>
      <ul>
        <li>Free permit assessment</li>
        <li>Complete application preparation</li>
        <li>Coordination with city officials</li>
        <li>Compliance with all regulations</li>
      </ul>
    `,
    date: '2024-02-10',
    readTime: '8 min read',
    category: 'Regulations',
    image: '/blog/tree-permits.jpg'
  }
};

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(defaultBlogPosts).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = defaultBlogPosts[slug as keyof typeof defaultBlogPosts];

  if (!post) {
    return {
      title: 'Blog | Tree Services Portland',
      description: 'Tree care tips and insights from Portland\'s expert arborists.',
    };
  }

  return {
    title: `${post.title} | Tree Services Portland`,
    description: post.content.replace(/<[^>]*>/g, '').substring(0, 160),
  };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = defaultBlogPosts[slug as keyof typeof defaultBlogPosts];

  if (!post) {
    notFound();
  }

  return <BlogPostClient post={post} slug={slug} />;
}

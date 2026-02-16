'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

interface ContactSubmission {
  id: number;
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  timestamp: string;
}

interface BlogPost {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  image: string;
  date: string;
  slug: string;
  category: string;
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'contacts' | 'blog'>('contacts');
  const [contactSubmissions, setContactSubmissions] = useState<ContactSubmission[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isAddingPost, setIsAddingPost] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    excerpt: '',
    image: '',
    category: 'Tree Care Tips'
  });

  useEffect(() => {
    // Load contact submissions
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    setContactSubmissions(submissions);

    // Load blog posts
    const posts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    setBlogPosts(posts);
  }, []);

  const handleAddPost = () => {
    if (!newPost.title || !newPost.content || !newPost.excerpt) {
      alert('Please fill in all required fields');
      return;
    }

    const post: BlogPost = {
      id: Date.now(),
      ...newPost,
      slug: newPost.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      date: new Date().toISOString()
    };

    const updatedPosts = [...blogPosts, post];
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    setBlogPosts(updatedPosts);
    setNewPost({
      title: '',
      content: '',
      excerpt: '',
      image: '',
      category: 'Tree Care Tips'
    });
    setIsAddingPost(false);
  };

  const handleDeletePost = (id: number) => {
    if (confirm('Are you sure you want to delete this blog post?')) {
      const updatedPosts = blogPosts.filter(post => post.id !== id);
      localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
      setBlogPosts(updatedPosts);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>

          {/* Tabs */}
          <div className="border-b border-gray-200 mb-6">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab('contacts')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'contacts'
                    ? 'border-green-700 text-green-700'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Contact Submissions ({contactSubmissions.length})
              </button>
              <button
                onClick={() => setActiveTab('blog')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'blog'
                    ? 'border-green-700 text-green-700'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Blog Posts ({blogPosts.length})
              </button>
            </nav>
          </div>

          {/* Contact Submissions Tab */}
          {activeTab === 'contacts' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Form Submissions</h2>
              {contactSubmissions.length === 0 ? (
                <p className="text-gray-600">No contact submissions yet.</p>
              ) : (
                <div className="space-y-4">
                  {contactSubmissions.map((submission) => (
                    <div key={submission.id} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{submission.name}</h3>
                          <p className="text-sm text-gray-500">
                            {new Date(submission.timestamp).toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-gray-700">Phone:</span>{' '}
                          <a href={`tel:${submission.phone}`} className="text-green-700 hover:text-green-800">
                            {submission.phone}
                          </a>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Email:</span>{' '}
                          <a href={`mailto:${submission.email}`} className="text-green-700 hover:text-green-800">
                            {submission.email}
                          </a>
                        </div>
                        {submission.service && (
                          <div>
                            <span className="font-medium text-gray-700">Service:</span>{' '}
                            <span className="text-gray-600">{submission.service}</span>
                          </div>
                        )}
                      </div>
                      {submission.message && (
                        <div className="mt-4">
                          <span className="font-medium text-gray-700">Message:</span>
                          <p className="text-gray-600 mt-1">{submission.message}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Blog Posts Tab */}
          {activeTab === 'blog' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Blog Posts</h2>
                <button
                  onClick={() => setIsAddingPost(!isAddingPost)}
                  className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition-colors"
                >
                  {isAddingPost ? 'Cancel' : 'Add New Post'}
                </button>
              </div>

              {/* Add New Post Form */}
              {isAddingPost && (
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Add New Blog Post</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Title *
                      </label>
                      <input
                        type="text"
                        value={newPost.title}
                        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Excerpt *
                      </label>
                      <textarea
                        value={newPost.excerpt}
                        onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Content *
                      </label>
                      <textarea
                        value={newPost.content}
                        onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                        rows={10}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Featured Image URL
                        </label>
                        <input
                          type="text"
                          value={newPost.image}
                          onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
                          placeholder="https://images.unsplash.com/..."
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Category
                        </label>
                        <select
                          value={newPost.category}
                          onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        >
                          <option>Tree Care Tips</option>
                          <option>Regulations</option>
                          <option>Emergency Care</option>
                          <option>Tree Health</option>
                          <option>Planting Guide</option>
                          <option>Seasonal Care</option>
                        </select>
                      </div>
                    </div>
                    <button
                      onClick={handleAddPost}
                      className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition-colors"
                    >
                      Publish Post
                    </button>
                  </div>
                </div>
              )}

              {/* Blog Posts List */}
              {blogPosts.length === 0 ? (
                <p className="text-gray-600">No blog posts yet. Add your first post above.</p>
              ) : (
                <div className="space-y-4">
                  {blogPosts.map((post) => (
                    <div key={post.id} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
                          <p className="text-sm text-gray-500">
                            {new Date(post.date).toLocaleDateString()} • {post.category}
                          </p>
                        </div>
                        <button
                          onClick={() => handleDeletePost(post.id)}
                          className="text-red-600 hover:text-red-800 text-sm"
                        >
                          Delete
                        </button>
                      </div>
                      <p className="text-gray-600 mb-2">{post.excerpt}</p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-green-700 hover:text-green-800 text-sm font-medium"
                      >
                        View Post →
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

import React from 'react';
import type { BlogPost } from '../types';

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: 'CNN Mimarilerini Anlamak: LeNet\'ten EfficientNet\'e',
        excerpt: 'Bu yazıda, Konvolüsyonel Sinir Ağlarının evrimini ve modern mimarilerin arkasındaki temel fikirleri inceliyorum.',
        imageUrl: 'https://images.unsplash.com/photo-1639815188546-c43c240ff424?q=80&w=600&auto=format&fit=crop',
        date: '15 Ağustos 2023',
    },
    {
        id: 2,
        title: 'Makine Öğrenmesi Projelerinde Model Seçimi',
        excerpt: 'Bir problem için doğru makine öğrenmesi modelini seçmek neden önemlidir? Karar ağaçlarından sinir ağlarına, seçim kriterlerini tartışıyorum.',
        imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop',
        date: '22 Eylül 2023',
    },
    {
        id: 3,
        title: 'Transformer Mimarisi: Dikkat Her Şeydir!',
        excerpt: 'NLP dünyasında devrim yaratan "Attention is All You Need" makalesini ve Transformer mimarisinin temel yapı taşlarını mercek altına alıyorum.',
        imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=600&auto=format&fit=crop',
        date: '10 Kasım 2023',
    },
];

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => (
    <div className="bg-[#111111] rounded-lg overflow-hidden group transition-all duration-300 hover:-translate-y-2 border border-gray-800 hover:border-gray-600">
        <div className="relative overflow-hidden h-48">
            <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        </div>
        <div className="p-6">
            <p className="text-sm text-gray-500 mb-2">{post.date}</p>
            <h3 className="text-lg font-bold text-white mb-3">{post.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
            <a href="#" className="font-semibold text-gray-300 hover:text-white transition-colors">Devamını Oku &rarr;</a>
        </div>
    </div>
);

const Blog: React.FC = () => {
    return (
        <section id="blog" className="py-20 md:py-32 bg-[#111]">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-white mb-16 uppercase tracking-wider">
                    Öğrenme Günlüğüm
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map(post => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
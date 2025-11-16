import React from 'react';

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatarUrl: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CourseModule {
    // FIX: Import React to use React.ElementType
    icon: React.ElementType;
    title: string;
    description: string;
}
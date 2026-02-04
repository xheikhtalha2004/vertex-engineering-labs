
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  details?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  situation?: string;
  task?: string;
  action?: string;
  result?: string;
}

export interface Tool {
  name: string;
  logo: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

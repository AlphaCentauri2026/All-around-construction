#!/usr/bin/env node

/**
 * Template Setup Script
 * This script helps users quickly customize the construction website template
 */

import fs from 'fs';
import path from 'path';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🏗️  Construction Template Website Setup');
console.log('==================================================\n');

const questions = [
  {
    key: 'companyName',
    question: 'What is your company name? ',
    default: 'Construction Template'
  },
  {
    key: 'tagline',
    question: 'What is your company tagline? ',
    default: 'Building Dreams, Creating Excellence'
  },
  {
    key: 'description',
    question: 'Brief company description: ',
    default: 'Professional construction services with over 20 years of experience'
  },
  {
    key: 'phone',
    question: 'Phone number: ',
    default: '(555) 123-4567'
  },
  {
    key: 'email',
    question: 'Email address: ',
    default: 'info@yourcompany.com'
  },
  {
    key: 'street',
    question: 'Street address: ',
    default: '123 Main Street'
  },
  {
    key: 'city',
    question: 'City: ',
    default: 'Your City'
  },
  {
    key: 'state',
    question: 'State: ',
    default: 'Your State'
  },
  {
    key: 'zip',
    question: 'ZIP code: ',
    default: '12345'
  }
];

const answers = {};

function askQuestion(index) {
  if (index >= questions.length) {
    updateCompanyData();
    return;
  }

  const q = questions[index];
  rl.question(q.question, (answer) => {
    answers[q.key] = answer.trim() || q.default;
    askQuestion(index + 1);
  });
}

function updateCompanyData() {
  console.log('\n📝 Updating company information...');
  
  const companyData = {
    name: answers.companyName,
    tagline: answers.tagline,
    description: answers.description,
    phone: answers.phone,
    email: answers.email,
    address: {
      street: answers.street,
      city: answers.city,
      state: answers.state,
      zip: answers.zip
    },
    social: {
      facebook: "https://facebook.com/yourcompany",
      twitter: "https://twitter.com/yourcompany", 
      instagram: "https://instagram.com/yourcompany",
      linkedin: "https://linkedin.com/company/yourcompany"
    }
  };

  const companyPath = path.join(__dirname, 'src', 'data', 'company.json');
  
  try {
    fs.writeFileSync(companyPath, JSON.stringify(companyData, null, 2));
    console.log('✅ Company information updated successfully!');
  } catch (error) {
    console.error('❌ Error updating company data:', error.message);
  }

  console.log('\n🎉 Template setup complete!');
  console.log('\nNext steps:');
  console.log('1. Replace images in public/images/ with your own');
  console.log('2. Update services in src/data/services.json');
  console.log('3. Add your projects to src/data/projects.json');
  console.log('4. Update testimonials in src/data/testimonials.json');
  console.log('5. Run "npm run dev" to start development server');
  console.log('\nFor detailed customization, see TEMPLATE_CONFIG.md');
  
  rl.close();
}

// Start the setup process
askQuestion(0);

const { createReader } = require('@keystatic/core/reader');
const path = require('path');

// Mocking process.cwd() for the script
const reader = createReader(process.cwd(), require('./keystatic.config').default);

async function debug() {
  try {
    const profile = await reader.singletons.profile.read();
    console.log('Profile keys:', Object.keys(profile));
    console.log('Bio type:', typeof profile.bio);
    if (typeof profile.bio === 'function') {
      const bio = await profile.bio();
      console.log('Bio resolved value type:', typeof bio);
      console.log('Is array:', Array.isArray(bio));
      console.log('Bio value sample:', JSON.stringify(bio).substring(0, 100));
    } else {
      console.log('Bio is not a function:', profile.bio);
    }
  } catch (e) {
    console.error('Debug error:', e);
  }
}

debug();

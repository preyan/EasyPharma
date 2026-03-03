try {
  require('@nx/angular');
  console.log('Successfully loaded @nx/angular');
} catch (e) {
  console.error('Failed to load @nx/angular');
  if (typeof e === 'object') {
    console.error('Error keys:', Object.keys(e));
    console.error('Error stringified:', JSON.stringify(e, null, 2));
    if (e.message) console.error('Message:', e.message);
    if (e.stack) console.error('Stack:', e.stack);
  } else {
    console.error(e);
  }
}

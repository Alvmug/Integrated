import fs from 'fs';
import path from 'path';

console.log('🔍 Analyzing HomeAd and my-student projects...');

const homeAdPath = 'D:/HomeAd';
const studentPath = 'D:/my-student/@latest';

// Check if projects exist
if (!fs.existsSync(homeAdPath)) {
  console.log('❌ HomeAd project not found at:', homeAdPath);
} else {
  console.log('✅ Found HomeAd project');
}

if (!fs.existsSync(studentPath)) {
  console.log('❌ my-student project not found at:', studentPath);
} else {
  console.log('✅ Found my-student project');
}

// Analyze package.json files
try {
  const homeAdPkg = JSON.parse(fs.readFileSync(path.join(homeAdPath, 'package.json')));
  const studentPkg = JSON.parse(fs.readFileSync(path.join(studentPath, 'package.json')));
  
  console.log('\n📦 Vue Versions:');
  console.log('  HomeAd:', homeAdPkg.dependencies?.vue || homeAdPkg.devDependencies?.vue);
  console.log('  my-student:', studentPkg.dependencies?.vue || studentPkg.devDependencies?.vue);
  
  console.log('\n⚡ Vite Versions:');
  console.log('  HomeAd:', homeAdPkg.devDependencies?.vite);
  console.log('  my-student:', studentPkg.devDependencies?.vite);
  
} catch (error) {
  console.log('❌ Error reading package files:', error.message);
}
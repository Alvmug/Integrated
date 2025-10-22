import fs from 'fs'
import path from 'path'

console.log('🔧 Fixing TypeScript projects...')

// Fix main.ts files instead of main.js
const projects = [
  { name: 'HomeAd', path: 'homead' },
  { name: 'my-student', path: 'student' },
]

projects.forEach((project) => {
  // Try .ts first, then .js
  const mainTsPath = `src/projects/${project.path}/main.ts`
  const mainJsPath = `src/projects/${project.path}/main.js`

  if (fs.existsSync(mainTsPath)) {
    let content = fs.readFileSync(mainTsPath, 'utf8')
    content = '// Integrated into main project\n// ' + content.replace(/\n/g, '\n// ')
    fs.writeFileSync(mainTsPath, content)
    console.log(`✅ Fixed ${project.name} main.ts`)
  } else if (fs.existsSync(mainJsPath)) {
    let content = fs.readFileSync(mainJsPath, 'utf8')
    content = '// Integrated into main project\n// ' + content.replace(/\n/g, '\n// ')
    fs.writeFileSync(mainJsPath, content)
    console.log(`✅ Fixed ${project.name} main.js`)
  } else {
    console.log(`⚠️ No main file found for ${project.name}`)
  }
})

console.log('✅ TypeScript fixes applied')

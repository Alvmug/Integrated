import fs from 'fs'

console.log('🔧 Disabling main.js files to prevent conflicts...')

const projects = [
  { name: 'HomeAd', path: 'homead' },
  { name: 'my-student', path: 'student' },
]

projects.forEach((project) => {
  const mainJsPath = `src/projects/${project.path}/main.js`

  if (fs.existsSync(mainJsPath)) {
    let content = fs.readFileSync(mainJsPath, 'utf8')
    content = `// DISABLED - Integrated into main project\n// This file is disabled to prevent multiple Vue instances\n/*\n${content}\n*/`
    fs.writeFileSync(mainJsPath, content)
    console.log(`✅ Disabled ${project.name} main.js`)
  }
})

console.log('✅ Main files disabled')

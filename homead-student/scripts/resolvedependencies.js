import fs from 'fs'

console.log('🔄 Resolving dependencies for HomeAd and my-student...')

const homeAdPkg = JSON.parse(fs.readFileSync('./backup-homead/package.json'))
const studentPkg = JSON.parse(fs.readFileSync('./backup-student/package.json'))
const basePkg = JSON.parse(fs.readFileSync('./package.json'))

// Merge dependencies (choose the higher versions since they're compatible)
const mergedDeps = {
  ...homeAdPkg.dependencies,
  ...studentPkg.dependencies,
  ...basePkg.dependencies,
}

const mergedDevDeps = {
  ...homeAdPkg.devDependencies,
  ...studentPkg.devDependencies,
  ...basePkg.devDependencies,
}

// Use the higher Vue version (3.5.22 from my-student)
mergedDeps.vue = studentPkg.dependencies.vue

// Update package.json
basePkg.dependencies = mergedDeps
basePkg.devDependencies = mergedDevDeps

fs.writeFileSync('./package.json', JSON.stringify(basePkg, null, 2))
console.log('✅ package.json updated with HomeAd + my-student dependencies')

console.log('\n📦 Final Versions:')
console.log('  Vue:', mergedDeps.vue)
console.log('  Vite:', mergedDevDeps.vite)
console.log('  Vue Router:', mergedDeps['vue-router'])

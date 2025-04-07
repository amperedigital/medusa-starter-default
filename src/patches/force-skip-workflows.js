// src/patches/force-skip-workflows.js

console.log("⚡ FORCE PATCH: Disabling workflows manually...");

const framework = require("@medusajs/framework");

// Monkey patch the module loading
const originalLoadInternal = framework.loadInternal;

framework.loadInternal = async function (...args) {
  const loaded = await originalLoadInternal.apply(this, args);
  
  if (loaded && loaded.workflowsService) {
    console.log("🛑 Removing workflows service manually.");
    delete loaded.workflowsService;
  }
  
  return loaded;
};

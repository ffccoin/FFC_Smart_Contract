const { spawnSync } = require('child_process');

function runAudits() {
  try {
    // Run MythX
    spawnSync('npx', ['hardhat', 'mythx:analyze'], { stdio: 'inherit' });

    // Run Slither
    spawnSync('npx', ['slither', '.'], { stdio: 'inherit' });

    // Run Solhint
    spawnSync('npx', ['solhint', 'contracts/ForceFinanceCoin.sol'], { stdio: 'inherit' });

    // Run Ethlint
    spawnSync('npx', ['ethlint', 'contracts/ForceFinanceCoin.sol'], { stdio: 'inherit' });

    console.log('Audit completed successfully.');
  } catch (error) {
    console.error('Error occurred during audit:', error);
    process.exit(1);
  }
}

runAudits();

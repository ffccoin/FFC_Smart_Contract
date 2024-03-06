const { task } = require('hardhat/config');
const { exec } = require('child_process');

task('audit', 'Run Mythos analysis on the smart contract')
  .addParam('contract', 'Path to the contract file')
  .setAction(async (args, { run }) => {
    const command = `mythos analyze ${args.contract} Contract \
      --mythxEthAddress=${process.env.MYTHX_ETH_ADDRESS} \
      --mythxPassword=${process.env.MYTHX_PASSWORD}`;
    
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    });
  });

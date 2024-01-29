const parseArgs = () => {
  const argv = process.argv;

  for (let i = 2; i < argv.length; i += 2) {
    const propertyName = argv[i].substring(2);
    const value = argv[i + 1];

    console.log(`${propertyName} is ${value}`);
  }
};

parseArgs();

const parseEnv = () => {
  const environmentVariables = process.env;

  for (let key in environmentVariables) {
    if (key.startsWith('RSS_')) {
      console.log(`RSS_${key}=${environmentVariables[key]}`);
    }
  }
};

parseEnv();

const inputs =  {
  identityProviders: ["idir", "github"],
  environments: ["dev"],
  projectName: "hi",
  validRedirectUrls: {
    dev: ["http://example.com"],
    test: [],
    prod: [],
  },
  id: 1,
}

const stringifyGithubInputs = (inputs) => {
  const stringifiedInputs = {};
  Object.entries(inputs).map(([key, value]) => {
    stringifiedInputs[key] = typeof value === 'string' ? value : JSON.stringify(value);
  });
  return stringifiedInputs;
};

const stringed = stringifyGithubInputs(inputs)

console.log(stringed)
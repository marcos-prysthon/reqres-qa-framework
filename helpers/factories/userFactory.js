export function generateUser(overrides = {}) {
  const timestamp = Date.now();

  return {
    name: `test_user_${timestamp}`,
    job: "QA Engineer",
    ...overrides,
  };
}

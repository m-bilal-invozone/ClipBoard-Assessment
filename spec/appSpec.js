const axios = require('axios')
const filters = require('./data/filters.json');
const jobs = require('./data/jobs.json');

describe("Filters unit test", function() {
  it("should return expected filters data", async () => {
    const res = await axios.get("http://localhost:8000/get-filters");
    expect(res.data.filters).toEqual(filters);
  });
});
describe("Jobs unit test", function() {
  it("should return expected jobs data", async () => {
    const res = await axios.get("http://localhost:8000/get-jobs");
    expect(res.data.jobs).toEqual(jobs);
  });
});

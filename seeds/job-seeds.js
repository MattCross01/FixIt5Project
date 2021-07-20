const { Job } = require('../models');

const jobData = [
{
 id: 1,
 job_name: "Fix Door",
 job_description: "Fix hinges",
 job_pricing: "$60",
},
{
 id: 2,
 job_name: "Fix Washer",
 job_description: "Fix spin cycle issue",
 job_pricing: "$150",
},
{
 id: 3,
 job_name: "Powerwash House",
 job_description: "Wash entire house",
 job_pricing: "$300",
},
{
 id: 4,
 job_name: "Paint Fence",
 job_description: "Paint fence white",
 job_pricing: "$80",
}
]

const seedJob = () => Job.bulkCreate(jobData);

module.exports = seedJob;
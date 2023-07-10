import createJobDescription from './create-job-description';

export default async function handler(req, res) {
  const { jobTitle, industry, keyWords, tone, numWords } = req.body;

  const jobDescription = await createJobDescription({
    jobTitle,
    industry,
    keyWords,
    tone,
    numWords,
  });

  res.status(200).json({
    jobDescription,
  });
}

import createJobDescription from './create-job-description';

export default async function handler(req, res) {
  const { industry, keywords, tone, title, words } = req.body;

  const jobDescription = await createJobDescription({
    industry,
    keywords,
    tone,
    title,
    words,
  });

  res.status(200).json({
    jobDescription,
  });
}

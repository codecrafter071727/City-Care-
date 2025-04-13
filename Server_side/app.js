// Add this to your app.js or main server file
const symptomAnalysisRouter = require('./routes/symptomAnalysis');
app.use('/api/health', symptomAnalysisRouter);
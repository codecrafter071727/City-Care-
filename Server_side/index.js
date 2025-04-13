const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const rootRouter = require('./routes/root');
const symptomAnalysisRouter = require('./routes/symptomAnalysis');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1", rootRouter);
app.use('/api/health', symptomAnalysisRouter);

// Health check endpoint (optional)
app.get("/ping", (req, res) => {
  res.send("Server is up and running ✅");
});

// Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

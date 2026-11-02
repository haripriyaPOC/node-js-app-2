const express = require('express');
const app = express();
app.get('/', (_req, res) => res.json({service: 'employee-service', status: 'running'}));
app.get('/health', (_req, res) => res.status(200).json({status: 'UP'}));
app.get('/api/employees', (_req, res) => res.json([{ id: 1, name: 'Asha' }, { id: 2, name: 'Ravi' }]));
app.listen(process.env.PORT || 3000, '0.0.0.0');

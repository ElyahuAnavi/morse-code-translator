// config/vars.ts

import dotenv from 'dotenv';
import { defaults } from './default';

dotenv.config();

export const vars = {
  nodeEnv: process.env.NODE_ENV || defaults.nodeEnv,
  port: process.env.PORT || defaults.port,
};

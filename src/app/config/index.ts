import path from 'path'
import dotenv from 'dotenv'

interface IConfig {
  port: string
  database_url: string
}

dotenv.config({ path: path.join((process.cwd(), '.env')) })

const config: IConfig = {
  port: process.env.PORT || '5000',
  database_url: process.env.DATABASE_URL || '',
}

export default config

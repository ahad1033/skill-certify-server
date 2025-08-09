import { Server } from 'http'
import mongoose from 'mongoose'

import app from './app'
import config from './app/config'
import { seedAdmin } from './app/modules/user/user.seed'

let server: Server

async function main() {
  try {
    await mongoose.connect(config.database_url as string)

    // Seed Admin if not created
    await seedAdmin()

    server = app.listen(config.port, () => {
      console.log(`app is listening on port ${config.port}`)
    })
  } catch (err) {
    console.log(err)
  }
}

main()

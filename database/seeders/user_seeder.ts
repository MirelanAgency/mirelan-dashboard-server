import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from "#models/user";
import { DateTime } from "luxon";

export default class UserSeeder extends BaseSeeder {
  async run() {
    await User.createMany([
      {
        username: 'virk',
        email: 'virk@adonisjs.com',
        password: 'secret',
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
      },
      {
        username: 'romain',
        email: 'romain@adonisjs.com',
        password: 'supersecret',
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
      },
    ])
  }
}

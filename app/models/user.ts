import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column, hasMany } from "@adonisjs/lucid/orm";
import hash from "@adonisjs/core/services/hash";
import Token from "#models/token";
import type { HasMany } from "@adonisjs/lucid/types/relations";

export default class User extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare username: string

  @column()
  declare email: string

  @column()
  declare password: string

  @column()
  declare settings: object

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await hash.make(user.password)
    }
  }

  @hasMany(() => Token, {
    foreignKey: 'user_id',
  })
  declare tokens: HasMany<typeof Token>;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
